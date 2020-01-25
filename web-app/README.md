# PKX-Box Web App

## Purpose

This is the web app for PKX-Box which allows users to upload, view, and organize their Pokemon.

## Environment Variables

In a web app, there really aren't environment variables in the same way an API has environment variables. However when Webpack builds the bundle, it can bake in configuration that can be accessed like environment variables on a Node.js API.

- REACT_APP_API - the url to the GraphQL API

## Primary tools used

- [React](https://reactjs.org/) - UI library
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client to talk with the API
- [i18next](https://www.i18next.com/) - i18n support
- [Storybook](https://storybook.js.org/) - allows building components in isolation and documenting usage
- [ESLint](https://eslint.org/) - linter
