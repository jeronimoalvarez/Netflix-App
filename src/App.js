import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/UserSlice'
import React from 'react';

function App() {
  const classes = useStyles();
  const auth = getAuth();
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe
  }, [dispatch])

  return (
    <div className={classes.root}>
      <Router>
        {
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/checkout' element={<Paypal />} />
              <Route path='/' element={<Home/>} />
            </Routes>
        }
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#111'
  }
}))

export default App;