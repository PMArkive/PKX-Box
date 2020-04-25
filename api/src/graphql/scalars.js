import { GraphQLScalarType, GraphQLError } from 'graphql';
import { Kind } from 'graphql/language';

export const createStringSizeScalar = ({ name, maxLength, ...options }) => {
  const validateStringLength = str => {
    if (str.length >= maxLength) {
      throw new GraphQLError('String size too large!');
    }

    return str;
  };

  return new GraphQLScalarType({
    name,
    description: `A string with a max length of ${maxLength}`,
    serialize: str => str,
    parseValue: str =>
      validateStringLength(validateStringLength) ? str : null,
    parseLiteral: ({ kind, value }) =>
      kind === Kind.STRING && validateStringLength(value) ? value : null,
    ...options,
  });
};
