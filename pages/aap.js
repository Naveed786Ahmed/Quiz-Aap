let quiz = [

    {
        question: 'What does HTML stand for?',
        option: ['Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyperlinks Text Markup Language'],
        correct: 'Hyper Text Markup Language'
    },

    {
        question: "Who is making the Web standards?",
        option: ["Google", "Mozilla", "The World Wide Web Consortium",],
        correct: "The World Wide Web Consortium"
    },

    {
        question: "Choose the correct HTML element for the largest heading:",
        option: ['h1', 'h6', 'heading'],
        correct: "h1"
    },

    {
        question: 'What is the correct HTML element for inserting a line break?',
        option: ["lb", "br", "break"],
        correct: 'br'
    },

    {
        question: 'Choose the correct HTML element to define important text',
        option: ['strong', 'important', 'i'],
        correct: "strong"

    },

]


let questionCount = 0;
let totalQuestions = 5;
let score = 0;

let startCard = document.getElementById("start-box");
let questionCard = document.getElementById("question-card")
let questions = document.getElementById("questions")
let options = document.getElementsByClassName("options")
let counts = document.getElementById("countquestion")
let congratulation = document.getElementById("last-page")
let scores = document.getElementsByClassName("score")
let opt1 = document.getElementById("select")
let opt2 = document.getElementById("select1")
let opt3 = document.getElementById("select2")


function startQuiz() {
    startCard.style.display = "none"
    questionCard.style.display = "flex"
    firstQuestion(questionCount)
}

function firstQuestion(e) {
    counts.innerHTML = `${questionCount} of ${totalQuestions}`
    questions.innerHTML = quiz[e].question;

    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = quiz[e].option[i]
    }
}

function nextQuestion() {
    if(questionCount == totalQuestions){
        lastPage()
    }
    else if (opt1.checked || opt2.checked || opt3.checked) {
        questionCount += 1
        counts.innerHTML = `${questionCount} of ${totalQuestions}`
        questions.innerHTML = quiz[questionCount].question;

        for (let i = 0; i < options.length; i++) {
            options[i].innerHTML = quiz[questionCount].option[i]
        }
    }
     
    else {
        firstQuestion(questionCount)
    }
    console.log(opt1.checked.value)
}

function lastPage(){
    questionCard.style.display = "none"
    congratulation.style.display = "flex"
}

function goHome(){
    location.reload()
}


















