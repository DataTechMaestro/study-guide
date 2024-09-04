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
      "question": "A couple are married, 65 years old, and retired. They have almost $800,000 in equity in their home, but limited pension income which doesn’t provide enough cash to travel as they have always dreamed of doing. The couple should consider which of these financing alternatives?",
      "choices": [
        "a. Novation",
        "b. An adjustable-rate mortgage",
        "c. A reverse mortgage",
        "d. A growing equity mortgage"
      ],
      "answer": "c. A reverse mortgage allows a homeowner aged 62 or older to borrow money against the equity built up in the home. The money may be used for any purpose and is not repaid until the homeowner(s) die or move out of the home."
    },
    {
      "question": "A document that indicates that a loan has been made is called a",
      "choices": [
        "a. promissory note.",
        "b. mortgage.",
        "c. deed of trust.",
        "d. satisfaction."
      ],
      "answer": "a. The evidence that a loan has been made is found in the promissory note. A mortgage or deed of trust provides security for the loan. A satisfaction or release indicates that the loan has been repaid in full."
    },
    {
      "question": "A homeowner defaults on a mortgage and the lender forecloses. The lender’s foreclosure suit is filed on March 15, and a court-ordered sale is to occur on August 10. If the homeowner attempts to redeem the property on August 1, which of these statements applies?",
      "choices": [
        "a. The homeowner is exercising a statutory right of redemption.",
        "b. The homeowner is exercising an equitable right of redemption.",
        "c. The homeowner's attempt to redeem the property is too early; by statute, the homeowner must wait until after the sale.",
        "d. The homeowner cannot redeem the property after a foreclosure suit is filed."
      ],
      "answer": "b. The homeowner has an equitable interest in the property until the foreclosure sale is complete; thus, the homeowner has the right to exercise the equitable right of redemption. In some states, the homeowner may retain a statutory right of redemption for a period of time after the foreclosure sale."
    },
    {
      "question": "A house is listed for $250,000. It is purchased for $230,000, with a 20% down payment and the balance financed with a fixed-rate mortgage at 5%. The lender charges four points. If there are no other closing costs involved, and the buyer made an earnest money deposit of $2,000, how much money does the buyer need at closing?",
      "choices": [
        "a. $7,360",
        "b. $26,000",
        "c. $46,000",
        "d. $51,360"
      ],
      "answer": "d. The buyer needs $51,360 at closing. Three steps: (1) Calculate down payment: $230,000 × 20% = $46,000 (2) Determine points charge: $230,000 × 80% × 4% = $7,360 (3) Total the two amounts: $46,000 + $7,360 = $53,360 (4) Subtract the earnest money deposit: $53,360 - $2,000 = $51,360."
    },
    {
      "question": "One afternoon, a client calls a real estate broker. 'My lender just told me that my note and mortgage is a negotiable instrument,' says the client. 'What does that mean?' Which of these would be the broker’s BEST response?",
      "choices": [
        "a. 'That’s great! It means the lender is willing to negotiate on the interest rate.'",
        "b. 'Oh no! That means the mortgage can’t be assumed by the next person you sell to.'",
        "c. 'Don’t worry. That means the mortgage can be sold by the lender, but your terms are not affected.'",
        "d. 'Uh-oh! That means we have to go back to the sellers and ask them to pay the points.'"
      ],
      "answer": "c. Negotiable instruments are transferable. A note and mortgage will often be sold on the secondary market."
    },
    {
      "question": "A deed of trust involves all of these terms EXCEPT",
      "choices": [
        "a. lender.",
        "b. borrower.",
        "c. trustee.",
        "d. mortgagor."
      ],
      "answer": "d. A mortgagor is the borrower in a mortgage. In a deed of trust, the borrower is the trustor, and the trustee holds naked title in trust for the beneficiary (lender)."
    },
    {
      "question": "In a lien theory state a buyer purchases property and gives the seller a mortgage as part of the purchase price. The buyer is the borrower and the seller is the lender. Which of these statements is true?",
      "choices": [
        "a. The buyer retains only equitable title to the property.",
        "b. If the buyer defaults on the loan, the seller always must undergo a formal foreclosure proceeding to recover the security.",
        "c. The buyer has given legal title to the seller.",
        "d. The seller has only a lien interest in the property."
      ],
      "answer": "d. In a lien theory state, a borrower who gives a mortgage, even in the seller financing situation described in this question, retains both equitable and legal title to the property serving as security. A mortgage may provide a power of sale to the lender in the event of borrower default."
    },
    {
      "question": "A basic form homeowners insurance policy provides coverage against",
      "choices": [
        "a. floods.",
        "b. fire, lightning, and smoke damage.",
        "c. damage due to the weight of ice, snow, or sleet.",
        "d. falling objects."
      ],
      "answer": "b. A basic form policy covers fire, lightning, and smoke damage, among other hazards. A broad-form policy generally covers the hazards of falling objects and damage due to the weight of ice, snow, or sleet. Flood is covered under a separate flood insurance policy."
    },
    {
      "question": "A mortgage company charges borrowers a 1.5% loan origination fee. A house is purchased for $210,000, with a $50,000 down payment. The buyer applies for a mortgage to cover the balance. What will the mortgage company charge as a fee if the asking price of the house was $235,000?",
      "choices": [
        "a. $2,400",
        "b. $3,150",
        "c. $3,525",
        "d. $3,750"
      ],
      "answer": "a. The loan origination fee is $2,400: $210,000 – $50,000 × 1.5% = $2,400. The asking price is not relevant to this problem."
    },
    {
      "question": "A mortgage document contains the clause: 'In the event of Borrower’s default under the terms of this Agreement, Lender may declare the entire unpaid balance of the debt due and payable immediately.' This clause is called",
      "choices": [
        "a. a hypothecation clause.",
        "b. an acceleration clause.",
        "c. a defeasance clause.",
        "d. a release clause."
      ],
      "answer": "b. Hypothecation is the act of offering the property as security without giving up possession. The defeasance clause in a mortgage requires the lender to execute a satisfaction of mortgage when the note has been fully paid. A release indicates that the loan has been repaid in full."
    },
    {
      "question": "This month, a homeowner made the last payment on a mortgage loan. The lender must execute a",
      "choices": [
        "a. release deed.",
        "b. promissory note.",
        "c. possessory note.",
        "d. satisfaction of mortgage."
      ],
      "answer": "d. The promissory note shows that a loan was made. The satisfaction indicates that the loan was fully repaid. Satisfaction of mortgage is also sometimes called a release, but not a release deed."
    },
    {
      "question": "A growing equity mortgage is also called a",
      "choices": [
        "a. straight loan.",
        "b. balloon payment loan.",
        "c. rapid-payoff mortgage.",
        "d. reverse mortgage."
      ],
      "answer": "c. A growing equity mortgage is also called a rapid-payoff mortgage because the interest rate remains the same but the principal payments increase over the loan term."
    },
    {
      "question": "A buyer purchases property for $45,000 in cash and assumes the seller’s outstanding mortgage balance of $98,500. The lender executes a release for the seller. The buyer fails to make any mortgage payments, and the lender forecloses. At the foreclosure sale, the property is sold for $75,000. Based on these facts, unless state law provides anti-deficiency protection, who is liable, and for what amount?",
      "choices": [
        "a. The seller is solely liable for $23,500.",
        "b. The buyer is solely liable for $23,500.",
        "c. The buyer and the seller are equally liable for $23,500.",
        "d. The buyer is solely liable for $30,000."
      ],
      "answer": "b. Because the lender released the original borrower, the second borrower is fully responsible for the deficiency."
    },
    {
      "question": "The decision whether to buy or rent should involve consideration of",
      "choices": [
        "a. whether or not the property is located in a title theory state.",
        "b. the terms of the security agreement.",
        "c. housing affordability and current mortgage interest rates.",
        "d. the availability of a reverse mortgage."
      ],
      "answer": "c. Other considerations include tax consequences, what might happen to home prices in the future, and a person’s overall financial situation."
    },
    {
      "question": "A borrower defaulted on a mortgage loan, leaving an unpaid balance of $95,000. After receiving only $85,000 from the sale of the property, the lender filed for a",
      "choices": [
        "a. lis pendens.",
        "b. release deed.",
        "c. satisfaction piece.",
        "d. deficiency judgment."
      ],
      "answer": "d. A deficiency results when the foreclosed property does not bring enough money to fully repay the loan; the mortgagor may be entitled to a personal judgment against the borrower for the unpaid balance. Lis pendens gives notice that the property is the subject of legal action. A satisfaction indicates that the loan was fully repaid."
    },
    {
      "question": "The owner of a parcel of property defaulted on the purchase loan and the trustee immediately sold the property to recover the debt. The trustee acted under the terms of the security instrument. Based on these facts, which of these statements is TRUE?",
      "choices": [
        "a. The exercise of this power of sale clause is an example of strict foreclosure.",
        "b. The trustee’s sale of the property was illegal unless the owner’s state permits a so-called friendly foreclosure.",
        "c. The exercise of this power of sale clause is an example of nonjudicial foreclosure.",
        "d. The owner could have exercised the statutory right of redemption at any time prior to the trustee’s sale of the property."
      ],
      "answer": "c. Strict foreclosure and friendly foreclosure do not involve a sale. The statutory right of redemption applies only after the sale. A nonjudicial foreclosure does not involve the courts."
    },
    {
      "question": "The difference between the interest rate that the lender charges and what the investor demands can be made up by charging",
      "choices": [
        "a. discount points.",
        "b. loan origination fees.",
        "c. satisfaction fees.",
        "d. underwriting fees."
      ],
      "answer": "a. Loan origination fees are charged to cover the cost of making the loan. The satisfaction indicates that the loan has been fully repaid."
    },
    {
      "question": "What is the term that refers to a lender charging an interest rate that is higher than that permitted by law?",
      "choices": [
        "a. Alienation",
        "b. Usury",
        "c. Hypothecation",
        "d. Defeasance"
      ],
      "answer": "b. To protect consumers from unscrupulous lenders, many states have enacted laws limiting the interest rate that may be charged on loans."
    },
    {
      "question": "Parties to lending agreements are referred to by different terms. Which of these refers to the same party?",
      "choices": [
        "a. Borrower = beneficiary",
        "b. Borrower = mortgagor",
        "c. Trustee = borrower",
        "d. Trustor = mortgagee"
      ],
      "answer": "b. The person who makes the payments to repay the loan is called the borrower. The person who gave the property as security is called the mortgagor. Both are the same person."
    },
    {
      "question": "The lender wants to call the entire note due and payable if the borrower stops making payments, so the security instrument must include",
      "choices": [
        "a. an acceleration clause.",
        "b. a defeasance clause.",
        "c. an alienation clause.",
        "d. a prepayment clause."
      ],
      "answer": "a. The acceleration clause permits the lender to declare the entire note due upon default by the borrower. The alienation clause is also called the due on sale clause, permitting the lender to declare the entire note due if the property is sold, thus preventing a loan assumption."
    },
    {
      "question": "When a deed of trust is the security instrument, which party usually chooses the trustee?",
      "choices": [
        "a. The borrower",
        "b. The lender",
        "c. The devisee",
        "d. The county government"
      ],
      "answer": "b. The lender usually also reserves the right to substitute trustees in the event of death or dismissal."
    },
    {
      "question": "Lenders charge a loan origination fee to",
      "choices": [
        "a. guard against charges of usury.",
        "b. cover the losses involved if the borrower repays the loan before the end of the loan term.",
        "c. cover the expenses involved in generating the loan.",
        "d. guard against losses in the event of a short sale."
      ],
      "answer": "c. The processing of a mortgage application is called loan origination. When a home loan is originated, a loan origination fee is charged by most lenders to cover the expenses involved in generating the loan."
    },
    {
      "question": "How does an acceleration clause help lenders?",
      "choices": [
        "a. Without the acceleration clause, lenders would have to sue the borrower for every overdue payment.",
        "b. Lenders would rather foreclose on property than hold a long-term loan.",
        "c. It results in a deed in lieu of foreclosure rather than the default process.",
        "d. It sets out the provisions for the impound account."
      ],
      "answer": "a. A lender’s purpose is to make long-term loans, not foreclose. The impound account is set up under a different provision of the loan."
    },
    {
      "question": "After a foreclosure sale, what responsibility does the purchaser have for the mortgage and any junior liens?",
      "choices": [
        "a. The purchaser pays off the mortgage after the sale, but the junior lienholders receive nothing.",
        "b. The mortgage holder receives funds from the sale, but the purchaser must pay off the junior lienholders to obtain title.",
        "c. The purchaser must pay off both the mortgage and junior lienholders after the sale.",
        "d. The purchaser has no responsibility because the purchaser receives the property title unencumbered by the mortgage and junior liens."
      ],
      "answer": "d. The proceeds from the sale are used to pay off the mortgage and junior lienholders. If the proceeds are insufficient, unpaid creditors can seek a deficiency judgment against the original owner for the remaining debt. The purchaser is not involved unless the purchaser is a mortgage or lienholder."
    },
    {
      "question": "What is a major consideration for a lender accepting a deed in lieu of foreclosure?",
      "choices": [
        "a. The lender takes the real estate subject to all junior liens.",
        "b. The lender gains rights to private mortgage insurance.",
        "c. The process is lengthy and involves a lawsuit.",
        "d. It is an adverse element in the borrower’s credit history."
      ],
      "answer": "a. The lender loses rights to FHA or private mortgage insurance or VA guarantees. The process is called friendly foreclosure because a lawsuit is not involved. It is an adverse element for the borrower, but that does not affect the lender."
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