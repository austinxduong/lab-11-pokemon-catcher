## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


## HTML Setup
- add radio buttons
- ensure all have the same "name"
- add img src for each radio buttons (representing pokemons)
- we want a single button to "catch pokemon"

## State initilizer (what is being tracked?)
- set up the "times encountered" (ea. pokemon)
- set up the "times caught" (ea. pokemon)
- let capture start at 0 

## Events
- when button clicked
    - send to pokedex
- "times captured" increments
- check capture condition
    - 10 captured, then sends user to results page
    - else 3 more pokemon will generate

## Functions
- To generate 3 pokemons
    - Add Array with indexes
- Index will randomly select 3 diff 
