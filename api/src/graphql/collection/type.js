import { gql } from 'apollo-server-express';

export const CollectionType = gql`
  type Collection {
    id: String
    pokemon: [PKXDocument]
  }
`;
