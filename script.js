/*
  Author: Ozumah Ebenezer
*/
const questions = [
  {
    id: 1,
    questag: 1,
    question: "What is my name?",
    a: "Ozumah",
    b: "Emma",
    c: "Micheal",
    d: "Jones",
    correct: "a",
  },
  {
    id: 2,
    questag: 2,
    question: "In what year was JavaScript created?",
    a: "2001",
    b: "1895",
    c: "1996",
    d: "1995",
    correct: "d",
  },
  {
    id: 3,
    questag: 3,
    question: "Who Developed javaScirpt?",
    a: "Elom Musk",
    b: "Mark Zuckerberg",
    c: "Brendan Eich",
    d: "James Gosling",
    correct: "c",
  },
  {
    id: 4,
    questag: 4,
    question: "What is the full meaning of HTML?",
    a: "Hypertext Markup Language",
    b: "Higher text move left",
    c: "Hiding from Him",
    d: "None of the Above",
    correct: "a",
  },
  {
    id: 5,
    questag: 5,
    question: "Who is the first Programmer in the world?",
    a: "Elom Musk",
    b: "Bill Gate",
    c: "Ada Lovelace ",
    d: "Charles Babbage",
    correct: "c",
  },
  {
    id: 6,
    questag: 6,
    question: "What is the full meaning of CSS?",
    a: "Cascading Style Sheets",
    b: "Casting Some Sheet",
    c: "Come so ",
    d: "none of the above",
    correct: "a",
  },
  {
    id: 7,
    questag: 7,
    question:
      "What is the name of the Programming Language used for this Project?",
    a: "python",
    b: "Mongo DB",
    c: "C++",
    d: "Javascript",
    correct: "d",
  },
  {
    id: 8,
    questag: 8,
    question: "Is HTML a programming language?",
    a: "True",
    b: "False",
    c: "Not Sure ",
    d: "May be",
    correct: "b",
  },
  {
    id: 9,
    questag: 9,
    question: "Who is the first Programmer in the world?",
    a: "Elom Musk",
    b: "Bill Gate",
    c: "Ada Lovelace ",
    d: "Charles Babbage",
    correct: "c",
  },
  {
    id: 10,
    questag: 10,
    question: "Who is the Founder of Tesla?",
    a: "Elom Musk",
    b: "Bill Gate",
    c: "Ada Lovelace ",
    d: "Charles Babbage",
    correct: "a",
  },
  {
    id: 10,
    questag: 10,
    question: "Who is the Founder of Tesla?",
    a: "Elom Musk",
    b: "Bill Gate",
    c: "Ada Lovelace ",
    d: "Charles Babbage",
    correct: "a",
  },
];
// document selectors
const numberContainer = document.querySelector(".number-container");
const back = document.getElementById("back");
const forw = document.getElementById("forw");
// initial score
let score = 0;

// Load questions function.....
const currentQuestionNum = document.getElementById("current-questionNum");
const question = document.getElementById("question");
const optA = document.getElementById("opt-a");
const optB = document.getElementById("opt-b");
const optC = document.getElementById("opt-c");
const optD = document.getElementById("opt-d");

//current question.....
let currentQuestionIndex = 0;

//Reload Question Function
function loadQuestions(currentQuestion) {
  currentQuestionNum.innerText = `Question ${currentQuestion[currentQuestionIndex].id}`;
  question.innerText = currentQuestion[currentQuestionIndex].question;
  optA.innerText = currentQuestion[currentQuestionIndex].a;
  optB.innerText = currentQuestion[currentQuestionIndex].b;
  optC.innerText = currentQuestion[currentQuestionIndex].c;
  optD.innerText = currentQuestion[currentQuestionIndex].d;
}

loadQuestions(questions);
//End Load questions function.....

// Next Button
const next = document.getElementById("next");

next.addEventListener("click", () => {
  const options = document.querySelectorAll(".option");
  let answer = questions[currentQuestionIndex].correct;
  //Correct Answer Validation .. And incrementing the score by One if the Answer is True...
  options.forEach((option) => {
    if (option.checked) {
      if (option.id === answer) {
        score++;
        console.log(score);
      }
    }
  });

  //Incrementing currentQuestionIndex By One to go to the Next Question....
  currentQuestionIndex++;

  //Uncheck the checkox On the next Question...
  options.forEach((option) => {
    if ((option.checked = true)) {
      option.checked = false;
    }
  });

  //loadQuestion
  loadQuestions(questions);

  //Show the result after answering the last question...
  if (currentQuestionIndex == questions.length - 1) {
    //Retuning the color for Grading the Student according to the Score..
    const color = () => {
      if (score >= 8) {
        return "green";
      } else if (score >= 6) {
        return "orange";
      } else {
        return "red";
      }
    };

    //> Showing the result
    //> with a button to reload...
    document.getElementById("wrapper").innerHTML = `
    <div class="final">
      <h4><span class="score-color ${color()}">YOUR SCORE:</span> ${score}/${
      questions.length - 1
    }</h4>
      <button onclick="location.reload(true)">Reload</button>

    </div>
    `;
  }
});
// End of Next and prev button
