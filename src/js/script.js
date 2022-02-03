import style from './../css/style.css';

import Hero from './Hero';

document.addEventListener('DOMContentLoaded', init);

const btnPowerUp =  document.querySelector('[name="power-up"]');
const heroesNum =  document.querySelector('.heroes-number');
const listContainer = document.querySelector('.list-container');


function init () {
   btnPowerUp.addEventListener('click', powerUp);
   createHeroes();
   displayHeroesNum();
   displayHeroesList();
}

function displayHeroesNum () {
    heroesNum.innerText =heroes.length;
}

function powerUp() {
    heroes.forEach(item=>item.train());
    displayHeroesList();
}

const heroes = [];

function createHeroes() {
    const hulk =  new Hero("hulk", 10);
    const geralt = new Hero("geralt", 12);
    const spiderman = new Hero("spider");
    heroes.push(hulk);
    heroes.push(geralt); 
    heroes.push(spiderman);
}


function displayHeroesList() {
    listContainer.innerHTML = '';
    const heroesElement = document.createElement("ul");
    listContainer.appendChild(heroesElement);  
    heroes.forEach(({name, power}) => {
        const heroEl = document.createElement("li");
        heroEl.innerHTML = `${name}:<span>${power}</span>`;
        heroesElement.appendChild(heroEl);
    })
}
