// src/lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const WP_GRAPHQL_ENDPOINT =

  "https://post.hjsysweb.com/graphql"; // fallback

const client = new ApolloClient({
  link: new HttpLink({
    uri: WP_GRAPHQL_ENDPOINT,
    // fetch is available in browsers; no extra polyfill needed
  }),
  cache: new InMemoryCache(),
  // If your WP content updates often, consider typePolicies to normalize by id/slug
});

export default client;
