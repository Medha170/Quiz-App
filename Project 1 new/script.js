let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
];

let currentQuestionIndex = 0;
let availableQuestions = [...questions];
let chosenAnswers = [];
let score = 0;
let questionNumElement = document.getElementById('question-num');
let scoreNumElement = document.getElementById('score-num');
let progressBarElement = document.getElementById('progress-bar');
// let scoreElement = document.querySelector('.score');

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleQuestions(availableQuestions);

function loadNextQuestion() {
    if (availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score);
        window.location.href = 'end.html';
        return;
    }

    updateHUD();
    updateProgressBar();

    currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    const currentQuestion = availableQuestions[currentQuestionIndex];

    document.querySelector('.question').innerText = currentQuestion.question;
    document.querySelectorAll('.choice').forEach((button, index) => {
        button.querySelector('.answer').innerText = currentQuestion[`choice${index + 1}`];
        button.className = 'choice'; // Reset button classes
        button.onclick = () => {
            handleAnswer(button, index + 1, currentQuestion.answer);
        };
    });
}

function handleAnswer(button, chosen, correct) {
    if (chosen === correct) {
        button.classList.add('correct');
        score += 10;
    } else {
        button.classList.add('incorrect');
        document.querySelectorAll('.choice')[correct - 1].classList.add('correct');
    }

    document.querySelectorAll('.choice').forEach(btn => {
        btn.onclick = null; // Disable all buttons
    });

    chosenAnswers.push({ question: questions[currentQuestionIndex].question, chosen, correct });
    availableQuestions.splice(currentQuestionIndex, 1);

    setTimeout(() => {
        loadNextQuestion();
    }, 1000); // 1 second delay before loading the next question
}

function updateHUD() {
    questionNumElement.innerText = questions.length - availableQuestions.length + 1;
    scoreNumElement.innerText = score;
}

function updateProgressBar() {
    const progress = ((questions.length - availableQuestions.length) / questions.length) * 100;
    progressBarElement.style.width = `${progress}%`;
}

loadNextQuestion();

// scoreElement.innerText = localStorage.getItem('mostRecentScore') || 0;
