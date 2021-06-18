import { ApolloProvider } from "@apollo/client";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { apolloClient } from "./client";
import App from "./App";

import "./normalize.scss";
import "./tailwind.css";

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  hydrate(
    <ApolloProvider client={apolloClient}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>,
    rootElement
  );
} else {
  render(
    <ApolloProvider client={apolloClient}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>,
    rootElement
  );
}
