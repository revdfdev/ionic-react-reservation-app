import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://merkmod.co.in:4444/graphql",
  fetchOptions: {
    credentials: 'include'
  },
  request: async (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({ networkError }: any) => {
    if (networkError) console.log("Network error", networkError);
    if (networkError.statusCode === 401) localStorage.removeItem('token');
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));