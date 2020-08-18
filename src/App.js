import React from 'react';

import './App.css';
import Header from "./components/Header";
import Title from './components/Title';
import Symptoms from './components/Symptoms'
import Precaution from './components/Precaution'
import Global from './components/Global'
import GlobalCharts from './components/GlobalChart'
import CountriesTable from './components/CountriesTable'
import Countries from './components/Countries'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Title />
      <Symptoms />
      <Precaution />
      <Global />
      <GlobalCharts />
      <Countries />
      <CountriesTable />
      <Footer />
    </div>
  );
}

export default App;
