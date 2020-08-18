
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';

import {Doughnut, Polar, Pie, HorizontalBar, Bar, Line} from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '40px',
        paddingBottom: '30px',
        background: 'linear-gradient(45deg, #6d597a 30%, #e0b1cb 90%)',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '10px',
            width: '470px',
            height: '460px',
        },
        
    },
    content:{
        textAlign:'center',
        paddingTop:'5px',
        width:'500px',
    },
    bar:{
        textAlign:'center',
        paddingTop:'5px',
        width:'460px',
    },
    globe:{
        width:'80px',
        height:'80px',
        float: 'left',
        marginRight:'-20px',
        marginTop:'-18px',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Century Gothic',
        fontSize: '28px',
        fontWeight: 'Bold',
        paddingTop: '10px',
        paddingBottom: '10px',
        color: 'white',
        textShadow: '2px 2px 5px #000000',
        border: '1px solid #000',
        backgroundImage: 'linear-gradient(to right, #0d1b2a 0%, #415a77 100%)',
        borderRadius: '25px',
        marginBottom: '25px',
        width: '350px',
        display: 'block',
        margin: '0 auto',
    },
    textTitle:{
        color:'black',
        paddingBottom:'5px'
    }
}));






export default function GlobalCharts() {
    const classes = useStyles();

    const [GlobalData, SetGlobalData] = useState();

    useEffect(() => {
        async function fetchGlobalData() {

            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const dataFromAPI = await apiResponse.json();

            SetGlobalData(dataFromAPI);
        }
        fetchGlobalData();
    }, []);
    
    const data = {
        labels: ['Total Cases', 'Total Deaths', 'Total Recoverd','Critical Cases'],

        datasets: [{
            data: [GlobalData && GlobalData.results[0].total_cases,
                   GlobalData && GlobalData.results[0].total_deaths,
                   GlobalData && GlobalData.results[0].total_serious_cases,
                   GlobalData && GlobalData.results[0].total_recovered],

            backgroundColor: [
            '#f58549',
            '#7F374C',
            '#88d498',
            '#ff686b'
            ],
            hoverBackgroundColor: [
            '#f2a65a',
            '#211103',
            '#09bc8a',
            '#fe938c'
            ]
        }]
    };
    const data2 = {
        labels: ['Total Cases', 'Total Deaths', 'Total Recovered','Critical Cases'],
      datasets: [
          {
            label: 'No. of People',
            backgroundColor: [
                '#f58549',
                '#7F374C',
                '#88d498',
                '#ff686b'
                ],
            borderColor: 'white',
            borderWidth: 2,
            hoverBackgroundColor: [
                '#f2a65a',
                '#211103',
                '#09bc8a',
                '#fe938c'
                ],
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [GlobalData && GlobalData.results[0].total_cases,
                   GlobalData && GlobalData.results[0].total_deaths,
                   GlobalData && GlobalData.results[0].total_serious_cases,
                   GlobalData && GlobalData.results[0].total_recovered],
            fill: false,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: [
                '#f58549',
                '#7F374C',
                '#88d498',
                '#ff686b'
                ],
            pointBackgroundColor: '#fff',
            pointBorderWidth: 15,
            pointHoverRadius: 30,
            pointHoverBackgroundColor: [
                '#f2a65a',
                '#211103',
                '#09bc8a',
                '#fe938c'
                ],
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
          }
        ]
      };


    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
            <img className={classes.globe} src="https://media3.giphy.com/media/Ur1ePKk5h82J2nKUmm/source.gif" alt="globe" />
                Global Data Charts
            </Typography>
            <Grid item xs={12}>
                <Grid className={classes.cards} container justify="center" spacing={2}>
                    <Paper elevation={3} style={{ background: 'linear-gradient(45deg, #f2ed6f 30%, #ffcf56 90%)',}}>
                        <div className={classes.content} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Doughnut Chart
                        </Typography>
                        <Doughnut data={data} height={250} />
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(135deg, #f2ed6f 40%, #ffcf56 90%)',}}>
                        <div className={classes.content} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Polar Chart
                        </Typography>
                        <Polar data={data} height={250} />
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(45deg, #f2ed6f 30%, #ffcf56 90%)',}}>
                        <div className={classes.content} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Pie Chart
                        </Typography>
                        <Pie data={data} height={250} />
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(135deg, #f2ed6f 30%, #ffcf56 90%)',}}>
                        <div className={classes.bar} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Horizontal-Bar Chart
                        </Typography>
                        <HorizontalBar data={data2} height={250}/>
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(135deg, #f2ed6f 60%, #ffcf56 90%)',}}>
                        <div className={classes.bar} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Bar Chart
                        </Typography>
                        <Bar data={data2} height={250}/>
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(135deg, #f2ed6f 60%, #ffcf56 90%)',}}>
                        <div className={classes.bar} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Line Chart
                        </Typography>
                        <Line data={data2} height={250}/>
                        </div>
                    </ Paper>
                </Grid>
            </Grid>
        </div>
    );

}