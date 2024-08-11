const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explanationContainerElement = document.getElementById('explanation-container');
const toggleAnswersCheckbox = document.getElementById('toggle-answers');

const questions = [
    {
        "question": "1. Land, mineral, and air rights in the land are included in the definition of",
        "choices": [
            "a. attachments.",
            "b. real property.",
            "c. subsurface rights.",
            "d. improvements."
        ],
        "answer": "b. Subsurface rights and improvements are included in the definition of real estate. Real \nproperty also includes rights and privileges."
    },
    {
        "question": "2. Which of these is an example of an economic characteristic of land?",
        "choices": [
            "a. Immobility",
            "b. Indestructibility",
            "c. Uniqueness",
            "d. Scarcity"
        ],
        "answer": "d. Immobility, indestructibility, and uniqueness are physical characteristics, while scarcity is an \neconomic characteristic."
    },
    {
        "question": "3. Another word for uniqueness is",
        "choices": [
            "a. scarcity.",
            "b. nonhomogeneity.",
            "c. fructus industrials.",
            "d. immobility."
        ],
        "answer": "b. Uniqueness, or nonhomogeneity, indicates that no two parcels of land are alike."
    },
    {
        "question": "4. The bundle of rights includes",
        "choices": [
            "a. taxation.",
            "b. transportation.",
            "c. expansion.",
            "d. exclusion."
        ],
        "answer": "d. The bundle of rights includes possession, control, exclusion, enjoyment, and disposition. There \nis no right to expansion, except by acquiring another parcel."
    },
    {
        "question": "5. Owners with littoral rights enjoy",
        "choices": [
            "a. unrestricted use of available waters, but they own the land adjacent to the water only as",
            "b. the right of disposition.",
            "c. unrestricted use of the surface of the earth.",
            "d. unrestricted rights to the use of fixtures.",
            "c."
        ],
        "answer": "a. Owners of littoral rights enjoy unrestricted use of available waters, but own the land adjacent \nto the water only as far as the average high-water mark."
    },
    {
        "question": "6. Growing trees, fences, and buildings are all considered",
        "choices": [
            "a. chattels.",
            "b. land.",
            "c. fixtures.",
            "d. real estate."
        ],
        "answer": "d. The definition of real estate includes fences, buildings, and growing trees. Chattels are \npersonal property. The definition of land would not include fences and buildings."
    },
    {
        "question": "7. The most important economic characteristic of land is",
        "choices": [
            "a. permanence.",
            "b. location.",
            "c. uniqueness.",
            "d. possession."
        ],
        "answer": "b. Location is sometimes called area preference or situs."
    },
    {
        "question": "8. A tenant farmer built a chicken coop and a tool shed. These buildings belong to the",
        "choices": [
            "d. These buildings belong to the",
            "a. tenant.",
            "b. owner of real estate.",
            "c. owner, but the owner must reimburse the tenant.",
            "d. tenant, but the tenant must pay additional rent for them."
        ],
        "answer": "a. The coop and tool shed would be considered trade fixtures, and the tenant has the right to \nremove them up to the end of the lease."
    },
    {
        "question": "9. The developer added sewer lines and utilities and built two streets. What are these items \ncalled?",
        "choices": [
            "a. Fixtures",
            "b. Additions",
            "c. Improvements",
            "d. Permanence of investment"
        ],
        "answer": "c. Human-made permanent attachments are called improvements."
    },
    {
        "question": "0. A new owner of a condominium received the right to use a parking space in the multi-unit \nbuilding. This right is an example of",
        "choices": [
            "a. an improvement.",
            "b. a fixture.",
            "c. an appurtenance.",
            "d. a chattel.",
            "c."
        ],
        "answer": "c. An appurtenance is a right or privilege associated with the property, although not necessarily \na part of it; typical appurtenances include parking spaces in multiunit buildings, easements, \nwater rights, and other improvements."
    },
    {
        "question": "1. Method of annexation, adaptation, and agreement of the parties are legal tests for determining \nwhether an item is",
        "choices": [
            "a. a chattel or an emblement.",
            "b. real property or personal property.",
            "c. land or real estate.",
            "d. fructus naturales or fructus industriales."
        ],
        "answer": "b. Whether an item is a fixture or personal property may be determined by method of \nannexation, adaptation to real estate, and agreement of the parties."
    },
    {
        "question": "2. After suffering through a tornado and then flooding from the river, the buildings were gone. \nThe land was still there. This is an example of",
        "choices": [
            "a. uniqueness.",
            "b. scarcity.",
            "c. location.",
            "d. indestructibility."
        ],
        "answer": "d. Land cannot be destroyed, although the improvements might be removed, as they are in this \ncase."
    },
    {
        "question": "3.  A seller asked a real estate professional to draw up several documents relating to seller \nfinancing. Under these circumstances, the real estate professional should",
        "choices": [
            "a. ask the broker for assistance.",
            "b. draw up the documents.",
            "c. ignore the instructions.",
            "d. refer the seller to an attorney."
        ],
        "answer": "d. A real estate professional should be careful not to practice law unless the real estate \nprofessional is, in fact, a licensed attorney and is hired to act in that capacity."
    },
    {
        "question": "4. A buyer particularly liked the ornate brass lighting fixtures in a house and immediately made \nan offer, which the seller accepted. On moving day, the buyer discovered that the seller had \nreplaced all the ornate brass lighting fixtures with plain steel ones. Which of these is MOST \nlikely a correct assumption?",
        "choices": [
            "d. On moving day, the buyer discovered that the seller had",
            "a. Seller: \u201cAs long as I replaced them with something of comparable value, I can take them",
            "b. Buyer: \u201cLighting fixtures are normally considered to be real property.\u201d",
            "c. Seller: \u201cThe lighting fixtures were personal property when I bought them at the store, so",
            "d. Seller: \u201cThe lighting fixtures belong to me because I installed them.\u201d",
            "c."
        ],
        "answer": "b. The buyer is correct in assuming that lighting fixtures are normally part of the real property. \nIf the seller had wanted to remove the fixtures, the seller should have done so before putting \nthe house on the market, or the seller should have written the intention to remove them into \nthe agreement of sale."
    },
    {
        "question": "5. A farmer has posted a number of \u201cNo Trespassing\u201d and \u201cNo Hunting\u201d signs on the property. \nWhich \u201cstick\u201d in the bundle of rights gives the farmer this authority?",
        "choices": [
            "a. Exclusion",
            "b. Enjoyment",
            "c. Control",
            "d. Disposition"
        ],
        "answer": "a. A real estate owner has the inherent right to exclude others from the property, although this \nright is not absolute. An adjacent property owner may have an easement right to use the \nproperty."
    },
    {
        "question": "6. A right or privilege tied to real property, although not necessarily part of the property, is \ncalled a(n)",
        "choices": [
            "a. emblement.",
            "b.    trade fixture.",
            "c. appurtenance.",
            "d. deed."
        ],
        "answer": "c. An appurtenance is a right or privilege association with a property, although not necessarily \na part of it. An emblement or trade fixture is a tangible item on the property. The deed is a \ndocument that transfers title."
    },
    {
        "question": "7. An important characteristic of personal property is that it is",
        "choices": [
            "a. small enough to be carried by a person.",
            "b. movable.",
            "c. alive.",
            "d. less than 100 years old."
        ],
        "answer": "b. Personal property is all the property than can be owned and that does not fit the definition of \nreal property; the most important distinction between real and personal property is that \npersonal property is moveable."
    },
    {
        "question": "8. The Law of the Sea identifies a country\u2019s",
        "choices": [
            "a. territorial waters.",
            "b. inland lakes.",
            "c. navigable rivers.",
            "d. water table.",
            "c."
        ],
        "answer": "a. The United Nations Convention on the Law of the Sea identifies a country\u2019s territorial waters \nas those extending up to 12 nautical miles from a baseline that is the mean low-water line of the \ncountry\u2019s coastline."
    },
    {
        "question": "9. To determine whether an item is a fixture, the MOST important test is whether the",
        "choices": [
            "a. effort needed to remove the item is significant.",
            "b. item must be dismantled for removal.",
            "c. value of the item is high.",
            "d. person who installed it intended for it to be permanent."
        ],
        "answer": "d. The intent of the person who installed the item is the most important test of whether the item \nis a fixture."
    },
    {
        "question": "0. A homeowner planted a rose bush on the property and plans to remove it when the house is \nsold. The sales contract explicitly excludes the rose bush from the sale. This provision is \nnecessary because the rose bush ordinarily is considered to be",
        "choices": [
            "d. The sales contract explicitly excludes the rose bush from the sale. This provision is",
            "a. a trade fixture.",
            "b. personal property.",
            "c. an emblement.",
            "d. real estate."
        ],
        "answer": "d. Because the rose bush is a perennial shrub, it is considered real estate"
    }
];

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    console.log("Game started"); // Debugging line
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
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

        // Set data attributes for correct answers and explanations
        if (choice[0] === question.answer[0]) {
            button.dataset.correct = true;
            button.dataset.explanation = question.answer;  // Explanation is the full answer text
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

    // Highlight the user's selection
    setStatusClass(selectedButton, correct);

    // Highlight the correct answer
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct) {
            setStatusClass(button, true);
        }
        button.disabled = true;  // Disable all buttons after selection
    });

    // Show explanation if toggle is on
    if (toggleAnswersCheckbox.checked) {
        showExplanation(selectedButton);
    }

    // Show the next button or finish the quiz
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
