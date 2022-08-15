import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Plans from '../components/Plans';
import netflixavatar from '../images/netflixAvatar.png'
import { NetflixButton } from '../styled/styledcomponents';

function Profile() {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <div className={classes.root}>
        <Header />

        <Typography variant= 'h3'> Edit Profile</Typography>

        <div className={classes.body}>

          <div className={classes.info}>

            <img src={netflixavatar} alt='avatar' />

            <div className={classes.details}>
              <div className={classes.plans}>
                <Typography variant='h6'> Email usuario </Typography>
                <Typography className= {classes.plansText} variant='h5' gutterBottom> Plans </Typography>
                <Plans cost={7.99}> Netflix Standard </Plans>
                <Plans cost={11.99}> Netflix Basic </Plans>
                <Plans wide='medium' color= 'gray' cost={15.99}> Netflix Premium </Plans>
                <NetflixButton onClick={() => navigate('/login')} wide= 'fullWidth' > Sign Out </NetflixButton>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color:'#fff',
    minHeight: '100vh',
    Width: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  info: {
    width: '800px',
    display:'flex',
    '& img': {
      height: '100px',
      [theme.breakpoints.down('sm')]: {
        display:'none'
      }
    }
  },
  details: {
    width: '71%',
    marginLeft: theme.spacing(3),
    '& h6': {
      backgroundColor: '#aaa',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: '18px',
    },
  },
  plans: {
    width: '100%',
  },
  plansText: {
    borderBottom: '1px solid lightgray'
  },
}))

export default Profile

