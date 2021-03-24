const userName = 'Bob';
const userQuestion = 'is the moon grey';

userName ? console.log(`Hello ${userName}!`) : console.log ('Hello!');


userName ? console.log (`${userName}, You asked ${userQuestion}`) : console.log (`You asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0 : eightBall = 'It most absolutely is so....';
  break;
  case 1 : eightBall = 'What\'s it to you if it is????';
  break;
  case 2 : eightBall = 'Are you crazy???';
  break;
  case 3 : eightBall = 'Just on my lunch break, give me  a break will ya!';
  break;
  case 4 : eightBall = 'Nope, nope it is not!';
  break;
  case 5 : eightBall = 'My sources say no';
  break;
  case 6 : eightBall = 'Ain\'t looking good I\'m affraid....';
  break;
  case 7 : eightBall = 'The world is ending, it doesnt matter!';
  break;
  default : eightBall = 'Signs point to yes'; 
};

console.log (`Well, ${eightBall}`)



