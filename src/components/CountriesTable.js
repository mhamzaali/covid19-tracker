
import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
      table: {
    minWidth: 700,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#64e9ee',
        },
    },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '40px',
        paddingBottom: '30px',
        paddingRight:'30px',
        paddingLeft:'30px',
        background: 'linear-gradient(45deg, #000 30%, #009 90%)',
    },
    table: {
        minWidth: 700,
      },
    title: {
        flexGrow: 1,
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
        borderRadius: '15px',
        marginBottom: '25px',
        width: '350px',
        display: 'block',
        margin: '0 auto',
        paddingLeft: '10px',
        paddingRight: '10px',
    }
}));
export default function CountriesTable() {
    
    const classes = useStyles();

    const [countryData, setCountryData] = useState([{}]);

    useEffect(() => {
        async function fetchCountryData() {
            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            let dataFromAPI = await apiResponse.json();
            setCountryData(Object.values(Object.values(dataFromAPI.countryitems)[0]));
            }
        fetchCountryData();
    }, []);


    return ( 
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                All Countries Stats
            </Typography>
            
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Countries</StyledTableCell>
                            <StyledTableCell align="right">Total Cases</StyledTableCell>
                            <StyledTableCell align="right">Active Cases</StyledTableCell>
                            <StyledTableCell align="right" >Total Deaths</StyledTableCell>
                            <StyledTableCell align="right">New Cases</StyledTableCell>
                            <StyledTableCell align="right">New Deaths</StyledTableCell>
                            <StyledTableCell align="right">Total Recovered</StyledTableCell>
                            <StyledTableCell align="right">Total Serious</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countryData.map((key,ind) => 
                        {
                            return(
                                <TableRow key={ind}>
                                <StyledTableCell>{countryData[ind].ourid}</StyledTableCell>
                                <StyledTableCell>{countryData[ind].title}</StyledTableCell>
                                <StyledTableCell align="right" style={{background: '#ffc857'}}>
                                    <NumberFormat value={countryData[ind].total_cases} displayType={'text'} thousandSeparator={true} />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <NumberFormat value={countryData[ind].total_active_cases} displayType={'text'} thousandSeparator={true} />
                                </StyledTableCell>
                                <StyledTableCell align="right" style={{background: '#df7373'}}>
                                    <NumberFormat value={countryData[ind].total_deaths} displayType={'text'} thousandSeparator={true} />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <NumberFormat value={countryData[ind].total_new_cases_today} displayType={'text'} thousandSeparator={true} />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <NumberFormat value={countryData[ind].total_new_deaths_today} displayType={'text'} thousandSeparator={true} />
                                </StyledTableCell>
                                <StyledTableCell align="right" style={{background: '#aaf683'}}>
                                    <NumberFormat value={countryData[ind].total_recovered} displayType={'text'} thousandSeparator={true} />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <NumberFormat value={countryData[ind].total_serious_cases} displayType={'text'} thousandSeparator={true} />
                                </StyledTableCell>
                                </TableRow>
                            );  
                        })}
                    </TableBody>
                </Table>
                    </TableContainer> 
        </div> 
    ); 

}