import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(35deg, rgb(1, 50, 54) 40%, #005D66 50%)',

    },
    title: {
        flexGrow: 1,
        fontSize: '20px',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        color: '#ffffff',
        textShadow: '2px 4px 3px #000000',
    },
    logo: {
        width: '30px',
        height: '30px',
        float: 'left',
        marginRight:'20px',
    }

}));

function Header() {

    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar color="secondary">
                    <Typography variant="h6" className={classes.title}>
                    <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1200px-SARS-CoV-2_without_background.png" alt="logo" />
                        Covid - 19 Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
