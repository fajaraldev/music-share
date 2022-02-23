import { gql } from 'apollo-boost';

const GET_QUEUED_SONGS = gql`
query getQueuedSong {
  queue @client {
    id
    artist
    title
    thumbnail
    duration
    url
  }
}`;

export default GET_QUEUED_SONGS;
