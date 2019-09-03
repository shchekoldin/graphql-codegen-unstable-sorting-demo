import gql from 'graphql-tag'

export default gql`
  extend type Query {
    moduleE_getSomething1(arg1: String): [String!]!
    moduleE_getSomething2(arg1: String!, arg2: String!): [String!]!
    moduleE_getSomething3(arg1: String!, arg2: String!): [String!]!
    moduleE_getSomething4(arg1: String!, arg2: String!): [String!]!
    moduleE_getSomething5(arg1: String!): JSON!
    moduleE_getSomething6(arg1: String!, arg2: String!): [String!]!
    moduleE_getSomething7(arg1: ID!): String!
    moduleE_getSomething8(arg1: String!): [String!]!
    moduleE_getSomething9(arg1: ID!): String!
    moduleE_getSomething10(arg1: String): [String!]!
    moduleE_getSomething11(arg1: String): [String!]!
    moduleE_getSomething12: [String!]!
    moduleE_getSomething13: [String!]!
    moduleE_getSomething14: [String!]!
  }

  extend type Mutation {
    moduleE_doSomething1(arg1: String!): Boolean
    moduleE_doSomething2(arg1: ID!, arg2: String!): Boolean
    moduleE_doSomething3(arg1: ID!): Boolean
    moduleE_doSomething4(arg1: String!): Boolean
    moduleE_doSomething5(arg1: ID!, args: String!): Boolean
    moduleE_doSomething6(arg1: ID!): Boolean
  }
`
