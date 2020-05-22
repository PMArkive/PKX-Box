import { gql, SchemaDirectiveVisitor } from 'apollo-server-express';
import { GraphQLScalarType, GraphQLNonNull } from 'graphql';
import { LimitedLengthType } from '../scalars';

// Thanks to https://www.apollographql.com/docs/apollo-server/schema/creating-directives/#enforcing-value-restrictions
export const ScalarLengthType = gql`
  directive @scalarLength(max: Int) on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
`;

export class ScalarLength extends SchemaDirectiveVisitor {
  visitInputFieldDefinition(field) {
    this.wrapType(field);
  }

  visitFieldDefinition(field) {
    this.wrapType(field);
  }

  wrapType(field) {
    if (
      field.type instanceof GraphQLNonNull &&
      field.type.ofType instanceof GraphQLScalarType
    ) {
      field.type = new GraphQLNonNull(
        new LimitedLengthType(field.type.ofType, this.args.max),
      );
    } else if (field.type instanceof GraphQLScalarType) {
      field.type = new LimitedLengthType(field.type, this.args.max);
    } else {
      throw new Error(`Not a scalar type: ${field.type}`);
    }
  }
}
