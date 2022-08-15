import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logo from '../images/netflixLogo.png'
import BannerLogin from '../images/banner-login.png'
import { NetflixButton, NetflixInbut } from "../styled/styledcomponents";
import SignUp from './SignUp'
import { useState } from "react";


const Login = () => {
    const classes = useStyles();
    const [signIn, setSignIn] = useState(false)
    return (
        <div className={classes.root}>
            <img src={logo} alt='logo' className={classes.logo} />

            <NetflixButton className={classes.NetflixButton}>Iniciar Sesion</NetflixButton>

            <div className={classes.info}>

                {
                    !signIn ? (<SignUp />) : (
                        <>
                            <Typography variant= 'h4' gutterBottom> 
                                Unlimited films, TV programmes and more.
                            </Typography>

                            <Typography variant= 'h5' gutterBottom> 
                                Watch anywhere. Cancel at any time.
                            </Typography>

                            <Typography variant= 'h6' gutterBottom> 
                                Ready to watch ? Enter your email to create or restart your membership.
                            </Typography>

                            <div className={classes.inputBlock}>

                                <NetflixInbut placeholder= "Email address" />

                                <NetflixButton wide='medium' onClick={() => setSignIn(true)}>
                                     GET STARTED 
                                </NetflixButton>

                            </div>
                        </>
                    )
                }


            </div>

        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        posotion: 'relative',
        height: '100vh',
        backgroundImage: `url(${BannerLogin})`,
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        position: 'fixed',
        top: 20,
        left: 20,
        width:'150px',
        cursor: 'pointer',
    },
    NetflixButton: {
        position: 'fixed',
        zIndex: 15,
        right: 20,
        top: 20,
    },
    info: {
        color: '#fff',
        zIndex: 15,
        textAlign: 'center',
        '& h4': {
            fontWeight: 800,
            '& h5': {
                fontWeight: 400,
            }
        }
    },
  }))

export default Login