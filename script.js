const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explanationContainerElement = document.getElementById('explanation-container');

const questions = [
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
            "d. demographic factors that affect demand for real property in a commercial market.",
            "c."
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

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
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
        button.style.backgroundColor = 'white';  // Set default background to white
        if (choice === question.answer) {
            button.dataset.correct = true;
        }
        button.dataset.explanation = `Correct answer: ${question.answer}`;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
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
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true;
    });
    showExplanation(selectedButton);
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function showExplanation(button) {
    explanationContainerElement.innerText = button.dataset.explanation;
    explanationContainerElement.classList.remove('hide');
}

function setStatusClass(element, correct) {
    if (correct) {
        element.style.backgroundColor = 'green';
    } else {
        element.style.backgroundColor = 'red';
    }
}

function clearStatusClass(element) {
    element.style.backgroundColor = '';
}
