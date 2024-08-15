const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const showResultsButton = document.getElementById('show-results-btn'); // New button
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explanationContainerElement = document.getElementById('explanation-container');
const toggleAnswersCheckbox = document.getElementById('toggle-answers');
const resultsElement = document.getElementById('results');

const questions = [
    {
        "question": "1. All of these are ways to express a legal description EXCEPT",
        "choices": [
            "a. lot and block.",
            "b. metes and bounds.",
            "c. rectangular survey.",
            "d. benchmarks."
        ],
        "answer": "d. A benchmark is a permanent reference point used as a reference for marking datums, not a \nmethod of legal description."
    },
    {
        "question": "2. Air lots, condominium descriptions, and other vertical measurements may be computed from \nthe U.S. Geological Survey",
        "choices": [
            "a. datum.",
            "b. benchmark.",
            "c. principal meridian.",
            "d. base line."
        ],
        "answer": "a. The U.S. Geological Survey datum is defined as the mean sea level at New York Harbor. A \nsurveyor uses the datum to determine the height of a structure or to establish the grade of a \nstreet."
    },
    {
        "question": "3. Six acres of undeveloped property are sold for $2.25 per square foot. How much did the buyer \npay?",
        "choices": [
            "a. $466,560",
            "b. $588,060",
            "c. $612,360",
            "d. $733,860"
        ],
        "answer": "b. The buyer paid $588,060:  \n43,560 square feet \u00d7 6 = 261,360 square feet  \n261,360 square feet \u00d7 $2.25 = $588,060"
    },
    {
        "question": "4. Which township section number is directly north of Section 7?",
        "choices": [
            "a. Section 1",
            "b. Section 5",
            "c. Section 6",
            "d. Section 8"
        ],
        "answer": "c. A township is numbered in an S fashion: 1 through 6, right to left; then dropping down to 7 to \n12, left to right. Section 7 is directly south of Section"
    },
    {
        "question": "5. Which of these MOST accurately describes the dimensions of a quarter-section?",
        "choices": [
            "a. \u00bc mile by \u00bc mile",
            "b. \u00bd mile by \u00bd mile",
            "c. \u00bd mile by 1 mile",
            "d. \u215b   mile by \u215b mile"
        ],
        "answer": "b. A section is 1 square mile."
    },
    {
        "question": "1. \nHow much will the buyer pay for the land?",
        "choices": [
            "a. $3,000",
            "b. $6,000",
            "c. $12,000",
            "d. $24,000"
        ],
        "answer": "c. The buyer is willing to pay $12,000:  \n\u00bc \u00d7 640 = 160  \n160 \u00d7 \u00bc = 40  \n40 \u00d7 \u00bc = 10 acres \n10 acres \u00d7 $1,200 = $12,"
    },
    {
        "question": "7. In the past, a farm was typically a quarter section, or",
        "choices": [
            "a. 20 acres.",
            "b. 80 acres.",
            "c. 160 acres.",
            "d. 320 acres."
        ],
        "answer": "c. A quarter of 640 acres is 160 acres."
    },
    {
        "question": "8. How many acres are contained in a parcel described as follows: The NE \u00bc of the NW \u00bc; the N \n\u00bd of the NW \u00bc, NE \u00bc, of Section 10?",
        "choices": [
            "a. 40 acres",
            "b. 60 acres",
            "c. 70 acres",
            "d. 74 acres"
        ],
        "answer": "b. There are two parcels in this description denoted by the semicolon (;).  \nThe first: \u00bc \u00d7 640 = 160 and \u00bc \u00d7 160 = 40 acres.  \nThe second: \u00bc \u00d7 640 = 160 and 160 \u00d7 \u00bc = 40 and 40 \u00d7 \u00bd = 20 acres.  \n40 acres + 20 acres = 60 acres.   \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "9. The basic units of the rectangular survey system are the",
        "choices": [
            "a. base lines.",
            "b. principal meridians.",
            "c. ranges.",
            "d. township squares."
        ],
        "answer": "d. Township squares are the basic units of the rectangular survey system. Principal meridians \nand base lines are the two sets of intersecting lines in the system. Ranges are the 6-mile strips \nof land on either side of a principal meridian."
    },
    {
        "question": "0. A metes-and-bounds description is required in rectangular survey system descriptions when",
        "choices": [
            "a. quarter sections can be used to describe the tract.",
            "b. describing an irregular tract.",
            "c. a tract can be described by sections.",
            "d. a tract follows the lot or block lines of a recorded subdivision or section."
        ],
        "answer": "b. Metes-and-bounds descriptions within the rectangular survey system usually occur when \ndescribing an irregular tract, when a tract is too small to be describe by quarter-sections, or \nwhen a tract does not follow the lot or block lines of a recorded subdivision or section, \nquarter-section lines, or other fractional section lines."
    },
    {
        "question": "1. What is the square footage of this property described by the metes-and-bounds method? \n \n Beginning at a point on the southerly side of Smith Street, 200 feet easterly from the corner \nformed by the intersection of the southerly side of Smith Street and the easterly side of \nJohnson Street; then east 200 feet; then south 100 feet; then west 200 feet; then north 100 feet \nto the POB.",
        "choices": [
            "a. 5,000 square feet",
            "b. 10,000 square feet",
            "c. 15,000 square feet",
            "d. 20,000 square feet"
        ],
        "answer": "d. The property is 200\u2019 \u00d7 100\u2019 = 20,000 square feet."
    },
    {
        "question": "2. The end of a metes-and-bounds land description is always a",
        "choices": [
            "a. monument.",
            "b. benchmark.",
            "c. point of beginning.",
            "d. base line."
        ],
        "answer": "c. A metes-and-bounds description must always begin and end at the point of beginning, thus \nenclosing the described property.   \n \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "3. The lot-and-block system starts with the preparation of",
        "choices": [
            "a. a subdivision plat.",
            "b. a range map.",
            "c. a survey.",
            "d. an air lot."
        ],
        "answer": "a. The lot-and-block system starts with the preparation of a subdivision plat by a licensed \nsurveyor or an engineer.   \nRefer to the example plat for Honeysuckle Hills Subdivision when answering Questions 14 \nthrough"
    },
    {
        "question": "4. Which lot in Block A has the MOST frontage on Jasmine Lane?",
        "choices": [
            "a. 1",
            "b. 2",
            "c. 7",
            "d. 11"
        ],
        "answer": "c. In Block A, Lot 7 has the longest frontage with 160 feet.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "5. How many lots have easements?",
        "choices": [
            "a. 1",
            "b. 3",
            "c. 4",
            "d. 6"
        ],
        "answer": "c. Four lots have easements: Lots, 1, 14, and 15 on Block A and Lot 15 on Block B."
    },
    {
        "question": "6. Which road or roads run east and west?",
        "choices": [
            "a. Wolf and Jasmine",
            "b. Carney and Goodrich",
            "c. Wolf only",
            "d. Goodrich only"
        ],
        "answer": "a. Wolf and Jasmine run east and west."
    },
    {
        "question": "7. Which of these lots has the LEAST street exposure?",
        "choices": [
            "a. Lot 3, Block A",
            "b. Lot 15, Block B",
            "c. Lot 9, Block A",
            "d. Lot 10, Block B"
        ],
        "answer": "a. Lot 3, Block A with 30 feet has the least street exposure."
    },
    {
        "question": "8. Beginning at the intersection of the west line of Carney Street and the north line of Wolf Road, \nrunning west 140 feet, then north 120 feet, then north 50 degrees east 120 feet, then following \nthe southeasterly curvature of the south line of Jasmine Lane for 100 feet, then south 120 feet \nto POB. \n \n To which lot does this description refer?",
        "choices": [
            "a. Lot 15, Block B",
            "b. Lot 8, Block A",
            "c. Lot 7, 8, and 9, Block A",
            "d. Lot 8 and 9, Block A"
        ],
        "answer": "b. The description refers to Lot 8, Block A."
    },
    {
        "question": "9. If lot 13 and lot 14, Block A were combined into one parcel, how many square feet would it \ncontain?",
        "choices": [
            "a. 1,020",
            "b. 19,800",
            "c. 21,600",
            "d. 22,800",
            "c."
        ],
        "answer": "c. The combined parcel would have 21,600 square feet. The parcel would be 180\u2019 \u00d7 120\u2019 = 21,600 \nsquare feet."
    },
    {
        "question": "0. If a buyer is willing to pay $3 per square foot for lot 10, Block A, how much would the buyer be \nwilling to pay for the land?",
        "choices": [
            "a. $20,600",
            "b. $24,000",
            "c. $28,000",
            "d. $32,400"
        ],
        "answer": "d. The buyer would pay $32,400:"
    }
];

