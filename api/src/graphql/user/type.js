import { gql } from 'apollo-server-express';

export const UserType = gql`
  type User {
    id: DiscordId!
    loginExpiration: Int!
    discordUsername: String
    discordDiscriminator: String
    collection(collectionId: FirestoreId!): Collection
    collections: [Collection]
  }

  extend type Query {
    "User of the requester."
    viewer: User
    user(userId: DiscordId!): User
  }
`;
