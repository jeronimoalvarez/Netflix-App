import { makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react'
import { NetflixInbut, NetflixButton } from '../styled/styledcomponents';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import netflixApp from '../firebase.js';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth();
  const navigate = useNavigate()

  const singIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => navigate('/'))
      .catch((err) => alert(err.message))
  }

  const register = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => navigate('/'))
      .catch((err) => alert(err.message))
  }

  return (
    <div className={classes.root}>

      <Typography variant='h5' align='left'>
        Sign In
      </Typography>

      <form className={classes.form}>

        <NetflixInbut 
          value={email} 
          onChange= {(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email' 
          className={classes.email} 
        />

        <NetflixInbut 
          value={password} 
          onChange= {(p) => setPassword(p.target.value)}
          type='password'
          placeholder='Password' 
          className={classes.password} 
        />

        <NetflixButton 
          onClick={singIn}
          type='submit' 
          wide='medium' 
          radius 
        > 
          Sign In 
        </NetflixButton>

        <Typography variant= 'subtitle2' >
          New to Netflix? {'  '}
          <span 
            className={classes.signupLink}
            onClick={register}
          >
            Sign Up{' '}
          </span>
        </Typography>

      </form>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '350px',
    width: '20rem',
    height: '25rem',
    background: 'rgba(0,0,0,0.65)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  form: {
    width: '80%',
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
  signupLink: {
    color: '#fff',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

export default SignUp
