import React from 'react';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

// Take in a name of a pokemon and return its JSON object from PokeAPI
export async function getPokemonByName(pokemonName) {
    // Strip the whitespace from the pokemon name
    const formattedPokemonName = pokemonName.trim();

    const pokemonResponse = await P.getPokemonByName(formattedPokemonName)

    console.log("FLAG 5");
    console.log(pokemonResponse);

    return pokemonResponse;
}