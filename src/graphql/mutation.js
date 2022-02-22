import {gql} from 'apollo-boost';

const ADD_SONG = gql`
mutation addSong($title: String!, $artist: String!, $thumbnail: String!, $duration: Float!, $url: String!) {
  insert_songs(objects: {title: $title, artist: $artist, thumbnail: $thumbnail, duration: $duration, url: $url}) {
    affected_rows
  }
}`;

export default ADD_SONG;
