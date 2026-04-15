import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";
import "./index.css";

/** 🔧 Set CSS vars from PUBLIC_URL (images live in /public) */
const rootStyle = document.documentElement.style;
rootStyle.setProperty("--bg-image", `url(${process.env.PUBLIC_URL}/Body-bg.jpg)`);
rootStyle.setProperty("--page-bg", `url(${process.env.PUBLIC_URL}/body/Frame.png)`);

ReactDOM.createRoot(document.getElementById("root")).render(
 <HelmetProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
   </ApolloProvider>
  </HelmetProvider>
);
