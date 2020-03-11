import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Papa from 'papaparse';

const App = () => {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    Papa.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-09-2020.csv", {
      download: true,
      header: true,
      // rest of config ...
      error: function(err, file, inputElem, reason)
      {
        // executed if an error occurs while loading the file,
        // or if before callback aborted for some reason
      },
      complete: function(results) {
        console.log("Finished:", results.data);
        setData(results.data); 
      }
    })
  }, [])

  useEffect(() => {
    console.log("data:", data);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
