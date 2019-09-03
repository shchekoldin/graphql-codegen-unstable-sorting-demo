import gql from 'graphql-tag'

export default gql`
  extend type Query {
    moduleD_getSomething1(arg1: ID!): [String!]
    moduleD_getSomething2(arg1: ID!, arg2: String): String
  }

  type ModuleD_Mutations {
    moduleD_doSomething1(arg1: String!): String!
    moduleD_doSomething2(arg1: String!): String
  }

  extend type Mutation {
    moduleD: ModuleD_Mutations
  }
`
