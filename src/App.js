import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import * as pokemonService from './services/pokemon-service';

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
  }
];

function App() {
  const classes = useStyles();
  console.log(pokemonService.getPokemonByName("pikachu"));

  // Define constant link base
  const urlBase = "http://serebii.net/";

  // Initialize variables | I do not think this is the best way but here it is
  let generation, pokemonName, dynamicURL = "";

  const handleGenChange = event => {
    generation = event.target.value;
    updateURL();
    console.log(dynamicURL);
  };

  const handleNameChange = event => {
    // Get the raw input of the pokemon name
    const rawPokemonName = event.target.value;

    // Serebii links are case sensitive so must convert pokemon name to lowercase
    pokemonName = rawPokemonName.toLowerCase();

    updateURL();
    console.log(dynamicURL);
  }

  const updateURL = () => {
    console.log("FLAG 1");
    console.log(generation);
    console.log(pokemonName);
    dynamicURL = urlBase + generation + "/" + pokemonName;
    // Having trouble getting href to populate dynamically with react
    document.getElementById("dynamicLink").href = dynamicURL;
  };

  // Text field components taken from https://material-ui.com/components/text-fields/
  return (

    <div className="App">
      <header className="App-header">
        Open the Serebii page you want, fast.

          <TextField id="pokemonName" value={pokemonName} onChange={handleNameChange} className={classes.field} label="Enter Pokémon Name." />

          <TextField
            id="select-generation"
            select
            className={classes.field}
            label="Select the gen"
            value={generation}
            onChange={handleGenChange}
            helperText="Select which generation you want info for."
          >
            {generations.map(gen => (
              console.log(gen),
              <MenuItem key="gen.label" value={gen.value}>
                {gen.label}
              </MenuItem>
            ))}
          </TextField>

        <a id="dynamicLink"href={dynamicURL} target="_blank">
          <Button variant="contained">
            Open Serebii
            </Button>
        </a>
      </header>
    </div>
  );
}

export default App;
