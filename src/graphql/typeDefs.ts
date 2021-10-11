import { gql } from 'apollo-server';

export const typeDefs = gql`
  type People {
    next: String
    people: [Person!]
  }

  type Person {
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: String!
  }
  type Query {
    getPeople(page: Int!): People!
    searchPeople(personsName: String!): People!
  }
`;
