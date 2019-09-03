import gql from 'graphql-tag'

export default gql`
  type ModuleA_Mutations {
    moduleA_doSomething1(arg1: String!, arg2: ID!): Boolean
  }

  extend type Mutation {
    moduleA: ModuleA_Mutations
  }
`
