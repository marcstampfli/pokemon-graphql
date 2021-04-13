import React from "react";
import ApolloCLient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";
import "./App.css";

function App() {
  const client = new ApolloCLient({
    uri: "https://graphql-pokemon2.vercel.app",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
