const sectionLanding = document.getElementById('section-landing');
const sectionQuestion = document.getElementById('section-question');
const sectionHighscore = document.getElementById('section-highscore');
const sectionEndgame = document.getElementById('section-endgame');
const buttonStartGame = document.getElementById('start-game');
const spanTimer = document.getElementById('span-timer');
const questionTitleEl = document.getElementById('question-title');
const questionChoicesEl = document.getElementById('question-choices');

let timeRemaining = 5;
let timerId = null;

let currentQuestion = 0;




// title
// choices

const questions = [
  {
    title: 'How you doinDADWAD',
    choices: [
      {
        title: 'gooddaaaa',
        isAnswer: true,
      },
      {
        title: 'bad',
        isAnswer: false,
      },
      {
        title: 'yea nah',
        isAnswer: false,
      },
    ],
  },
  {
    title: 'How you going',
    choices: [
      {
        title: 'good',
        isAnswer: true,
      },
      {
        title: 'bad',
        isAnswer: false,
      },
      {
        title: 'yea nah',
        isAnswer: false,
      },
    ],
  },
  {
    title: 'How are ya',
    choices: [
      {
        title: 'good',
        isAnswer: true,
      },
      {
        title: 'bad',
        isAnswer: false,
      },
      {
        title: 'yea nah',
        isAnswer: false,
      },
    ],
  }
];


// when user click on the landing start 
buttonStartGame.addEventListener('click', function(){
  // hide landing
  sectionLanding.classList.add('hide');
  // show question section
  sectionQuestion.classList.remove('hide');

  spanTimer.textContent = timeRemaining;

  // start the timer
  startTimer();

  renderQuestion(0);

})



function startTimer(){

  timerId = setInterval(function(){

    // update spanTimer to reduce the time by 1 
    timeRemaining = timeRemaining - 1;
    // timeRemaining--

    spanTimer.textContent = timeRemaining;

    // if timeRemaining is < 0 
    if(timeRemaining <=0){
      // end game
      endgame();
    }

  }, 1000);

}

function stopTimer(){
  clearInterval(timerId);
}

function endgame(){
  // stop the timer
  stopTimer();

  // show the endgame screen
  sectionEndgame.classList.remove('hide');

  // hide the question screen 
  sectionQuestion.classList.add('hide');
}


function renderQuestion(index){

  const question = questions[index];
  const choices = question.choices;


  // {
  //   title: 'How you going',
  //     choices: [
  //       {
  //         title: 'good',
  //         isAnswer: true,
  //       },
  //       {
  //         title: 'bad',
  //         isAnswer: false,
  //       },
  //       {
  //         title: 'yea nah',
  //         isAnswer: false,
  //       },
  //     ],
  // }

  questionTitleEl.textContent = question.title;

  questionChoicesEl.textContent = "";


  for (let index = 0; index < choices.length; index++) {
    const choice = choices[index];
    // create li
    const li = document.createElement('li')
      // < li > <button data-answer="true" type="button">Good</button></li>

    const button = document.createElement('button');
    button.setAttribute('type', 'button');

    button.textContent = choice.title;

    button.setAttribute('data-answer', choice.isAnswer);

    button.addEventListener('click', function(e){

      const isAnswer = e.currentTarget.getAttribute('data-answer') === 'true';

      if(!isAnswer){
        timeRemaining = timeRemaining -10;

        

      }
      // 1. user clicked on the right ans
      // move the user to the next question

      // show good feedback
      // if there is no qs left, move the user to the end game screen


      // 2. user clicked on the wrong ans
      // move the user to the next question
      // show bad feedback
      // deduct time
      // if there is no qs left, move the user to the end game screen

    })



    // append to questionChoicesEl
    li.appendChild(button);

    questionChoicesEl.appendChild(li);

  }

  




}


// question section







// 3. timer expires
// stop the game ie show the end game screen




// endgame screen


// 1. user didnt enter an initial and click on submit button
// show an alert


// 2. user enter 1m characters  -- handled by html attr


// 3. user enter an existing initial (leave it)


// when the user submit the form
// add score + username to storage 

// redirect to the highscore page



// highscore screen

// grab all the score from local storage
// display them in the list

// when user click on the play again button, send the user to the landing page







