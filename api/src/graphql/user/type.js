import { gql } from 'apollo-server-express';

export const UserType = gql`
  type User {
    id: DiscordId!
    discordUsername: String
    discordDiscriminator: String
    fullDiscordName: String
    collection(collectionId: FirestoreId!): Collection
    collections: [Collection]
  }

  extend type Query {
    user(userId: DiscordId!): User
  }
`;
