
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    textAlign: 'center',

  },
  image: {
    width: '100%',
    height: '100%',
  },
  heading: {
    position: 'absolute',
    color: 'white',
    top: '140px',
    left: '36px',
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    // eslint-disable-next-line
    color: '#ffffff',
    textShadow: '2px 4px 3px #000000',
    fontSize: '1.2rem',
    '@media (width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xs')]: {
      fontSize:'21px',
      marginTop:'-120px',
      marginLeft:'-29px',
  
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'24px',
      marginTop:'-100px',
      marginLeft:'-20px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'36px',
      marginTop:'-90px',
      marginLeft:'-5px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:'58px',
      marginTop:'-50px',
      marginLeft:'-20px',
    },

  },
  subheading: {
    position: 'absolute',
    color: 'white',
    top: '250px',
    left: '46px',
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    // eslint-disable-next-line
    color: '#ffffff',
    textShadow: '2px 4px 3px #000000',
    fontSize: '1.2rem',
  '@media (width:600px)': {
    fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xs')]: {
      textAlign:'left',
      fontSize:'12px',
      width:'170px',
      marginTop:'-190px',
      marginLeft:'-35px',

    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'14px',
      width:'200px',
      marginTop:'-170px',
      marginLeft:'-35px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'20px',
      width:'300px',
      marginTop:'-130px',
      marginLeft:'-15px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:'28px',
      width:'520px',
      marginTop:'-40px',
      marginLeft:'-25px',
    },
  },
  text: {
    position: 'absolute',
    color: 'white',
    top: '300px',
    left: '46px',
    fontFamily: 'Century Gothic',
    textAlign: 'left',
    fontWeight: 'bold',
   // eslint-disable-next-line
    color: '#ffffff',
    textShadow: '2px 4px 3px #000000',
    fontSize: '1.2rem',
  '@media (width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('xs')]: {
    textAlign:'left',
    fontSize:'8px',
    width:'175px',
    marginTop:'-200px',
    marginLeft:'-35px',

  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'10px',
    width:'220px',
    marginTop:'-180px',
    marginLeft:'-35px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize:'14px',
    width:'300px',
    marginTop:'-100px',
    marginLeft:'-15px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize:'18px',
    width:'100%',
    marginTop:'20px',
    marginLeft:'-20px',
  },
 
  },
  righttext: {
    position: 'absolute',
    color: 'white',
    bottom: '210px',
    right: '46px',
    fontFamily: 'Lato',
    fontWeight:'bold',
    textAlign: 'left',
       // eslint-disable-next-line
    color: '#ffffff',
    textShadow: '2px 2px 0 black',
    fontSize: '1.2rem',
    '@media (width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xs')]: {
      textAlign:'left',
      fontSize:'14px',
      width:'175px',
      marginBottom:'-140px',
      marginRight:'-50px',
  
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'18px',
      width:'220px',
      marginBottom:'-120px',
      marginRight:'-40px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'28px',
      width:'400px',
      marginBottom:'-80px',
      marginRight:'-70px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:'42px',
      width:'700px',
      marginBottom:'-20px',
      marginRight:'-240px',
    },
  },

}));

export default function Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <img className={classes.image} src="https://www.avma.org/sites/default/files/2020-03/MCM-COVID-19-HERO-1-2880x900.jpg" alt="covid" />
          <div className={classes.textdiv}>
            <ThemeProvider theme={theme}>
              <Typography className={classes.heading} variant="h2" gutterbottom>
                Covid-19 Tracker
               </Typography>
              <Typography className={classes.subheading} variant="h5">
                Live Global Data and Country wise Data Including
              </Typography>
              <Typography className={classes.text} variant="h6">
                Total Cases | Active Cases | Total Deaths | Total Recovered <br></br>
                Cases Today | Deaths Today | Recovered Today
              </Typography>
              <Typography className={classes.righttext} variant="h6">
                Symptoms of Covid-19 <br></br>
                Precaution for Covid - 19
              </Typography>
            </ThemeProvider>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}