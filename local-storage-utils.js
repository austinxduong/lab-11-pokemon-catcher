import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokeDex() {
    const stringyPokeDex = localStorage.getItem(POKEDEX);

    if (!stringyPokeDex) return [];


    const parsedPokeDex = JSON.parse(stringyPokeDex);

    return parsedPokeDex;

}

export function setPokeDex(parsedPokeDex) {
    const stringyPokeDex = JSON.stringify(parsedPokeDex);

    localStorage.setItem(POKEDEX, stringyPokeDex);
}

export function encounterPokemon(pokemon) {

    const pokeDex = getPokeDex();

    const matchingPokedexItem = findById(pokeDex, pokemon.pokemon);

    if (matchingPokedexItem) {
        matchingPokedexItem.encountered++;


    } else {

        const newPokedexItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokeDex.push(newPokedexItem);
    }

    setPokeDex(pokeDex);

    return pokeDex;

}

export function capturePokemon(pokemon) {
    
    const pokeDex = getPokeDex();

    const matchingPokedexItem = findById(pokeDex, pokemon.pokemon);

    matchingPokedexItem.captured++;

    setPokeDex(pokeDex);

    return pokeDex;


}

//console.log(capturePokemon);