import React from 'react'
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from '@material-ui/core';

const Form = () => {
    const classes = useStyles();
    const handleSubmit = () => {
        
    }
    return (
        <Paper className={classes.paper}>
            <form className="off" noValidate className={classes.form} onSubmit={handleSubmit}>

            </form>
        </Paper>
    )
}

export default Form