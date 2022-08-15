import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import logo from '../images/netflixLogo.png'
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hideHeader)
    return () => window.removeEventListener('scroll', hideHeader)
  }, [])

  return (
    <AppBar position='sticky' elevation= {0} className={`${classes.root} ${show && classes.transparent}`}>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => navigate('/')}>
          <img src={logo} alt='logo' className={classes.logo} />
        </IconButton>
        <IconButton onClick={() => navigate('/profile')}>
          <Avatar variant='square' style={{cursor: 'pointer'}} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    top: 0,
    left: 0,
    right: 0,
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width:'100px',
    cursor: 'pointer'
  }
}))

export default Header