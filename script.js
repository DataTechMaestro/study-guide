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
      "question": "A grantor is conveying an interest that is less than fee simple absolute. This explanation of the extent of ownership will be found in the",
      "choices": [
        "a. seisin clause.",
        "b. granting clause.",
        "c. habendum clause.",
        "d. exceptions and reservations."
      ],
      "answer": "c. The habendum clause is the 'to have and to hold' clause that defines the extent of ownership that is being conveyed."
    },
    {
      "question": "A seller conveys property to a buyer by a written document that contains five covenants protecting the buyer’s title. What is the seller’s role in this transaction?",
      "choices": [
        "a. Grantee",
        "b. Grantor",
        "c. Devisor",
        "d. Devisee"
      ],
      "answer": "b. Because the seller is conveying the interest, the seller is the grantor. The person who receives the interest is the grantee."
    },
    {
      "question": "The verification that the grantor’s signature is both genuine and voluntary is",
      "choices": [
        "a. a judgment.",
        "b. an attachment.",
        "c. a consideration.",
        "d. an acknowledgment."
      ],
      "answer": "d. An acknowledgment is a formal declaration under oath that the person who signs a written document does so voluntarily, and that the signature is genuine."
    },
    {
      "question": "Which of these is an example of involuntary alienation?",
      "choices": [
        "a. Sale",
        "b. Gift",
        "c. Escheat",
        "d. Will"
      ],
      "answer": "c. When a person dies intestate and leaves no heirs, the person’s estate will escheat to the state. Escheat is an example of involuntary alienation."
    },
    {
      "question": "The transfer of any interest in a parcel of real estate is typically in a document called the",
      "choices": [
        "a. title.",
        "b. deed.",
        "c. attachment.",
        "d. mortgage."
      ],
      "answer": "b. A deed is the written document that transfers a real estate interest. Evidence of ownership (title) is written in the deed. An attachment is the process of taking a person’s property into legal custody by a court order. A mortgage provides the security for a loan."
    },
    {
      "question": "A valid deed requires",
      "choices": [
        "a. adequate consideration.",
        "b. a photo of the property conveyed.",
        "c. the grantee’s acceptance.",
        "d. recording."
      ],
      "answer": "c. The deed needs to be delivered to the grantee and accepted by the grantee. As long as consideration is stated, there is no question of its adequacy."
    },
    {
      "question": "“I do hereby convey to my nearest relative all my interest in the property called 123 Main Street, Bismarck, North Dakota, to have and to hold, in consideration of receipt of the amount of $10 and other good and valuable consideration.” When signed, this document is",
      "choices": [
        "a. a valid conveyance by deed.",
        "b. an invalid conveyance by deed, because the property conveyed is inadequately described.",
        "c. an invalid conveyance by deed, because there is no recital of exceptions and reservations.",
        "d. an invalid conveyance by deed, because the grantee is inadequately identified."
      ],
      "answer": "d. Although the property may be adequately described, the grantee is not sufficiently identified. There is no transfer."
    },
    {
      "question": "The type of deed that imposes the least liability on the grantor is a",
      "choices": [
        "a. special warranty deed.",
        "b. bargain and sale deed.",
        "c. quitclaim deed.",
        "d. general warranty deed."
      ],
      "answer": "c. A quitclaim deed carries no covenants or warranties and generally only conveys whatever interest the grantor has, if any, when the deed is delivered."
    },
    {
      "question": "Title is NOT considered transferred until the deed is",
      "choices": [
        "a. signed by the grantor.",
        "b. delivered to and accepted by the grantee.",
        "c. delivered to the grantee.",
        "d. released from escrow."
      ],
      "answer": "b. The most complete answer is delivered to and accepted by the grantee during the grantor’s lifetime."
    },
    {
      "question": "Which of these is a guarantee that the grantor has the right to convey the property?",
      "choices": [
        "a. Covenant against encumbrances",
        "b. Covenant of seisin",
        "c. Covenant of further assurance",
        "d. Covenant of quiet enjoyment"
      ],
      "answer": "b. The covenant against encumbrances is a warranty that the property is free from encumbrances, except as noted. The grantor further assures that everything will be done to make the title good. Quiet enjoyment guarantees that the title will be good against third parties who might try to bring legal action to gain the property."
    },
    {
      "question": "A bargain and sale deed contains how many express warranties?",
      "choices": [
        "a. 0",
        "b. 2",
        "c. 3",
        "d. 5"
      ],
      "answer": "a. A bargain and sale deed contains no express warranties against encumbrances; however, it does imply that the grantor holds title and possession of the property."
    },
    {
      "question": "Which type of deed is used by a grantor whose interest in the real estate may be unknown?",
      "choices": [
        "a. Bargain-and-sale deed",
        "b. Special warranty deed",
        "c. General warranty deed",
        "d. Quitclaim deed"
      ],
      "answer": "d. If the grantor has no interest, the grantee will acquire nothing and have no right of warranty claim against the grantor."
    },
    {
      "question": "Under state law, one-half of an intestate decedent’s property goes to the decedent’s spouse, one-fourth is divided equally among the decedent’s children, and one-fourth goes to the state. If there is no spouse, the children divide three-fourths equally. A citizen of this state dies intestate, survived by an ex-spouse and seven adult children. If the estate is $865,550, how much will each child receive under state law?",
      "choices": [
        "a. $0",
        "b. $61,825.25",
        "c. $92,737.50",
        "d. $123,650.00"
      ],
      "answer": "c. The ex-spouse gets nothing. The state gets one-fourth and the remaining three-fourths will be divided equally among the seven children: $865,550 ÷ 4 = $216,387.50 to the state. The remaining amount, $649,162.50, is divided seven ways, leaving $92,737.50 per child."
    },
    {
      "question": "In one state, transfer tax is $1.20 for each $300 (or fraction of $300) of the sales price of any parcel of real estate. If a seller’s property sold for $250,000, what will be the amount of the transfer tax due?",
      "choices": [
        "a. $97.00",
        "b. $999.99",
        "c. $1,000.80",
        "d. $1,250.50"
      ],
      "answer": "c. The transfer tax due is $1,000.80: $250,000 ÷ $300 = 833.33, rounded up to 834. 834 × $1.20 = $1,000.80."
    },
    {
      "question": "In front of witnesses, P says to Q, “I never made a will, but I want you to have my property when I die.” If Q becomes the owner of the property on P’s death, it is because the state recognizes what kind of will?",
      "choices": [
        "a. Holographic",
        "b. Testamentary",
        "c. Nuncupative",
        "d. Probated"
      ],
      "answer": "c. A holographic will is completely handwritten. A testamentary trust is established by will after the owner’s death. Probate is the process of determining the validity of the will and distributing the assets of the estate."
    },
    {
      "question": "In one state, the transfer tax is $0.80 per $500 or fraction thereof. There is no tax charged on the first $500 of the price. What tax must the seller pay if the property sells for $329,650?",
      "choices": [
        "a. $525.60",
        "b. $526.40",
        "c. $527.20",
        "d. $528.00"
      ],
      "answer": "c. The seller must pay $527.20: $329,650 – the first $500 = $329,150. $329,150 ÷ $500 = 658.3, rounded up to 659. 659 × $0.80 = $527.20."
    },
    {
      "question": "A modification to a will is called",
      "choices": [
        "a. an addendum.",
        "b. an amendment.",
        "c. a probate.",
        "d. a codicil."
      ],
      "answer": "d. Any modification to a previously executed will is contained in a separate document called a codicil. Additional agreements attached to an agreement of sale are addenda. An amendment is a change to the existing content of a contract. Probate is the process of determining the validity of a will."
    },
    {
      "question": "The first goal of a probate proceeding when there is a will is",
      "choices": [
        "a. to ensure that the heirs do not fight among themselves.",
        "b. to confirm that the will is valid.",
        "c. to determine the exact assets of the deceased person.",
        "d. to identify how the estate will be disbursed."
      ],
      "answer": "b. Preventing fights among heirs is not the reason for probate. Before anything else is determined, the court must confirm that the will is valid."
    },
    {
      "question": "When a corporation transfers ownership of real property, the deed to the property must be signed by",
      "choices": [
        "a. an authorized officer.",
        "b. a shareholder.",
        "c. a broker.",
        "d. a grantee."
      ],
      "answer": "a. Proper authority for the sale must be given by bylaws or by a resolution passed by the board of directors. Shareholders are not necessarily officers, nor are brokers. A grantee does not sign a deed."
    },
    {
      "question": "The granting clause in a special warranty deed generally contains the words",
      "choices": [
        "a. 'grantor conveys and warrants.'",
        "b. 'grantor grants, bargains, and sells.'",
        "c. 'grantor remises, releases, and quitclaims.'",
        "d. 'grantor remises, releases, alienates, and conveys.'"
      ],
      "answer": "d. The granting clause in a special warranty deed generally contains the words 'grantor remises, releases, alienates, and conveys.'"
    },
    {
      "question": "A general power of attorney",
      "choices": [
        "a. is illegal in most states.",
        "b. requires delivery and acceptance by the grantee.",
        "c. provides general legal authority for intestate succession.",
        "d. provides authority to carry out all business dealings of the person giving it."
      ],
      "answer": "d. A general power of attorney provides authority to carry out all business dealings of the person giving it. A special power of attorney permits the execution of only certain acts."
    },
    {
      "question": "What limits are set by the covenants in a general warranty deed?",
      "choices": [
        "a. No limits are set.",
        "b. The covenants are limited to matters that occurred during the time the grantor owned the property.",
        "c. The covenants are limited to the matters that occurred within the last 10 years.",
        "d. The covenants are limited to the matters that occurred before the grantor owned the property."
      ],
      "answer": "a. No limits are set by the covenants in a general warranty deed. The grantor defends the title against defects created by the grantor and all those who previously held title."
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