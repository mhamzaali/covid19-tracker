
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '40px',
        paddingBottom: '30px',
        background: 'linear-gradient(45deg, #05668d 30%, #f0f3bd 90%)',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '10px',
            width: '320px',
            height: '305px',
        },
     
    },
    logo: {
        width: '140px',
        height: '140px',
    },
    content: {
        textAlign: 'center',
        padding:'20px'
    },
    title:{
        textAlign:'center',
        fontFamily:'Century Gothic',
        fontSize:'24px',
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
export default function Precautions() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                Precautions for Covid-19
            </Typography>
            <Grid item xs={12}>
                <Grid className={classes.cards} container justify="center" spacing={2}>
                    <Paper elevation={3} >
                        <div className={classes.content}>
                            <img src="https://image.flaticon.com/icons/svg/2913/2913564.svg" alt="iconcough" className={classes.logo} />
                            <Typography color="primary" variant="h6" gutterBottom>
                            Wash Your Hands For 20sec
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                            Wash hands often with soap and water for at least 20 seconds.
                            </Typography>
                        </div>
                    </ Paper>
                    <Paper elevation={3} >
                    <div className={classes.content}>
                            <img src="https://image.flaticon.com/icons/svg/3181/3181849.svg" alt="iconcough" className={classes.logo} />
                            <Typography color="primary" variant="h6" gutterBottom>
                            Cover Nose and Mouth When Sneezing
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                            Cover coughs and sneezes with tissues.
                            </Typography>
                        </div>
                    </Paper>
                    <Paper elevation={3} >
                    <div className={classes.content}>
                            <img src="https://image.flaticon.com/icons/svg/2707/2707432.svg" alt="iconcough" className={classes.logo} />
                            <Typography color="primary" variant="h6" gutterBottom>
                            Use Sanitizer
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                            Use hand sanitizer if soap and water are not available.
                            </Typography>
                        </div>
                    </Paper>
                    <Paper elevation={3} >
                    <div className={classes.content}>
                            <img src="https://image.flaticon.com/icons/svg/2913/2913635.svg" alt="iconcough" className={classes.logo} />
                            <Typography color="primary" variant="h6" gutterBottom>
                            Wear Mask or PPE near Crowded Places
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                            Wear Mask when present in a public spaces.
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}