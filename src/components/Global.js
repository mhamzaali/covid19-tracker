
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '40px',
        paddingBottom: '30px',
        background: 'linear-gradient(45deg, #f08080 30%, #ffdab9 90%)',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '10px',
            width: '400px',
            height: '150px',
        },
    },
    content:{
        textAlign:'center',
        paddingTop:'30px',
        textShadow: '3px 3px 5px #000000', 
    },
    globe:{
        width:'80px',
        height:'80px',
        float: 'left',
        marginRight:'-60px',
        marginTop:'-18px',
    },
    title:{
        flexGrow: 1,
        textAlign:'center',
        fontFamily:'Century Gothic',
        fontSize:'28px',
        fontWeight:'Bold',
        paddingTop:'10px', 
        paddingBottom:'10px', 
        color:'white',  
        textShadow: '2px 2px 5px #000000', 
        border: '1px solid #000',
        backgroundImage: 'linear-gradient(to right, #0d1b2a 0%, #415a77 100%)',
        borderRadius: '15px',
        marginBottom: '25px',
        width:'350px',
        display: 'block',
        margin: '0 auto',
        paddingLeft:'10px',
        paddingRight:'10px',
    }
}));
export default function Global() {
    const classes = useStyles();

    const [GlobalData, SetGlobalData] = useState();
    const [LoadingData,SetLoadingData] = useState(false);

    useEffect( () => {
        async function fetchGlobalData() {
            SetLoadingData(true);
            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const dataFromAPI = await apiResponse.json();
            SetLoadingData(false);
            SetGlobalData(dataFromAPI);
        }
    fetchGlobalData();    
    },[]);
    const Loading = 'Loading...';

if(LoadingData){
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
            <img className={classes.globe} src="https://media3.giphy.com/media/Ur1ePKk5h82J2nKUmm/source.gif" alt="globe" />
                Global Data
            </Typography>
                <Grid item xs={12}>
                <Grid className={classes.cards} container justify="center" spacing={2}>
                    <Paper elevation={3} style={{background: 'linear-gradient(90deg, #e9c46a 30%, #e76f51 90%)', color:'white',}}>
                    <div className={classes.content} >
                    <Typography variant="h3">
                    {Loading}
                    </Typography>
                    <Typography variant="subtitle2" >
                    TOTAL CASES
                    </Typography>
                    </div>
                    </ Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(90deg, #c52233 30%, #580c1f 90%)', color:'white',}} >
                    <div className={classes.content} >
                    <Typography variant="h3" >
                    {Loading}
                    </Typography>
                    <Typography variant="subtitle2">
                    TOTAL DEATHS
                    </Typography>
                    </div>
                    </Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(45deg, #52b788 30%, #2d6a4f 90%)', color:'white',}} >
                    <div className={classes.content}  >
                    <Typography variant="h3" gutterBottom="true">
                    {Loading}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom="true">
                    TOTAL RECOVERED
                    </Typography>
                    </div>
                    </Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(45deg, #11151c 30%, #364156 90%)', color:'white',}}  >
                    <div className={classes.content} >
                    <Typography variant="h3" gutterBottom="true">
                    {Loading}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom="true">
                    NEW CASES TODAY
                    </Typography>
                    </div>
                    </Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(45deg, #023e8a 30%, #48cae4 90%)', color:'white',}} >
                    <div className={classes.content} >
                    <Typography variant="h3" gutterBottom="true">
                    {Loading}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom="true">
                    NEW DEATHS TODAY
                    </Typography>
                    </div>
                    </Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(45deg, #b76935 30%, #38413f 90%)', color:'white',}}  >
                    <div className={classes.content} >
                    <Typography variant="h3" gutterBottom="true">
                    {Loading}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom="true">
                    CRITICAL CASES
                    </Typography>
                    </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
    }

    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
            <img className={classes.globe} src="https://media3.giphy.com/media/Ur1ePKk5h82J2nKUmm/source.gif" alt="globe" />
                Global Data
            </Typography>
            <Grid item xs={12}>
                <Grid className={classes.cards} container justify="center" spacing={2}>
                    <Paper elevation={3} style={{background: 'linear-gradient(90deg, #e9c46a 30%, #e76f51 90%)', color:'white',}}>
                    <div className={classes.content} >
                    <Typography variant="h3">
                    <NumberFormat value={GlobalData && GlobalData.results[0].total_cases} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle2" >
                    TOTAL CASES
                    </Typography>
                    </div>
                    </ Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(90deg, #c52233 30%, #580c1f 90%)', color:'white',}} >
                    <div className={classes.content} >
                    <Typography variant="h3" >
                    <NumberFormat value={GlobalData && GlobalData.results[0].total_deaths} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle2">
                    TOTAL DEATHS
                    </Typography>
                    </div>
                    </Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(45deg, #52b788 30%, #2d6a4f 90%)', color:'white',}} >
                    <div className={classes.content}  >
                    <Typography variant="h3" gutterBottom="true">
                    <NumberFormat value={GlobalData && GlobalData.results[0].total_recovered} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom="true">
                    TOTAL RECOVERED
                    </Typography>
                    </div>
                    </Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(45deg, #11151c 30%, #364156 90%)', color:'white',}}  >
                    <div className={classes.content} >
                    <Typography variant="h3" gutterBottom="true">
                    <NumberFormat value={GlobalData && GlobalData.results[0].total_new_cases_today} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom="true">
                    NEW CASES TODAY
                    </Typography>
                    </div>
                    </Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(45deg, #023e8a 30%, #48cae4 90%)', color:'white',}} >
                    <div className={classes.content} >
                    <Typography variant="h3" gutterBottom="true">
                    <NumberFormat value={GlobalData && GlobalData.results[0].total_new_deaths_today} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom="true">
                    NEW DEATHS TODAY
                    </Typography>
                    </div>
                    </Paper>
                    <Paper elevation={3} style={{background: 'linear-gradient(45deg, #b76935 30%, #38413f 90%)', color:'white',}}  >
                    <div className={classes.content} >
                    <Typography variant="h3" gutterBottom="true">
                    <NumberFormat value={GlobalData && GlobalData.results[0].total_serious_cases} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom="true">
                    CRITICAL CASES
                    </Typography>
                    </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
    
}