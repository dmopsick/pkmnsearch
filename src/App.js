import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  textField: {
    color: 'white',
  },
});

// List of each generation
// label - what to display in the dropdown
// value - the pokedex link used to form the URL to serebii
const generations = [
  {
    label: 'Gen 1',
    value: 'pokedex'
  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  }
];

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
          Open the Serebii page you want, fast.

          <TextField id="pokemonName" className={classes.textField} label="Enter Pokémon Name."/>

          <select>
            <option>Select the generation.</option>
          </select>



      </header>
    </div>
  );
}

export default App;
