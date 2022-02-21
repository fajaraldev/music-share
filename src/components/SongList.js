import React from 'react';
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  makeStyles
} from '@material-ui/core';
import {Save, PlayArrow} from '@material-ui/icons'

function SongList() {
  let loading = false;

  const song = {
    title: "You've Got a Friend in Me",
    artist: "Rendy Newman",
    thumbnail: "https://i.ytimg.com/vi/0hG-2tQtdlE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEqEFedS9-wM2ZOwo60Vg4c7OdDw"
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
      }}>
        <CircularProgress/>
      </div>
    );
  }

  return (
    <>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song}/>
      ))}
    </>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(3),
  },
  songInfoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  songInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  thumbnail: {
    objectFit: 'cover',
    height: 100,
    width: 100
  }
}));

function Song({ song }) {
  const classes = useStyles();
  const { thumbnail, title, artist } = song;

  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia image={thumbnail} className={classes.thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" color="primary">
              <PlayArrow/>
            </IconButton>
            <IconButton size="small" color="secondary">
              <Save color="secondary"/>
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  )
}

export default SongList;
