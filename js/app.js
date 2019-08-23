"use strict";

alert('I like watching a TV shows; could you guess which shows I\'ve watched?')
var userName;
function yourName(){
  userName = prompt ('What is your name?');
  console.log('user name is ' + userName);
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

function sixthQuestion(totalStates){
  var i = 0
  while (i < 4){
    i++;
   
    var countStates = prompt(userName + ", how many states have I lived in?");
    console.log('Total States attempt' + i + 'is' + countStates);
    // if (typeof (countStatesInt) === 'number') {
      if (countStates == totalStates) {
        alert('That\'s correct, ' + userName + '.');
        break;
      } else if (countStates <= 1) {
        alert('That\'s too low ' + userName + '.');
        if(i < 4){alert ('That was Attempt Number ' + i +'/4');}
      } else if (countStates >= totalStates) {
        alert('I don\'t move around that much ' + userName + '.');
        if(i < 4){alert ('That was Attempt Number ' + i +'/4');}
      }
      else if (typeof (countStates) === 'string')  {
        alert('Value has to be an integer to work.');
      // }
      }
    }
  }

sixthQuestion(2);

function seventhQuestion(){
  for (var j = 1; j <= 6; j++){
    var pokémonNames = ["Gyarados", "Raichu", "Alolan Raichu", "Beedrill", "Mega Beedrill", "Ralts", "Espeon", "Gardevoir", "Flygon", "Metagross", "Trapinch", "Cyndaquil", "Totodile", "Typhlosion", "Feraligatr", "Primarina", "Incineroar", "Nidoking", "Salamence", "Sawsbuck", "Chandelure", "Haxorus", "Aegislash", "Mega Mawile", "Noivern", "Tapu Koko", "Tapu Lele", "Tapu Fini", "Tapu Bulu", "Blacephalon", "Bisharp", "Joltik", "Galvantula", "Volcarona", "Larvesta", "Garchomp", "Staraptor", "Empoleon", "Mega Manectric", "Dragonite", "Alolan Marowak", "Arcanine", "Regice", "Alolan Ninetails", "Ninetails", "Torkoal", "Venusaur", "Bulbasaur", "Squirtle", "Blastoise", "Hawlucha", "Froslass", "Zekrom", "Mimikyu", "Azumarill", "Marill", "Mega Lopunny", "Lucario", "Mega Lucario", "Exploud", "Toxapex", "Loudred", "Whismur", "Silvally", "Naganadel", "Pheromosa", "Xurkitree", "Rotom"]
    
    for (var i = 0; i < pokémonNames.length; i++){
      console.log(pokemonNames[i] + " " + " is a Pokémon name");
    }
    alert('Attempt Number '+j+'/6');
    var guessPokemon = prompt("Name a Pokémon I like!")

    console.log("Guess Pokémon" + " " + guessPokemon)
      guessPokemon = guessPokemon.toLowerCase();

    if (pokemonNames.indexOf(guessPokemon) > -1)  {
      alert(guessPokemon + " is one of my favorites!")
      count++;
      break;
    } else {
      alert(guessPokemon + " isn\t one of my favorites.")
    }
    }

    alert(userName + ' your total score is ' + count + '/7');

  }
  
  seventhQuestion();

  if (count >= 5) {
    alert(userName + ' didn\'t fail!');
  }
  else {
    alert(userName + ' will try harder next time!');
  }