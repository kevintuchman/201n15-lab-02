"use strict";

alert('I like watching a good show; being stuck in Alaska does this to you. Answer these five questions to know a little more about myself and the shows I enjoy watching.')

var rickMorty = prompt('Have I ever watched Rick and Morty?');
//  rickMorty = rickMorty.lowercase();
console.log('Kevin watched this show?' + rickMorty);

if(rickMorty.toUpperCase === 'yes' || rickMorty.toUpperCase === 'y'){
  alert('Correct, but I could care less if they released a new season now.')
} else  {
  alert('Incorrect.');
}

var boJack = prompt ('Have I ever watched Bojack Horseman?');
// boJack = boJack.lowercase();
console.log('Kevin watched this show?' + boJack);

if(boJack.toUpperCase === 'yes' || boJack.toUpperCase === 'y'){
  alert('Correct, but I found the last season lackluster.')
} else  {
  alert('Incorrect.');
}

var gameOfthrones = prompt ('Have I ever watched Game of Thrones?');
// gameOfthrones = gameOfthrones.lowercase();
console.log('Kevin watched this show?' + gameOfthrones);

if(gameOfthrones.toUpperCase() === 'no'){
  alert('Correct, I only seen 15 minutes of it before deciding it was not for me.')
} else {
  alert('Incorrect.');
}

var joJo = prompt ('Have I ever watched Jojo?');
// joJo = joJo.lowercase();
console.log('Kevin watched this show?' + joJo);

if(joJo.toUpperCase() === 'yes'){
  alert('Correct, I watch a little bit with my dad now when I have the time.');
} else {
  alert('Incorrect.');
}

var samuraiChamploo = prompt ('Have I ever watched Samurai Champloo?');
// samuraiChamploo = samuraiChamploo.lowercase();
console.log('Kevin watched this show?' + samuraiChamploo);

if(samuraiChamploo.toUpperCase() === 'yes'){
  alert('Correct, I watched a few years ago in Kodiak.');
} else {
  alert('Incorrect.');
}