import { getPokeDex } from '../local-storage-utils.js';
//import pokemonList from '../pokemonList.js';

const pokedex = getPokeDex();



var ctx = document.getElementById('myChart').getContext ('2d');


const names = [];
const captured = [];
const encountered = [];

for (let pokeDex of pokedex) {
    names.push(pokeDex.id);
    captured.push(pokeDex.captured);
    encountered.push(pokeDex.encountered);
}




var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemons Captured',
                data: captured,
                backgroundColor: '#E1F6E2',
                borderColor: 'green',
                borderWidth: 1
            },
            {
                label: 'Pokemons Encountered',
                data: captured,
                backgroundColor: 'grey',
                borderColor: 'brown',
                borderWidth: 2
            }
        ]   
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});