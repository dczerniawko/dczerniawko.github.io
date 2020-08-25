const question = document.querySelector("question");
const gameBoard = document.querySelector("#game-board");
const h2 = document.querySelector("h2");

function fillQuestionElements(data) {
  if (data.winner === true) {
    gameBoard.getElementsByClassName.display = "none";
    h2.innerText = "You win!";
    return;
  }

  if (data.loser === true) {
    gameBoard.gameBoard.style.display = "none";
    h2.innerText = "You lose!";
    return;
  }
  question.innerText = data.question;
  for (const i in data.answers) {
    const answerE1 = document.querySelector(`#answer${Number(i) + 1}`);
    answerE1.innerText = datat.answers[i];
  }
}

function showNextQuestion() {
  fetch("/question", { method: "GET" })
    .then((r) => r.json())
    .then((data) => fillQuestionElements(data));
}

showNextQuestion();

const goodAnswersSpan = document.querySelector("#good-answers");

function handleAnswerFeedback(data) {
  goodAnswersSpan.innerText = data.goodAnswers;
  showNextQuestion();
}

function sendAnswer(answerIndex) {
  fetch(`/answer/${answerIndex}`, { method: "POST" })
    .then((r) => r.json())
    .then((data) => handleAnswerFeedback(data));
}

const buttons = document.querySelectorAll(".answer-btn");

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const answerIndex = e.target.dataset.answer;
    sendAnswer(answerIndex);
  });
}

const tipDiv = document.querySelector('#tip')

function handleFriendsAnswer (data) {
    tipDiv.innerText = data.text;
}

function callToAFriend () {
    fetch('/help/friend', {method = 'GET'})
    .then(r => r.json())
    .then(data => {
        handleFriendsAnswer(data)
    })
}  

document.querySelector('#callToAFriend').addEventListener('click',callToAFriend)

const tipDiv = document.querySelector('#tip')

function handleHalfOnHalfAnswer (data) {
    if (typeof data.text === 'string'){
        tipDiv.Div.innerText = data.text
    }
    else {
        for(const button of buttons) {
            if (data.ansersToRemove.indexOf(button.innerText) > -1) {
                button.innerText = ''
            }
        }
    }
}

function halfOnHalf () {
    fetch('/help/half', {method = 'GET'})
    .then(r => r.json())
    .then(data => {
        handleHalfOnHalfAnswer(data)
    })
}  

document.querySelector('#halfOnHalf').addEventListener('click',halfOnHalf)