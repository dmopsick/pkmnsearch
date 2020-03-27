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
    genNumber: 1,
    link: 'pokedex'
  },
  {
    label: 'Gen 2',
    genNumber: 2,
    link: 'pokedex-gs'
  },
  {
    label: 'Gen 3',
    genNumber: 3,
    link: 'pokedex-rs'
  },
  {
    label: 'Gen 4',
    genNumber: 4,
    link: 'pokedex-dp'
  },
  {
    label: 'Gen 5',
    genNumber: 5,
    link: 'pokedex-bw'
  },
  {
    label: 'Gen 6',
    genNumber: 6,
    link: 'pokedex-xy'
  },
  {
    label: 'Gen 7',
    genNumber: 7,
    link: 'pokedex-sm'
  },
  {
    label: 'Gen 8',
    genNumber: 8,
    link: 'pokedex-swsh'
  }
];

function App() {
  const classes = useStyles();

  // Define constant link base
  const _URLBASE = "http://serebii.net/";

  // Initialize variables | I do not think this is the best way but here it is
  let generation, pokemonName, pokemonNationalDexNum = "";

  const handleGenChange = event => {
    generation = event.target.value;
  };

  const handleNameChange = event => {
    // Get the raw input of the pokemon name
    const rawPokemonName = event.target.value;

    // Serebii links are case sensitive so must convert pokemon name to lowercase
    pokemonName = rawPokemonName.toLowerCase();
  }

  // The function that will be called when the generate link button is pressed
  const generateLink = () => {
    
    // Create variable to hold the link we are generating
    let dynamicLink;

    console.log(pokemonName);

    // Check to see if the user is searching for Gen 8 info on the Pokemon
    // Gen 8 links by name. PokeAPI does not include Gen 8 Pokemon
    if (generation.genNumber == 8) {
      console.log("Generate gen 8 link");
      dynamicLink = _URLBASE + generation.link + "/" + pokemonName;

      // Enable the Open Serebii Button 
      document.getElementById("dynamicLink").disabled = false;

      console.log(dynamicLink);

      // Having trouble getting href to populate dynamically with react
      document.getElementById("dynamicLink").href = dynamicLink;
    }
    // Gens 1-7 link exclusively by national dex number
    else {
      console.log("Generate gen 1-7 link");

      // Get the dex num
      pokemonService.getPokemonNationalDexNumByName(pokemonName).then((nationlDexNumResponse) => {
        console.log("NATIONAL DEX NUM - " + nationlDexNumResponse);

        // Check for -1 which means that the Pokemon name is invalid or is Gen8 only
        if (nationlDexNumResponse == -1) {
          // The pokemon does not exist in generation or invalid name
          dynamicLink = "#";

          // Disable the Open Serebii Button 
          document.getElementById("dynamicLink").disabled = true;
        }
        else {
          // Assign the response of the query for national dex to the variable
          pokemonNationalDexNum = nationlDexNumResponse;

          // Enable the Open Serebii Button
          document.getElementById("dynamicLink").disabled = false;

          dynamicLink = _URLBASE + generation.link + "/" + pokemonNationalDexNum;
        }

        console.log(dynamicLink);

        // Having trouble getting href to populate dynamically with react
        document.getElementById("dynamicLink").href = dynamicLink;
      });
    }
  }

  // Text field components taken from https://material-ui.com/components/text-fields/
  return (

    <div className="App">
      <header className="App-header">
        Open the Serebii page you want, slowly.

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
            // console.log(gen), // Need to figure out why this is being run twice
            <MenuItem key={gen.genNumber} value={gen}>
              {gen.label}
            </MenuItem>
          ))}
        </TextField>


        <Button variant="contained" className={classes.field} onClick={generateLink}>
          Generate Link
        </Button>

        <p id="generateLinkResponseText">Show text that shows how the generating went</p>

        <Button id="dynamicLink" variant="contained" className={classes.field} disabled>
          Open Serebii
        </Button>

      </header>
    </div>
  );
}

export default App;
