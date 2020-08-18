
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '40px',
        paddingBottom: '30px',
        background: 'linear-gradient(45deg, #436C89 30%, #8B2C40 90%)',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '10px',
            width: '300px',
            height: '200px',
        },
        
    },
    logo: {
        width: '140px',
        height: '140px',
    },
    content: {
        textAlign: 'center',
        paddingTop: '20px',

    },
    title:{
        textAlign:'center',
        fontFamily:'Century Gothic',
        fontSize:'26px',
        fontWeight:'Bold',
        paddingTop:'10px', 
        paddingBottom:'10px', 
        color:'white',  
        textShadow: '2px 2px 5px #000000', 
        border: '1px solid #000',
        backgroundImage: 'linear-gradient(to right, #0d1b2a 0%, #415a77 100%)',
        borderRadius: '25px',
        marginBottom: '25px',
        width:'350px',
        display: 'block',
        margin: '0 auto', 
    }
}));
export default function Symptoms() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                Symptoms of Covid-19
            </Typography>
            <Grid item xs={12}>
                <Grid className={classes.cards} container justify="center" spacing={2}>
                    <Paper elevation={3} >
                        <div className={classes.content}>
                            <img src="https://image.flaticon.com/icons/svg/2877/2877806.svg" alt="iconcough" className={classes.logo} />
                            <Typography color="textSecondary" gutterBottom>
                                Coughing
                            </Typography>
                        </div>
                    </ Paper>
                    <Paper elevation={3} >
                        <div className={classes.content}>
                            <img src="https://image.flaticon.com/icons/svg/2877/2877527.svg" alt="iconcough" className={classes.logo} />
                            <Typography color="textSecondary" gutterBottom>
                                Fever
                            </Typography>
                        </div>
                    </Paper>
                    <Paper elevation={3} >
                        <div className={classes.content}>
                            <img src="https://image.flaticon.com/icons/svg/2877/2877543.svg" alt="iconcough" className={classes.logo} />
                            <Typography color="textSecondary" gutterBottom>
                                Sore Throat
                            </Typography>
                        </div>
                    </Paper>
                    <Paper elevation={3} >
                        <div className={classes.content}>
                            <img src="https://image.flaticon.com/icons/svg/2877/2877538.svg" alt="iconcough" className={classes.logo} />
                            <Typography color="textSecondary" gutterBottom>
                                Shortness of Breath
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}