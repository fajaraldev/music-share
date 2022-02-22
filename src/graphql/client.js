import ApolloClient from 'apollo-boost';

const authToken = 'z7na18C1pkLLQ2zkIxIC0zDh4PvC7Qm5YRdicuMJmyZ569iuJN2EXVEJ1GIn8kOn';

const client = new ApolloClient({
  uri: 'https://bootcamp-music-share.hasura.app/v1/graphql',
  headers: { 'x-hasura-admin-secret': `${authToken}` }
});

export default client;
