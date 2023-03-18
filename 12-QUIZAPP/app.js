class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.reset();
  }

  reset() {
    this.score = 0;
    this.questionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex >= this.questions.length;
  }
}

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    let questionEl = document.getElementById('question');
    questionEl.textContent = quiz.getCurrentQuestion().text;

    let choices = quiz.getCurrentQuestion().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceEl = document.getElementById(`option${i}`);
      choiceEl.textContent = choices[i];
      choiceEl.style.marginLeft = '0.5rem';
      guess(`btn${i}`, choices[i]);
    }
    showLevel();
  }
}

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

function showLevel() {
  let currentQuestionNum = quiz.questionIndex + 1;
  let levelEl = document.getElementById('question-level');
  levelEl.textContent = `Question ${currentQuestionNum} of ${quiz.questions.length}`;
}

function showScores() {
  const quizEndHTML = `
    <div class="quiz-completed-container">
      <h1 class="quiz-completed-title">Quiz Completed</h1>
      <h3 id="score">Your Score: ${quiz.score}/${quiz.questions.length}</h3>
      <div class="retake-quiz">
        <a href="index.html">Take Quiz Again</a>
      </div>
    </div>`;
  const quizEl = document.getElementById('quiz-wrapper');
  quizEl.innerHTML = quizEndHTML;
}





// ==================================
// Questions Obj
const questions = [
  new Question(
    'What is the result of 10 + "20"',
    ['"1020"', '30', '"30"', 'NaN'],
    '"1020"'
  ),
  new Question(
    'What is the output of the following code snippet: console.log(typeof null);',
    ['"null"', '"object"', '"undefined"', '"string"'],
    '"object"'
  ),
  new Question(
    'Which is a JavaScript framework?',
    [
      'It can only be used to declare variables within a function',
      ' It allows variable hoisting',
      ' It is block-scoped',
      'It is function-scoped',
    ],
    'It is block-scoped'
  ),
  new Question(
    'What does DOM stand for?',
    [
      'Document Object Model',
      'Dynamic Object Module',
      'Data Object Manager',
      'Document Object Method',
    ],
    'Document Object Model'
  ),
  new Question(
    'Which of the following is not a primitive data type in JavaScript?',
    ['string', 'number', 'boolean', 'array'],
    'array'
  ),
  new Question(
    'What is the difference between == and === operators?',
    [
      '== is strict equality, while === is loose equality',
      '== is loose equality, while === is strict equality',
      '== and === are the same',
      '== is only used for numbers, while === is used for all data types',
    ],
    ' == is loose equality, while === is strict equality'
  ),
  new Question(
    'What is the purpose of the continue statement in a loop?',
    [
      'To skip the current iteration of the loop',
      'To break out of the loop',
      'To start the loop again from the beginning',
      'To run the loop only once',
    ],
    'To skip the current iteration of the loop'
  ),
  new Question(
    'What is the output of the following code snippet: console.log("hello".length);',
    ['"hello"', '4', '5', 'undefined'],
    '5'
  ),
  new Question(
    'Which keyword is used to declare a function in JavaScript?',
    ['def', 'function', 'var', 'let'],
    'function'
  ),
  new Question(
    'Which method would you use to add an element to the end of an array?',
    ['push()', 'pop()', 'shift()', 'unshift()'],
    'push()'
  ),
];

const quiz = new Quiz(questions);

displayQuestion();

// Countdown Timer
const TIME_LIMIT = 3; // in minutes
const INTERVAL_DURATION = 1000; // in milliseconds
const quizTimeInMinutes = TIME_LIMIT * 60;
let quizTime = quizTimeInMinutes;

let counting = document.getElementById('count-down');
let quizTimer;

document.getElementById('start-quiz').addEventListener('click', function() {
  // Hide the start-quiz button
  document.getElementById('start-quiz').style.display = 'none';
  // Enable option buttons
  document.querySelectorAll('.btn').forEach(button => button.disabled = false);

  quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime -= 1;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60);
      counting.innerHTML = `TIMER: ${min} : ${sec}`;
    }
  }, INTERVAL_DURATION);
});