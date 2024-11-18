// lib/apollo-client.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://cloud.multichoiceagency.nl/graphql", // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
