"use strict";

alert('I like watching a good show; being stuck in Alaska does this to you. Answer these five questions to know a little more about myself and the shows I enjoy watching.')

var rickMorty = prompt('Have I ever watched Rick and Morty?');
//  rickMorty = rickMorty.lowercase();

if(rickMorty.toUppercase() === 'yesS'){
  alert('Correct, but I could care less if they released a new season now.')
} else  {
  alert('Incorrect.');
}

var boJack = prompt ('Have I ever watched Bojack Horseman?');
// boJack = boJack.lowercase();

if(boJack.toUppercase() === 'yes'){
  alert('Correct, but I found the last season lackluster.')
} else  {
  alert('Incorrect.');
}

var gameOfthrones = prompt ('Have I ever watched Game of Thrones?');
// gameOfthrones = gameOfthrones.lowercase();

if(gameOfthrones.toUppercase() === 'no'){
  alert('Correct, I only seen 15 minutes of it before deciding it was not for me.')
} else {
  alert('Incorrect.');
}

var joJo = prompt ('Have I ever watched Jojo?');
// joJo = joJo.lowercase();

if(joJo.toUppercase() === 'yes'){
  alert('Correct, I watch a little bit with my dad now when I have the time.');
} else {
  alert('Incorrect.');
}

var samuraiChamploo = prompt ('Have I ever watched Samurai Champloo?');
// samuraiChamploo = samuraiChamploo.lowercase();

if(samuraiChamploo.toUpperCase() === 'yes'){
  alert('Correct, I watched a few years ago in Kodiak.');
} else {
  alert('Incorrect.');
}