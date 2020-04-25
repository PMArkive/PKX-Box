import { SchemaDirectiveVisitor, gql } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';

export const LoginCheckType = gql`
  directive @loginCheck on FIELD_DEFINITION
`;

export class LoginCheckDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async (...args) => {
      const context = args[2];
      if (context?.user?.id) {
        return await resolve.apply(this, args);
      }

      throw new Error('Must be logged in to perform this action');
    };
  }
}
