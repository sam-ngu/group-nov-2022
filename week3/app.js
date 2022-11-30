// 1. ask what can the user do?

const generateButtonEl = document.getElementById('generate');
const passwordEl = document.getElementById('password');

function isNumber(data){

  // check if Number(data) isNaN
  return !isNaN(Number(data));

}

function askPasswordLength(){
  // ask user password length
  const passwordLength = prompt('How long (8 - 128)?');

  // get user to pick from a range (8-128)

  // check if numeric
  if (!isNumber(passwordLength)) {
    return askPasswordLength();  // recursion  -- func calls itself
  }
  const length = Number(passwordLength);

  // check if within the range
  if(length < 8 || length > 128){
    return askPasswordLength();
  }
  
  return length;
}

function askCriteria(){

  // ask if want to include upper
  const upper = confirm('you want upper?');
  const lower = confirm('you want lower?');
  const number = confirm('you want number?');
  const symbol = confirm('you want symbol?');
  // ask if want to include lower
  // ask if want to include symbol
  // ask if want to include number

  // check if user has at least picked a criteria
  
  // if no then repeat the criteria questions
  if (!upper && !lower && !number && !symbol){
    return askCriteria();
  }

  return {
    upper: upper,
    lower,
    number,
    symbol,
  }


}


const uppercases = "ABCDEFG";
const lowercases = "abcdefg";
const numbers = "12345";
const symbols = "!@#$%^&*()_";


// user can click on the generate pass button
// higher order func
// 1. a func that takes in another function as its arg
// 2. a func that returns another functions as its result
generateButtonEl.addEventListener('click', function(e){

  // when user click on btn
  const passwordLength = askPasswordLength();


  const criteria = askCriteria();

  console.log(criteria);
  // {
  //   upper: true,
  //   lower: false,
  //   number: true,
  //   symbol: true,
  // }
  
  
  // generate password based on input collected

  // we need to have a bank of char
  let bank = "";

  // if user selected upper, then add all the upper to bank
  if(criteria.upper){
    bank = bank + uppercases;
  }
  // if user selected upper, then add all the upper to bank
  if (criteria.lower) {
    bank = bank + lowercases;
  }
  if (criteria.number) {
    bank = bank + numbers;
  }
  if (criteria.symbol) {
    bank = bank + symbols;
  }


  let password = "";

  // we need to grab a random char from bank for passwordLength times
  for (let index = 0; index < passwordLength; index++) {
 
    const randomNumber = Math.floor(Math.random() * bank.length);
    
    const randomChar = bank[randomNumber];


    password = password + randomChar;
  }
  
  // display password in the box

  passwordEl.textContent = password;
  
})



















// // function is a mini program 

// // factory -- take in raw material

// // process

// // output

// // 
// function add(abc, bbbc){
//   // logic of func
//   var sum = abc + bbbc;
//   return function(){};
// }

// var hey = add(5, 6);
// console.log(hey);  // 11



// // function hello(){
// //   console.log('hey you');

// // }


// // function getCandy(){
// //   // ....

// //   return null
// // }

// // var abc2 = hello();

// // // null vs undefine
// // console.log(abc2); // undefined