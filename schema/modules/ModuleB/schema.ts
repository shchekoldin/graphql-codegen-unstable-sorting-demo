import gql from 'graphql-tag'

export default gql`
  extend type Query {
    moduleB_getSomething1(arg1: ID!): [String!]
  }
`
