# PKX-Box Web App

## Purpose

This is the web app for PKX-Box which allows users to upload, view, and organize their Pokemon.

## Environment Variables

There really aren't environment variables in the same way an API has environment variables, more like build variables. When Webpack builds the bundle, it can bake in configuration that can be accessed like environment variables in a Node.js app.

Due to the above, environment variables are prefixed with `REACT_APP` to avoid leaking build pipeline information during build time.

- REACT_APP_API - url of the GraphQL API
- REACT_APP_LOGIN_URL - login url when users click the "Login" button
- REACT_APP_COLLECTION_PREVIEW_POKEMON_LIMIT - limit of Pokemon shown in collection previews on the collection list screen. Example: 18
- REACT_APP_GIT_HASH - git hash to bake into the app during build time, and is used to identify the deployed commit. This is automatically calculated and set on build.
- REACT_APP_BUILD_EPOCH - time the web app was built so users know when new features/bug fixes are available. This is automatically calculated and set on build.

## Primary tools used

- [React](https://reactjs.org/) - UI library
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client to talk with the API
- [i18next](https://www.i18next.com/) - i18n support
- [Storybook](https://storybook.js.org/) - allows building components in isolation and documenting usage
- [ESLint](https://eslint.org/) - linter
