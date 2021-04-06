import pokemonList from './pokemonList.js';

export function findById(array, id) {
    return array.find(item => id === item.id);

}

console.log(findById);

export function findByPokemonName(name) {
    return pokemonList.find(poke => name === poke.pokemon);

}


