import gql from 'graphql-tag';

export const SET_TOAST = gql`
  mutation setToast($input: ToastInput) {
    toast: setToast(input: $input) @client {
      text
      severity
      isOpen
    }
  }
`;
