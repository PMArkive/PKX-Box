import { GraphQLScalarType, GraphQLError } from 'graphql';
import { Kind } from 'graphql/language';

// Thanks to https://www.apollographql.com/docs/apollo-server/schema/creating-directives/#enforcing-value-restrictions
export class LimitedLengthType extends GraphQLScalarType {
  constructor(type, maxLength, name) {
    super({
      name: name || `StringMaxLength${maxLength}`,

      serialize(value) {
        value = type.serialize(value);

        if (value.length > maxLength) {
          throw new Error('Length is greater than max length!');
        }

        return value;
      },

      parseValue(value) {
        return type.parseValue(value);
      },

      parseLiteral(ast) {
        return type.parseLiteral(ast);
      },
    });
  }
}
