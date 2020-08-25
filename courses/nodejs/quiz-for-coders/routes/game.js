function gameRoutes(app) {
  let goodAnswers = 0;
  let isGameOver = false;
  let callToFriendUsed = false;
  let questionToTheCrowdUsed = false;
  let halfOnHalfUsed = false;

  const questions = [
    {
      question: "Which was the first programing language?",
      answers: ["C", "Ada", "PHP", "Delphi"],
      correct: 1,
    },
    {
      question: "What is the Java Script?",
      answers: ["Language", "Script", "Framework", "IDE"],
      correct: 2,
    },
    {
      question: "What is the best programers food?",
      answers: ["pizza", "burgers", "chicken and rise", "fish and chips"],
      correct: 0,
    },
  ];

  app.get("/question", (req, res) => {
    if (goodAnswers === questions.length) {
      res.json({
        winner: true,
      });
    } else if (isGameOver) {
      res.json({
        loser: true,
      });
    } else {
      const nextQuestion = questions[goodAnswers];
      const { question, answers } = nextQuestion;
      res.json({
        question,
        answers,
      });
    }
  });

  app.post("/answer/:index", (req, res) => {
    if (isGameOver) {
      res.json({
        loser: true,
      });
    }

    const { index } = req.params;
    const question = questions[goodAnswers];

    if (question.correctAnswer === Number(index)) {
      goodAnswers++;
    } else {
      isGameOver = true;
    }

    res.json({
      correct: question.correctAnswer === Number(index) ? true : false,
      goodAnswers,
    });
  });

  app.get("/help/friend", (req, res) => {
    if (callToFriendUsed) {
      res.json({
        text: "Is used!",
      });
    }

    callToFriendUsed = true;

    const doesFriendKnowAnswer = Math.random() < 0.5;
    const question = question[goodAnswers];

    res.json({
      text: doesFriendKnowAnswer
        ? `Hmmm... Maybe: ${question.answers[question.correctAnswer]} `
        : "I do not know...",
    });
  });

  app.get("/help/half", (req, res) => {
    if (halfOnHalfUsed) {
      res.json({
        text: "Is used!",
      });
    }

    halfOnHalfUsed = true;

    const question = question[goodAnswers];

    const answersCopy = question.answers.filter(
      (s, index) => index !== question.correctAnswer
    );
    answersCopy.splice(~~(Math, random() * answersCopy.length), 1);

    res.json({
      answersToRemove: answersCopy,
    });
  });
}

module.exports = gameRoutes;
