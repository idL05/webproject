const questions = [
    {
        question: "В каком году был создан python ?",
        answers: [
            {text: "1989–1991", correct: true},
            {text: "1999–2001", correct: false},
            {text: "1990–1992", correct: false},
            {text: "2000–2003", correct: false},
        ]
    },
    {
        question: "Какая функция используется для вывода данных на экран в Python ?",
        answers: [
            {text: "display()", correct: false},
            {text: "print()", correct: true},
            {text: "show()", correct: false},
            {text: "output()", correct: false},
        ]
    },
    {
        question: "Какой из следующих инструментов используется для управления пакетами Python ?",
        answers: [
            {text: "npm", correct: false},
            {text: "pip", correct: true},
            {text: "leep", correct: false},
            {text: "yarn", correct: false},
        ]
    },
    {
        question: "Какой из следующих модулей Python НЕ является частью стандартной библиотеки?",
        answers: [
            {text: "os", correct: false},
            {text: "requests", correct: true},
            {text: "datatime", correct: false},
            {text: "random", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'Количество правильных ответов ' +  score + ' из ' + questions.length;
    nextButton.innerHTML = "Попробовать снова?";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();