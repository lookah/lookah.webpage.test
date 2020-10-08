const quizData = [{
        question: "What is the capital city of Sweden?",
        a: "London",
        b: "Stockholm",
        c: "Seoul",
        d: "Beirut",
        correct: "b",
    },
    {
        question: "What is the world's Nr.1 best seller book?",
        a: "Harry Potter",
        b: "Christmas carol",
        c: "Bible",
        d: "Robin hood",
        correct: "c",
    },
    {
        question: "Who is the President of the US today?",
        a: "Hopi",
        b: "Reda",
        c: "Kim jung-eun",
        d: "Donald Trump",

        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hello There My Love",
        c: "Happy Thomas Mister Lonely",
        d: "Hacker Teams Meetup Laboratory",
        correct: "a",
    },
    {
        question: "What year was Javascript launched?",
        a: "2020",
        b: "2019",
        c: "2018",
        d: "none of the above",
        correct: "d",
    },
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>Wow! You answered correctly at 
            ${score}/${quizData.length}
            questions.</h2>
            
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});