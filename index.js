const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },{
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    }, {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    }, {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O" 
    }, {
        question: "What is the chemical formula of Mohr's salt?",
        options: ["FeSO4(NH4)2SO4.6H2O", "FeSO4(NH4)2SO4.7H2O", "FeSO4(NH4)2SO4.5H2O", "FeSO4(NH4)2SO4.8H2O"],
        answer: "FeSO4(NH4)2SO4.6H2O"
    }

]

const questionE1 = document.getElementById("quiz-question");
const optionlist = document.getElementById("quiz-list");

let currentQuestionIndex = 0;

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionE1.textContent = q.question;
    optionlist.innerHTML = "";

    q.options.forEach(option =>{
        const li = document.createElement("li");
       li.textContent = option;
       li.onclick = () => Answers(li, q.answer)
       optionlist.appendChild(li);
    });
};

let score = 0;
function Answers(currentlist, answer) {
    const allOptions = optionlist.querySelectorAll("li");
    allOptions.forEach(li => li.style.pointerEvents = "none");

    if (currentlist.textContent === answer) {
        currentlist.style.backgroundColor = "green";
        score++;

    } else {
        currentlist.style.backgroundColor = "red";
    }
}

const nextButton = document.getElementById("next-button");
 const quizEndSection = document.getElementById("quiz-end");
 const quizResultText = document.getElementById("quiz-result");
const startSection = document.getElementById('start-section');
const startButton = document.getElementById('start-button');
const quizSection = document.getElementById('quiz-section');



startButton.onclick = () => {
    startSection.style.display = 'none';
    quizSection.style.display = 'block';
    nextButton.style.display = 'block';
    loadQuestion();
};

nextButton.onclick = () => {
     if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();


     } else {
        showScore();
     }
    }
const restartButton = document.getElementById("restart-button");
restartButton.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    quizSection.style.display = 'block';
    nextButton.style.display = 'block';
    quizEndSection.style.display = 'none';
    loadQuestion();
}

function showScore() {   
    quizSection.style.display = 'none';
    nextButton.style.display = 'none';
    quizEndSection.style.display = 'block';

    quizResultText.textContent = `You scored ${score} out of ${questions.length}`;
}