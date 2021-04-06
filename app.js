import { generateThreePokemon } from './pokemonList-utils.js';
import { capturePokemon } from './local-storage-utils.js';
import { findByPokemonName } from './utils.js';


// import functions and grab DOM elements
const button = document.querySelector('button');

function createPokeDom() {
    const radio1 = document.querySelector('#poke1-radio');
    const radio2 = document.querySelector('#poke2-radio');
    const radio3 = document.querySelector('#poke3-radio');

    const label1 = document.querySelector('#poke1-label');
    const label2 = document.querySelector('#poke2-label');
    const label3 = document.querySelector('#poke3-label');

    const threePokemon = generateThreePokemon();

    const img1 = document.querySelector('#poke1-img');
    
    img1.src = threePokemon[0].url_image;
    label1.append(img1);
    radio1.value = threePokemon[0].pokemon;

    
}

createPokeDom();

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input:checked');

    const pokeBall = findByPokemonName(selectedRadio.value);

    capturePokemon(pokeBall);
    createPokeDom();
});


// initialize state

// set event listeners to update state and DOM



