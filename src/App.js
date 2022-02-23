import React from 'react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery, Hidden } from '@material-ui/core';
import songReducer from './reducer';

export const SongContext = React.createContext({
  song: {
    id: 'a91a1336-b6ed-4645-a182-bed50a3c428d',
    title: 'Bukan Sa Lagi',
    artist: 'Anak Kompleks',
    thumbnail: 'http://img.youtube.com/vi/nkAe90WEPCQ/0.jpg',
    duration: 255,
    url: 'https://www.youtube.com/watch?v=nkAe90WEPCQ'
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
