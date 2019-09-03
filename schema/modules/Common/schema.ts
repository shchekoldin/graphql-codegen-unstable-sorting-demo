import gql from 'graphql-tag'

export default gql`
  scalar Date
  scalar DateTime
  scalar Time
  scalar JSON
  scalar EmailAddress
  scalar NegativeFloat
  scalar NegativeInt
  scalar NonNegativeFloat
  scalar NonNegativeInt
  scalar NonPositiveFloat
  scalar NonPositiveInt
  scalar PhoneNumber
  scalar PositiveFloat
  scalar PositiveInt
  scalar UnsignedFloat
  scalar UnsignedInt
  scalar URL

  interface Node {
    id: ID!
  }

  type Query {
    common_getSomething1(arg1: ID!, arg2: String!, arg3: String, arg4: [String!]): String!
  }

  type Mutation {
    common_doSomething1(arg1: String): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`
