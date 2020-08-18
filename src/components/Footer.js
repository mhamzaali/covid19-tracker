import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(35deg, #161b33 40%, #0d0c1d 50%)',
        height:'70px',

    },
    title: {
        paddingTop:'30px',
        flexGrow: 1,
        fontSize: '10px',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        color: '#ffffff',
        textShadow: '2px 4px 3px #000000',
        textAlign:'right'
    },
}));

function Footer() {

    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar color="secondary">
                    <Typography variant="h6" className={classes.title}>
                       @ All Rights Reserved 2020
                       Made By Hamza Ali
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Footer;
