import React from 'react';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

// Take in a name of a pokemon and return its JSON object from PokeAPI
export async function getPokemonByName(pokemonName) {
    // Strip the whitespace from the pokemon name.. to be safe doing it here
    const formattedPokemonName = pokemonName.trim();

    const pokemonResponse = await P.getPokemonByName(formattedPokemonName)

    console.log("FLAG 5");
    console.log(pokemonResponse.height);

    return pokemonResponse;
}

// This is used to generate a link 
// Take in the name of a pokemon and return it's National Dex ID number
// If the entered name is not a valid pokemon name the request returns null
// ^ I guess also if the pokemon does not exist in that generation
export async function GetPokemonDexNumByName(pokemonName) {
        
}
