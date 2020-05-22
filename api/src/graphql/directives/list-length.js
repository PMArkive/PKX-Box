import { gql, SchemaDirectiveVisitor } from 'apollo-server-express';
import { GraphQLList, defaultFieldResolver } from 'graphql';

export const ListLengthType = gql`
  directive @listLength(max: Int) on ARGUMENT_DEFINITION
`;

export class ListLength extends SchemaDirectiveVisitor {
  visitArgumentDefinition(arg, { field }) {
    if (!field.type instanceof GraphQLList) {
      throw new Error('Not a list type!');
    }

    const oldResolver = field.resolve || defaultFieldResolver;

    field.resolve = (...args) => {
      const argValue = args[1]?.[arg.name];

      if (argValue.length > this.args.max) {
        throw new Error(`Length too long!  Max is ${this.args.max}`);
      }

      return oldResolver.apply(this, args);
    };
  }
}
