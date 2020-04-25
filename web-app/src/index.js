import React from "react";
import "./i18n";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./graphql/client";
import { Routes } from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
