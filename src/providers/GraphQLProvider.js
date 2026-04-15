// 'use client' // (not needed in pure React/Vite)
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

export default function GraphQLProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
