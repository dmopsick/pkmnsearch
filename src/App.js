import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  field: {
    margin: '25px',
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
    label: 'Gen 2',
    value: 'pokedex-gs'
  },
  {
    label: 'Gen 3',
    value: 'pokedex-rs'
  },
  {
    label: 'Gen 4',
    value: 'pokedex-dp'
  },
  {
    label: 'Gen 5',
    value: 'pokedex-bw'
  },
  {
    label: 'Gen 6',
    value: 'pokedex-xy'
  },
  {
    label: 'Gen 7',
    value: 'pokedex-sm'
  },
  {
    label: 'Gen 8',
    value: 'pokedex-swsh'
  },
];

function App() {
  const classes = useStyles();

  let generation, pokemonName;

  const handleChange = event => {
    generation = event.target.value;
  };

  return (
    <div className="App">
      <header className="App-header">
        Open the Serebii page you want, fast.

          <TextField id="pokemonName" value={pokemonName} className={classes.field} label="Enter Pokémon Name." />

        <TextField
          id="select-generation"
          select
          className={classes.field}
          label="Select the gen"
          value={generation}
          onChange={handleChange}
          helperText="Select which generation you want info for."
        >
          {generations.map(gen => (
            <MenuItem key="gen.value" value={gen.value}>
              {gen.label}
            </MenuItem>
          ))}
        </TextField>

        <a>
          
        </a>





      </header>
    </div>
  );
}

export default App;