let shuffledQuestions, currentQuestionIndex;
let correctAnswers = 0;
let wrongAnswers = 0;
let results = [];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
backButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        setNextQuestion();
    }
});
showResultsButton.addEventListener('click', showCurrentResults); // New event listener

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    results = [];
    questionContainerElement.classList.remove('hide');
    resultsElement.classList.add('hide');
    showResultsButton.classList.remove('hide'); // Show the "Show Results" button
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

        if (choice[0] === question.answer[0]) {
            button.dataset.correct = true;
            button.dataset.explanation = question.answer;
        } else {
            button.dataset.explanation = "Incorrect. The correct answer is " + question.answer;
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

    setStatusClass(selectedButton, correct);

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct) {
            setStatusClass(button, true);
        }
        button.disabled = true;
    });

    results.push({
        question: shuffledQuestions[currentQuestionIndex].question,
        correctAnswer: shuffledQuestions[currentQuestionIndex].answer,
        selectedAnswer: selectedButton.innerText,
        isCorrect: correct
    });

    if (correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    if (toggleAnswersCheckbox.checked) {
        showExplanation(selectedButton);
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showResultsButton.classList.add('hide'); // Hide "Show Results" when quiz ends
        showResults();
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function showExplanation(button) {
    explanationContainerElement.innerText = button.dataset.explanation;
    explanationContainerElement.classList.remove('hide');
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

// Function to show results at any time during the quiz
function showCurrentResults() {
    resultsElement.classList.remove('hide');
    resultsElement.innerHTML = `
        <h2>Current Quiz Results</h2>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Wrong Answers: ${wrongAnswers}</p>
        <h3>Details:</h3>
        ${results.map(result => `
            <div>
                <p><strong>${result.question}</strong></p>
                <p>Your Answer: ${result.selectedAnswer}</p>
                <p>Correct Answer: ${result.correctAnswer}</p>
                <p>${result.isCorrect ? "Correct" : "Wrong"}</p>
            </div>
        `).join('')}
    `;
}

function showResults() {
    questionContainerElement.classList.add('hide');
    showResultsButton.classList.add('hide'); // Hide "Show Results" when showing final results
    resultsElement.classList.remove('hide');
    resultsElement.innerHTML = `
        <h2>Final Quiz Results</h2>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Wrong Answers: ${wrongAnswers}</p>
        <h3>Details:</h3>
        ${results.map(result => `
            <div>
                <p><strong>${result.question}</strong></p>
                <p>Your Answer: ${result.selectedAnswer}</p>
                <p>Correct Answer: ${result.correctAnswer}</p>
                <p>${result.isCorrect ? "Correct" : "Wrong"}</p>
            </div>
        `).join('')}
    `;
}