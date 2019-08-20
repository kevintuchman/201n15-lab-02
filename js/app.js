"use strict";

alert('I like watching a good show; being stuck in Alaska does this to you.')
var userName;
function yourName(){
   userName = prompt ('What is your name?');
  return userName;

}
yourName();

function tvShow(){
  var rickMorty = prompt('Have I ever watched Rick and Morty?');
rickMorty = rickMorty.toLowerCase();
console.log('Kevin watched this show?' + rickMorty);

if(rickMorty === 'yes' || rickMorty === 'y'){
  alert(userName + ', that\'s correct, but I could care less if they released a new season now.')
} else  {
  alert('Incorrect.');
}

var boJack = prompt ('Have I ever watched Bojack Horseman?');
boJack = boJack.toLowerCase();
console.log('Kevin watched this show?' + boJack);

if(boJack === 'yes' || boJack === 'y'){
  alert(userName + ', that\'s correct, but I found the last season lackluster.')
} else  {
  alert('Incorrect.');
}

var gameOfthrones = prompt ('Have I ever watched Game of Thrones?');
gameOfthrones = gameOfthrones.toLowerCase();
console.log('Kevin watched this show?' + gameOfthrones);

if(gameOfthrones === 'no' || gameOfthrones === 'n'){
  alert(userName + ', that\'s correct, well, I did watch five minutes of it before deciding it was not for me.')
} else {
  alert('Incorrect.');
}

var joJo = prompt ('Have I ever watched Jojo?');
joJo = joJo.toLowerCase();
console.log('Kevin watched this show?' + joJo);

if(joJo === 'yes' || joJo === 'y'){
  alert(userName + ', that\'s correct, I watch a little bit with my dad now when I have the time.');
} else {
  alert('Incorrect.');
}

var samuraiChamploo = prompt ('Have I ever watched Samurai Champloo?');
samuraiChamploo = samuraiChamploo.toLowerCase();
console.log('Kevin watched this show?' + samuraiChamploo);

if(samuraiChamploo === 'yes' || samuraiChamploo === 'y'){
  alert(userName + ', that\'s correct, I watched the show a few years ago in Kodiak.');
} else {
  alert('Incorrect.');
}

}

tvShow();

// function sixthQuestion(totalPokemon){
//   var i = 0;
//   while (i < 4) {
//     i++;
//       alert('Retry' + i + '/4');
//       var countEpisodes = prompt(userName + ", how many episodes of Pokemon did I watch as a child?");
//       console.log('Attempts' + i + 'is' + countEpisodes);
//       var countEpisodesInt = paraseInt(countEpisodes);
//         if (typeof (countEpisodesInt) === 'number') {
//           if  (countEpisodesInt === totalPokemon) {
//             alert(userName +', that\'s correct!');
//             count++;
//             break;
//           } else if (countEpisodesInt < 250)  {
//             alert (userName + ', that\'s a low estimate.');
//           } else if (countEpisodesInt > 250)  {
//             alert (userName + ', that\'s a high estimate.');
//           }
//           }
//           else if (typeof (countEpisodesInt) === 'string')  {
//             alert('Value has to be integer');
//           }
//           }
//         }
//   }
// }

// sixthQuestion(200);