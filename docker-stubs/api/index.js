import { app } from './src';

const port = 5000;
app.listen(port, () =>
  console.log(`Access GraphQL Playground from http://localhost:${port}/graphql`),
);
