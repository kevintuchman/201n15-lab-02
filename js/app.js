"use strict";

alert('I like watching a good show; being stuck in Alaska does this to you. Answer these five questions to know a little more about myself and the shows I enjoy watching.')

var rickMorty = prompt('Have I ever watched Rick and Morty?');
//  rickMorty = rickMorty.lowercase();
console.log('Kevin watched this show?' + rickMorty);

if(rickMorty === 'yes' || rickMorty === 'y'){
  alert('Correct, but I could care less if they released a new season now.')
} else  {
  alert('Incorrect.');
}

var boJack = prompt ('Have I ever watched Bojack Horseman?');
// boJack = boJack.lowercase();
console.log('Kevin watched this show?' + boJack);

if(boJack === 'yes' || boJack === 'y'){
  alert('Correct, but I found the last season lackluster.')
} else  {
  alert('Incorrect.');
}

var gameOfthrones = prompt ('Have I ever watched Game of Thrones?');
// gameOfthrones = gameOfthrones.lowercase();
console.log('Kevin watched this show?' + gameOfthrones);

if(gameOfthrones === 'no' || gameOfthrones === 'n'){
  alert('Correct, well, I did watch five minutes of it before deciding it was not for me.')
} else {
  alert('Incorrect.');
}

var joJo = prompt ('Have I ever watched Jojo?');
// joJo = joJo.lowercase();
console.log('Kevin watched this show?' + joJo);

if(joJo === 'yes' || joJo === 'y'){
  alert('Correct, I watch a little bit with my dad now when I have the time.');
} else {
  alert('Incorrect.');
}

var samuraiChamploo = prompt ('Have I ever watched Samurai Champloo?');
// samuraiChamploo = samuraiChamploo.lowercase();
console.log('Kevin watched this show?' + samuraiChamploo);

if(samuraiChamploo === 'yes' || samuraiChamploo === 'y'){
  alert('Correct, I watched the show a few years ago in Kodiak.');
} else {
  alert('Incorrect.');
}