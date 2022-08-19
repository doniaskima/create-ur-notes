import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();
    const user = null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant="h2" align="center">Create Your Notes</Typography>
                <img className={classes.image} src="https://raw.githubusercontent.com/doniaskima/challenge-05-websites-with-reactjs/let's-code-website/src/images/hero-girl.png" alt="coding" height="100" width="200" />
            </div>
            <Toolbar className={classes.toolbar}>

                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" classNaame={classes.logout} color="seconary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar