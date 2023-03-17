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
  let quizEndHTML = `
    <div class="quiz-completed-container">
      <h1 class="quiz-completed-title">Quiz Completed</h1>
      <h3 id="score">Your Score: ${quiz.score}/${quiz.questions.length}</h3>
      <div class="retake-quiz">
        <a href="index.html">Take Quiz Again</a>
      </div>
    </div>`;
  let quizEl = document.getElementById('quiz-wrapper');
  quizEl.innerHTML = quizEndHTML;
}

let questions = [
  new Question(
    'What does HTML stand for?',
    ['JQuery', 'XHTML', 'CSS', 'HTML'],
    'HTML'
  ),
  new Question(
    'What does CSS stand for?',
    ['HTML', 'JQuery', 'CSS', 'XML'],
    'CSS'
  ),
  new Question(
    'Which is a JavaScript framework?',
    ['React', 'Laravel', 'Django', 'Sass'],
    'React'
  ),
  new Question(
    'Which is a backend language?',
    ['PHP', 'HTML', 'React', 'All'],
    'PHP'
  ),
  new Question(
    'Which is best for Artificial Intelligence?',
    ['React', 'Laravel', 'Python', 'Sass'],
    'Python'
  ),
];

let quiz = new Quiz(questions);

displayQuestion();

// Countdown
const TIME_LIMIT = 10; // in minutes
const INTERVAL_DURATION = 1000; // in milliseconds
const quizTimeInMinutes = TIME_LIMIT * 60;
let quizTime = quizTimeInMinutes;

let counting = document.getElementById('count-down');

function startCountdown() {
  let quizTimer = setInterval(function () {
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
}

startCountdown();
