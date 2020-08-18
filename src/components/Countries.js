import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import CountUp from 'react-countup';


import {Doughnut, Polar, Pie, HorizontalBar, Bar, Line} from 'react-chartjs-2';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto 0 auto',
        paddingBottom:'100px',
        paddingTop:'30px',
        background: 'linear-gradient(45deg, #58EFEC 30%, #C481A7 90%)',
    },
    formControl: {
        minWidth: '100%'
    },
    media: {
        height: 60,
    },
    center: {
        textAlign: 'center'
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
    cardschart: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '10px',
            width: '470px',
            height: '460px',
        },
        paddingTop: '40px',
        paddingBottom: '30px',
        background: 'linear-gradient(45deg, #cc444b 30%, #e39695 90%)',
    },
    content:{
        textAlign:'center',
        paddingTop:'30px',
        textShadow: '3px 3px 5px #000000', 
    },
    bar:{
        textAlign:'center',
        paddingTop:'5px',
        width:'460px',
    },

}));


export default function Mycountry() {

    const classes = useStyles();

    const [screenDataType, setScreenType] = useState(1);
    const [countryCode, setCountryCode] = useState(1);
    const [countriesData, setCountriesData] = useState([{}]);
    const [countriesFlag, setCountriesFlag] = useState([{}]);


    useEffect(() => {


        async function getAllCountriesData() {
            const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const data = await response.json();
            const countriesObj = data.countryitems[0];
            setCountriesData(countriesObj);
            setScreenType(2);
            let countriesArray = [];
            Object.keys(countriesObj).map((key, ind) => {
                return countriesArray.push(countriesObj[key]);
            })
        }

        async function getAllCountryFlags() {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await response.json();
            setCountriesFlag(data);
        }

    
        getAllCountriesData();
        getAllCountryFlags();


    }, [])

    // function for handling change in data or type of data

    function handleCountryChange(event) {
        setCountryCode(event.target.value);        
    }
    
    let totalCases = 0;    
    let totalRecovered = 0;
    let totalDeaths = 0;
    let totalNewCasesToday = 0;
    let totalDeathsToday = 0;
    let totalSeriousCases = 0;
    let flagUrl = '';

    if (screenDataType === 1) {
        
    }
    else {
        totalCases = countriesData[countryCode]["total_cases"];        
        totalDeaths = countriesData[countryCode]["total_deaths"];
        totalRecovered = countriesData[countryCode]["total_recovered"];
        totalSeriousCases = countriesData[countryCode]["total_serious_cases"];
        totalNewCasesToday = countriesData[countryCode]["total_new_cases_today"];
        totalDeathsToday = countriesData[countryCode]["total_new_deaths_today"];
        let code = countriesData[countryCode]["code"];
        flagUrl = countriesFlag.filter((x) => x.alpha2Code === code)[0].flag;
    }



    const data = {
        labels: ['Total Cases', 'Total Deaths', 'Total Recoverd','Critical Cases'],

        datasets: [{
            data: [totalCases,
                   totalDeaths,
                   totalRecovered,
                   totalSeriousCases
                   ],

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
            data: [totalCases,
                  totalDeaths,
                  totalRecovered,
                  totalSeriousCases],
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
        <div>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>     
                </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Select Country</InputLabel>
                                <Select
                                    native
                                    value={countryCode}
                                    onChange={handleCountryChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    {Object.keys(countriesData).map((key, ind) => {
                                        return (
                                            <option value={key} key={ind}>{countriesData[key].title}</option>
                                          )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                <Grid item xs={12} sm={12} md={1} className={classes.center}>
                    <img src={flagUrl} className={classes.media} alt={'flag'} />
                </Grid>
                <Grid className={classes.cards} container justify="center" spacing={2}>
                <Paper elevation={3} style={{background: 'linear-gradient(90deg, #e9c46a 30%, #e76f51 90%)', color:'white',}}>
                    <div className={classes.content} >
                    <Typography variant="h3">
                    <CountUp delay={0} start={0} duration={2} end={totalCases} separator=',' />
                    </Typography>
                    <Typography variant="subtitle2" >
                    TOTAL CASES
                    </Typography>
                    </div>
                </ Paper>
                <Paper elevation={3} style={{background: 'linear-gradient(90deg, #c52233 30%, #580c1f 90%)', color:'white',}}>
                    <div className={classes.content} >
                    <Typography variant="h3">
                    <CountUp delay={0} start={0} duration={2} end={totalDeaths} separator=',' />
                    </Typography>
                    <Typography variant="subtitle2" >
                    TOTAL Deaths
                    </Typography>
                    </div>
                </ Paper>
                <Paper elevation={3} style={{background: 'linear-gradient(45deg, #52b788 30%, #2d6a4f 90%)', color:'white',}}>
                    <div className={classes.content} >
                    <Typography variant="h3">
                    <CountUp delay={0} start={0} duration={2} end={totalRecovered} separator=',' />
                    </Typography>
                    <Typography variant="subtitle2" >
                    TOTAL Recovered
                    </Typography>
                    </div>
                </ Paper>
                <Paper elevation={3} style={{background: 'linear-gradient(45deg, #b76935 30%, #38413f 90%)', color:'white',}}>
                    <div className={classes.content} >
                    <Typography variant="h3">
                    <CountUp delay={0} start={0} duration={2} end={totalSeriousCases} separator=',' />
                    </Typography>
                    <Typography variant="subtitle2" >
                    TOTAL Serious Cases
                    </Typography>
                    </div>
                </ Paper>
                <Paper elevation={3} style={{background: 'linear-gradient(45deg, #11151c 30%, #364156 90%)', color:'white',}}>
                    <div className={classes.content} >
                    <Typography variant="h3">
                    <CountUp delay={0} start={0} duration={2} end={totalNewCasesToday} separator=',' />
                    </Typography>
                    <Typography variant="subtitle2" >
                    New Cases Today
                    </Typography>
                    </div>
                </ Paper>
                <Paper elevation={3} style={{background: 'linear-gradient(45deg, #023e8a 30%, #48cae4 90%)', color:'white',}}>
                    <div className={classes.content} >
                    <Typography variant="h3">
                    <CountUp delay={0} start={0} duration={2} end={totalDeathsToday} separator=',' />
                    </Typography>
                    <Typography variant="subtitle2" >
                    New Deaths Today
                    </Typography>
                    </div>
                </ Paper>
                </Grid>
            </Grid>
        </div>
                <Grid className={classes.cardschart} container justify="center">
                    <Paper elevation={3} style={{ background: 'linear-gradient(45deg, #aaf683 30%, #7de2d1 90%)',}}>
                        <div className={classes.content} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Doughnut Chart
                        </Typography>
                        <Doughnut data={data} height={250} />
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(45deg, #aaf683 30%, #7de2d1 90%)',}}>
                        <div className={classes.content} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Polar Chart
                        </Typography>
                        <Polar data={data} height={250} />
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(45deg, #aaf683 30%, #7de2d1 90%)',}}>
                        <div className={classes.content} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Pie Chart
                        </Typography>
                        <Pie data={data} height={250} />
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(45deg, #aaf683 30%, #7de2d1 90%)',}}>
                        <div className={classes.bar} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Horizontal-Bar Chart
                        </Typography>
                        <HorizontalBar data={data2} height={250}/>
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(45deg, #aaf683 30%, #7de2d1 90%)',}}>
                        <div className={classes.bar} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Bar Chart
                        </Typography>
                        <Bar data={data2} height={250}/>
                        </div>
                    </ Paper>
                    <Paper elevation={3} style={{ background: 'linear-gradient(45deg, #aaf683 30%, #7de2d1 90%)',}}>
                        <div className={classes.bar} >    
                        <Typography className={classes.textTitle} variant="subtitle2">
                        Line Chart
                        </Typography>
                        <Line data={data2} height={250}/>
                        </div>
                    </ Paper>
                </Grid>
        </div>      
    )
}