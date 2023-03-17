class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

// Question Classes
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

// UI Question
function displayQuestion() {
  if (quiz.isEnded()) {
    showScore();
  } else {
    // show question
    let questionEl = document.getElementById('question');
    questionEl.innerHTML = quiz.getQuestionIndex().text;

    // show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceEl = document.getElementById('option' + i);
      choiceEl.textContent = choices[i];
      choiceEl.style.marginLeft = '.5rem';
      guess('btn' + i, choices[i]);
    }
    showLevel();
  }
}

// Guess Function
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

// Show Question Level
function showLevel() {
  let currectQuestNum = quiz.questionIndex + 1;
  let levelEl = document.getElementById('question-level');
  levelEl.textContent = `Question ${currectQuestNum} of ${quiz.questions.length}`;
}

// Show Score
function showScore() {
  let quizEndHTML = `
  <div class="quiz-completed-container">
    <h1 class="quiz-completed-title">Quiz Completed</h1>
    <h3 id="score">Your Score: ${quiz.score} / ${quiz.questions.length}</h3> <div class="retake-quiz">
        <a href="index.html">Take Quiz Again</a>
    </div>
   </div>`;
  let quizEl = document.getElementById('quiz-wrapper');
  quizEl.innerHTML = quizEndHTML;
}

// Quiz Questions Object
let questions = [
  new Question(
    'What is Hyper Text Markup Language stands for?',
    ['JQuery', 'XHTML', 'CSS', 'HTML'],
    'HTML'
  ),
  new Question(
    'Cascading Style sheet stands for?',
    ['HTML', 'JQuery', 'CSS', 'XML'],
    'CSS'
  ),
  new Question(
    'Which is a JavaScript Framework?',
    ['React', 'Laravel', 'Django', 'Sass'],
    'React'
  ),
  new Question(
    'Which is a backend language?',
    ['PHP', 'HTML', 'React', 'All'],
    'PHP'
  ),
  new Question(
    'Which is best for Artificial intelligence?',
    ['React', 'Laravel', 'Python', 'Sass'],
    'Python'
  ),
];

let quiz = new Quiz(questions);

// Display Question
displayQuestion();

// Add A CountDown for the Quiz
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById('count-down');

function startCountdown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIMER: ${min} : ${sec}`;
    }
  }, 1000);
}

startCountdown();
