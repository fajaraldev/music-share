import { gql } from 'apollo-boost';

const GET_SONGS = gql`
subscription getSongs {
  songs(order_by: {created_at: desc}) {
    artist
    duration
    id
    thumbnail
    title
    url
  }
}`;

export default GET_SONGS;
