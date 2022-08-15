import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Row = ({title, fetchUrl, isLargeRow}) => {
  const classes = useStyles();
  const [movie, setMovie] = useState([])

  const base_url = 'https://image.tmdb.org/t/p/original' 

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovie(request.data.results)
      return request
    };
    fetchData();
  }, [fetchUrl])



  return (
    <div className={classes.root}>

      <Typography variant='h4'> {title} </Typography>

      <div className={classes.posters}>
        {
          movie.map(
            (movie) => 
              ((isLargeRow && movie.poster_path) || 
              (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`${classes.poster} ${isLargeRow && classes.posterLarge}`}
                  key={movie.id}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie?.backdrop_path}`}
                  alt={movie?.name}
                />
              )
          )
        }
      </div>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    marginLeft: theme.spacing(4)
  },
  posters: {
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  poster: {
    maxHeight: '12rem',
    objectFit: 'contain',
    marginRight: theme.spacing(1),
    transition: 'transform 450ms',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  posterLarge: {
    maxHeight: '15rem',
    '&:hover': {
      transform: 'scale(1.15)',
    },
  },
}))

export default Row