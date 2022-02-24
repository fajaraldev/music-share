import React from 'react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery, Hidden } from '@material-ui/core';
import songReducer from './reducer';

export const SongContext = React.createContext({
  song: {
    id: '61ec4933-ed23-4a40-873d-2d93fa6a6354',
    title: "You've Got a Friend in Me",
    artist: 'Rendy Newman',
    thumbnail: 'https://i.ytimg.com/vi/0hG-2tQtdlE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIh',
    duration: 250,
    url: 'https://www.youtube.com/watch?v=0hG-2tQtdlE'
  },
  isPlaying: false
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(songReducer, initialSongState);
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <SongContext.Provider value={{state, dispatch}} >
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Grid container spacing={3}>
        <Grid style={{
          paddingTop: greaterThanSm ? 80 : 10
        }} item xs={12} md={7}>
          <AddSong />
          <SongList/>
        </Grid>
        <Grid style={
          greaterThanMd ? {
            position: 'fixed',
            width: "100%",
            right: 0,
            top: 73
          } : {
            position: 'fixed',
            width: '100%',
            left: 0,
            bottom: 0
          }}
          item xs={12} md={5}>
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
