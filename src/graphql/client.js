import ApolloClient from 'apollo-client';
import { gql } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import GET_QUEUED_SONGS from './queries';

const authToken = 'z7na18C1pkLLQ2zkIxIC0zDh4PvC7Qm5YRdicuMJmyZ569iuJN2EXVEJ1GIn8kOn';

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'ws://bootcamp-music-share.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {'x-hasura-admin-secret': `${authToken}`},
      }
    }
  }),
  cache: new InMemoryCache(),
  typeDefs: gql`
  type Song{
    id: uuid!,
    tite: String!,
    artist: String!,
    thumbnail: String!,
    duration: Float!,
    url: String!
  }

  input SongInput{
    id: uuid!,
    tite: String!,
    artist: String!,
    thumbnail: String!,
    duration: Float!,
    url: String!
  }

  type Query{
    queue : [Song]!
  }

  type Mutation{
    addOrRemoveFromQueue(input: SongInput!): [Song]!
  }`,

  resolvers: {
    Mutation: {
      addOrRemoveFromQueue: (_, {input}, {cache}) => {
        const queryResult = cache.readQuery({
          query: GET_QUEUED_SONGS
        });
        if (queryResult) {
          const { queue } = queryResult;
          const isInQueue = queue.some(song => song.id === input.id);
          const newQueue = isInQueue ? queue.filter(song => song.id !== input.id) : [...queue, input];
          cache.writeQuery({
            query: GET_QUEUED_SONGS,
            data: { queue: newQueue }
          });
          return newQueue;
        }
        return [];
      }
    }
  }
});

const hasQueue = Boolean(localStorage.getItem('queue'));

const data = {
  queue: hasQueue ? JSON.parse(localStorage.getItem('queue')) : []
}

client.writeData({ data });

export default client;


// import ApolloClient from 'apollo-boost';

// const authToken = 'z7na18C1pkLLQ2zkIxIC0zDh4PvC7Qm5YRdicuMJmyZ569iuJN2EXVEJ1GIn8kOn';

// const client = new ApolloClient({
//   uri: 'https://bootcamp-music-share.hasura.app/v1/graphql',
//   headers: { 'x-hasura-admin-secret': `${authToken}` }
// });

// export default client;
