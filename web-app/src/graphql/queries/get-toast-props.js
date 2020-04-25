import gql from 'graphql-tag';

export const GET_TOAST = gql`
  query getToast {
    toast @client {
      text
      severity
      isOpen
    }
  }
`;
