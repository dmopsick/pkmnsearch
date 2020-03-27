import React from 'react';

// Initializes the PokeApi wrapper - https://github.com/PokeAPI/pokeapi-js-wrapper
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

// Take in a name of a pokemon and return its JSON object from PokeAPI
export async function getPokemonByName(pokemonName) {
    // Strip the whitespace from the pokemon name.. to be safe doing it here
    const formattedPokemonName = pokemonName.trim();

    const pokemonResponse = await P.getPokemonByName(formattedPokemonName)

    console.log("FLAG 5");
    console.log(pokemonResponse);

    return pokemonResponse;
}

// This is used to generate a link | Should be used for Gens 1-7
// Take in the name of a pokemon and return it's National Dex ID number
// If the entered name is not a valid pokemon name the request returns null
export async function getPokemonNationalDexNumByName(pokemonName) {
    // Strip the whitespace from the pokemon name.. to be safe doing it here
    const formattedPokemonName = pokemonName.trim();

    // Assign a variable to return 
    let pokemonNationalDexNum;

    // Surround the call to the API with a try catch block
    // Prevents invalid pokemon name to error out the system
    try {
        const pokemonResponse = await P.getPokemonByName(formattedPokemonName).then((response => {
            console.log("FLAG 10")
            console.log(response);

            // Get the national dex num of the pokemon
            pokemonNationalDexNum = response.id;
        }));

    }
    catch (e) {
        console.log(e);
        pokemonNationalDexNum = -1;
    }

    return pokemonNationalDexNum;
}
