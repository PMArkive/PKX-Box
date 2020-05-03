import gql from "graphql-tag";

export const GET_IS_NAV_DRAWER_OPEN = gql`
  query isNavDrawerOpen {
    isNavDrawerOpen @client
  }
`;
