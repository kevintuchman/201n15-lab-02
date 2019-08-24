'use strict';

alert('I like watching good shows on TV. Play this guessing game to find out which TV shows I watched.')
var userName;
var count = 0;
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
  alert(userName + ', that\'s correct, but I could care less if they released a new season now.');
  count++;
} else  {
  alert('Incorrect.');
}

var boJack = prompt ('Have I ever watched Bojack Horseman?');
boJack = boJack.toLowerCase();
console.log('Kevin watched this show?' + boJack);

if(boJack === 'yes' || boJack === 'y'){
  alert(userName + ', that\'s correct, but I found the last season lackluster.');
  count++;
} else  {
  alert('Incorrect.');
}

var gameOfthrones = prompt ('Have I ever watched Game of Thrones?');
gameOfthrones = gameOfthrones.toLowerCase();
console.log('Kevin watched this show?' + gameOfthrones);

if(gameOfthrones === 'no' || gameOfthrones === 'n'){
  alert(userName + ', that\'s correct, well, I did watch five minutes of it before deciding it was not for me.');
  count++;
} else {
  alert('Incorrect.');
}

var joJo = prompt ('Have I ever watched Jojo?');
joJo = joJo.toLowerCase();
console.log('Kevin watched this show?' + joJo);

if(joJo === 'yes' || joJo === 'y'){
  alert(userName + ', that\'s correct, I watch a little bit with my dad now when I have the time.');
  count++;
} else {
  alert('Incorrect.');
}

var samuraiChamploo = prompt ('Have I ever watched Samurai Champloo?');
samuraiChamploo = samuraiChamploo.toLowerCase();
console.log('Kevin watched this show?' + samuraiChamploo);

if(samuraiChamploo === 'yes' || samuraiChamploo === 'y'){
  alert(userName + ', that\'s correct, I watched the show a few years ago in Kodiak.');
  count++;
} else {
  alert('Incorrect.');
}
}

tvShow();

function sixthQuestion(totalStates){
  var i = 0
  while (i < 4){
    i++;
   
    var countStates = prompt(userName + ', how many states have I lived in?');
    console.log('Total States attempt' + i + 'is' + countStates);
    // if (typeof (countStatesInt) === 'number') {
      if (countStates == totalStates) {
        alert('That\'s correct, ' + userName + '.');
        count++;
        break;
      } else if (countStates <= 1) {
        alert('That\'s too low ' + userName + '.');
        if(i < 4){alert ('That was Attempt Number ' + i +'/4');}
      } else if (countStates >= totalStates) {
        alert('I don\'t move around that much, ' + userName + '.');
        if(i < 4){alert ('That was Attempt Number ' + i +'/4');}
      }
      else if (typeof (countStates) === 'string')  {
        alert('Value has to be an integer to work.');
      // }
      }
    }
  }

sixthQuestion(2);

var pokémonNames = ['squirtle', 'flygon', 'ralts', 'raichu']

function seventhQuestion(){
  for (var j = 1; j <= 6; j++){
    var guessPokémon = prompt('Name a Pokémon I like!')

    console.log('Guess Pokémon ' + guessPokémon);
    guessPokémon = guessPokémon.toLowerCase();

    if (pokémonNames.indexOf(guessPokémon) > -1)  {
      alert(guessPokémon + ' is one of my favorites!');
      count++;
      break;
    } else {
      alert(guessPokémon + ' isn\'t one of my favorites.\n\nThat was attempt number ' + j + '/6');
    }
    }

  }
  seventhQuestion();

  alert('My list of pokemon I like is: ' + pokémonNames[0] + ', ' + pokémonNames[1] + ', ' + pokémonNames[2] + ', and ' + pokémonNames[3] + '.');

  console.log('Count value is ' + count);
  if (count >= 5) {
    alert(userName + ' didn\'t fail!');
  }
  else {
    alert(userName + ', you answered ' + count + ' of seven correctly, try harder next time!');
  }