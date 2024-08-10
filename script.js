const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explanationContainerElement = document.getElementById('explanation-container');
const resultsContainerElement = document.getElementById('results');
const toggleAnswersCheckbox = document.getElementById('toggle-answers');
const toggleResultsCheckbox = document.getElementById('toggle-results');

const questions = [
[
    {
        "question": "1. Office buildings and retail space are examples of",
        "choices": [
            "a. commercial real estate.",
            "b. special use real estate.",
            "c. residential property.",
            "d. industrial property."
        ],
        "answer": "a. Office buildings and retail space are examples of commercial real estate. Special use property \nincludes churches and dormitories; industrial property includes warehouses and factories."
    },
    {
        "question": "2. The market value of a property less the amount still owed on it is the owner\u2019s",
        "choices": [
            "a. purchase price.",
            "b. equity.",
            "c. depreciation.",
            "d. tax deduction."
        ],
        "answer": "b. A property owner\u2019s equity is the amount remaining after subtracting any outstanding loans \nagainst the property from its original purchase price."
    },
    {
        "question": "3. All of these factors will tend to affect demand for real estate EXCEPT",
        "choices": [
            "a. transfer taxes.",
            "b. employment levels.",
            "c. wage rates.",
            "d. demographics."
        ],
        "answer": "a. Transfer taxes affect the supply of real estate; employment levels, wage rates, and \ndemographics affect demand for real estate."
    },
    {
        "question": "4. When the population of a town suddenly increases, which of these is MOST likely to occur?",
        "choices": [
            "a. Rental rates will fall due to increased competition",
            "b. Demand for housing will decrease",
            "c. New housing starts will decrease",
            "d. Real estate prices will increase"
        ],
        "answer": "d. With a sudden influx of people, rental rates will increase; demand for housing will increase; \nand more new homes will be started to satisfy demand."
    },
    {
        "question": "5. Property management, appraisal, financing, and development are all",
        "choices": [
            "a. specializations directly linked to state and federal government financial policies.",
            "b. separate professions within the real estate industry.",
            "c. real estate brokerage professions.",
            "d. demographic factors that affect demand for real property in a commercial market."
        ],
        "answer": "b. Property management, appraisal, financing, and development are not linked to the \ngovernment; they are all linked to real estate business."
    },
    {
        "question": "6. The idea that no two parcels of land are exactly alike is called",
        "choices": [
            "a. immobility.",
            "b. subdivision.",
            "c. uniqueness.",
            "d. location."
        ],
        "answer": "c. No matter how identical they may appear, no two parcels of real estate are ever exactly alike; \neach occupies its own unique geographic location."
    },
    {
        "question": "7. All of these factors can affect the supply of real estate EXCEPT",
        "choices": [
            "a. demographics.",
            "b. labor force.",
            "c. construction costs.",
            "d. government controls."
        ],
        "answer": "a. Demographics affect the demand for real estate. The labor force, construction costs, and \ngovernment controls affect the supply of real estate."
    },
    {
        "question": "8. A property owner who does not want to deal with the everyday tasks of managing a rental \nproperty can hire",
        "choices": [
            "a. a property manager.",
            "b. an appraiser.",
            "c. a home inspector.",
            "d. a developer."
        ],
        "answer": "a. A property manager handles the day-to-day tasks of managing property for an owner. An \nappraiser provides an opinion of value; a home inspector looks for problems with the \nproperty; and the developer improves the property."
    },
    {
        "question": "9. When the supply of a certain commodity decreases while demand remains the same, the price \nof that commodity will tend to",
        "choices": [
            "a. remain the same.",
            "b. increase.",
            "c. decrease by 10%.",
            "d. decrease by 20%."
        ],
        "answer": "b. When consumers continue to demand a product for which there is limited supply, the price \ngenerally increases. \n \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "0. A factor affecting the real estate market that usually is not the result of government controls is",
        "choices": [
            "a. the Federal Reserve Board\u2019s discount rate.",
            "b. a shortage of skilled labor or building materials.",
            "c. land-use controls, such as zoning.",
            "d. federal environmental regulations."
        ],
        "answer": "b. A shortage of skilled labor will affect the supply of real estate, and this labor shortage is not \ngenerally associated with governmental policies."
    }
];

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let userAnswers = [];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    questionContainerElement.classList.remove('hide');
    resultsContainerElement.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.classList.add('btn');

        // Set data attributes for correct answers and explanations
        if (choice[0] === question.answer[0]) {
            button.dataset.correct = true;
        }

        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    explanationContainerElement.classList.add('hide');
    explanationContainerElement.innerText = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    // Record user's answer
    userAnswers.push({
        question: shuffledQuestions[currentQuestionIndex].question,
        correct: correct,
        selectedAnswer: selectedButton.innerText,
        correctAnswer: shuffledQuestions[currentQuestionIndex].answer
    });

    // Check if real-time results are enabled
    if (!toggleResultsCheckbox.checked) {
        // Highlight the user's selection
        setStatusClass(selectedButton, correct);

        // Highlight the correct answer if showing answers after each question is enabled
        if (toggleAnswersCheckbox.checked) {
            Array.from(answerButtonsElement.children).forEach(button => {
                if (button.dataset.correct) {
                    setStatusClass(button, true);
                }
                button.disabled = true;  // Disable all buttons after selection
            });
            showExplanation(selectedButton);
        } else {
            // Disable all buttons after selection without showing results
            Array.from(answerButtonsElement.children).forEach(button => {
                button.disabled = true;
            });
        }
    } else {
        // If results are shown at the end, just disable all buttons
        Array.from(answerButtonsElement.children).forEach(button => {
            button.disabled = true;
        });
    }

    // Show the next button or finish the quiz
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Show Results';
        startButton.classList.remove('hide');
        startButton.removeEventListener('click', startGame);  // Ensure only one event listener is active
        startButton.addEventListener('click', showResults);
    }
}

function showResults() {
    questionContainerElement.classList.add('hide');
    nextButton.classList.add('hide');
    resultsContainerElement.classList.remove('hide');

    resultsContainerElement.innerHTML = `<h2>Quiz Results</h2>`;
    userAnswers.forEach((answer, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const questionText = document.createElement('p');
        questionText.innerText = `Question ${index + 1}: ${answer.question}`;
        resultDiv.appendChild(questionText);

        const userAnswerText = document.createElement('p');
        userAnswerText.innerText = `Your Answer: ${answer.selectedAnswer}`;
        userAnswerText.classList.add(answer.correct ? 'correct' : 'wrong');
        resultDiv.appendChild(userAnswerText);

        if (!answer.correct) {
            const correctAnswerText = document.createElement('p');
            correctAnswerText.innerText = `Correct Answer: ${answer.correctAnswer}`;
            correctAnswerText.classList.add('correct');
            resultDiv.appendChild(correctAnswerText);
        }

        resultsContainerElement.appendChild(resultDiv);
    });

    // Reset the start button to start the quiz again
    startButton.innerText = 'Restart Quiz';
    startButton.removeEventListener('click', showResults);  // Ensure only one event listener is active
    startButton.addEventListener('click', startGame);
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
