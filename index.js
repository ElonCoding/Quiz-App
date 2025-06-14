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
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score-section");

nextButton.onclick = () => {
     if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
     } else {
        showScore();
     }
    }
function showScore() {   
    document.getElementById("quiz-section").classList.add("display: none");
    document.getElementById("Next-button").classList.add("hidden");
    scorecontainer.classList.remove("hidden");

    scoretext.textContent = `You scored ${score} out of ${questions.length}`;
}

loadQuestion();