import { Button, makeStyles, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Request';
import React from 'react';

const Banner = () => {
    const classes = useStyles();
    const [movie, setMovie] = useState([])

    const truncate = (string, n) => 
      string.lenght > n ? `${string.substring(0, n - 1)} ...` : string 

      useEffect(() => {
        const fetchData = async () => {
          const request = await axios.get(requests.fetchNetflixOriginals)
          setMovie(request.data.results)
          return request
        };
        fetchData();
      }, [])

      console.log(movie)

  return (
    <div className={classes.root} 
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg)`,
        position: 'relative',
        height: '550px',
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'}}
        >

      <div className={classes.content}>
        <Typography variant='h2' component='h1'>
        La Casa de Papel
        </Typography>
    

        <div className={classes.buttons}>
            <Button> Play </Button>
            <Button> My List </Button>
        </div>

        <Typography style={{ wordWrap: 'break-word' }} variant= 'h6' className={classes.description}>
          {
            truncate ('To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.', 60)
          }
        </Typography>

        <div className={classes.fadeBottom} />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { 
  },
  buttons: {
    '& button': {
      cursor: 'pointer',
      color: '#fff',
      fontWeight: 700,
      borderRadius: '5px',
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: '1rem',
      backgroundColor: 'rgba(51, 51, 51, 0.5)'
    },
    '& button:hover': {
      color: '#000',
      backgroundColor: '#e6e6e6'
    }
  },
  fadeBottom: {
    position: 'absolute',
    top: '20vh',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage: 'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)'
  },
  content: {
    padding: theme.spacing(10,0,0,0)
  }
}))

export default Banner