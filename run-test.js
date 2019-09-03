#!/usr/bin/env node
const log = require('npmlog');
const shell = require('shelljs');
const fs = require('fs');
const Diff = require('diff');

const SCHEMA_PATH = './schema/generated.schema.graphql';
const PREV_SCHEMA_PATH = `${SCHEMA_PATH}.prev`;

let stop = false;

log.info('', 'Running loop');

if (fs.existsSync(PREV_SCHEMA_PATH)) {
    log.info('', 'Removing "previous" schema');

    fs.unlinkSync(PREV_SCHEMA_PATH);
}

while (!stop) {
    log.info('', 'Generating schema');

    shell.exec('yarn codegen');

    if (fs.existsSync(PREV_SCHEMA_PATH)) {
        log.info('', 'Checking diff');

        const data1 = fs.readFileSync(PREV_SCHEMA_PATH, {
            encoding: 'utf-8',
        });

        const data2 = fs.readFileSync(SCHEMA_PATH, {
            encoding: 'utf-8',
        });

        const diffResult = Diff.diffLines(data1, data2);

        for (const part of diffResult) {
            if (part.added) {
                log.error('', 'Added line(s):\n%s', part.value);

                stop = true;
            } else if (part.removed) {
                log.error('', 'Removed line(s):\n%s', part.value);

                stop = true;
            }
        }
    }

    log.info('Saving "previous" schema');

    fs.copyFileSync(SCHEMA_PATH, PREV_SCHEMA_PATH);
}
