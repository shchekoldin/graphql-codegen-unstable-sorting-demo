import gql from 'graphql-tag'

export default gql`
  extend type Query {
    moduleC_getSomething1(arg1: String!): [String!]
    moduleC_getSomething2(arg1: ID!): String
  }

  extend type Mutation {
    moduleC_doSomething1(arg1: ID!): String
  }
`
