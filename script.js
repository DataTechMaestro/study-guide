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
        "question": "1. A deceased homeowner left the family home to the deceased\u2019s second spouse with the \nprovision that when the surviving spouse dies, the home goes to a child by the deceased\u2019s first \nspouse. The second spouse owns a bundle of rights but does not own the right to",
        "choices": [
            "a. will the property.",
            "b. sell the property.",
            "c. lease the property.",
            "d. decorate the property."
        ],
        "answer": "a. The second spouse owns a life estate and has the entire bundle of rights except the right to \nwill the property."
    },
    {
        "question": "2. A freehold estate lasts for",
        "choices": [
            "a. 99 years.",
            "b. no longer than 100 years.",
            "c. an indeterminable time.",
            "d. the number of years specified when the owner takes possession."
        ],
        "answer": "c. A freehold estate lasts for an indeterminable length of time, such as for a lifetime or forever."
    },
    {
        "question": "3. A property owner conveyed a one-acre parcel of land to a preschool. The deed provided that \nthe property was to be used only as a playground; the former owner reserved a right of \nreentry. What kind of estate has been granted?",
        "choices": [
            "a. Leasehold",
            "b. Fee simple subject to a condition subsequent",
            "c. Fee simple absolute",
            "d. Curtesy"
        ],
        "answer": "b. The owner has granted a fee simple subject to a condition subsequent. If, at some point in the \nfuture, the land is not used as a playground, the former owner or the former owner\u2019s heirs may \nexercise the right of re-entry by retaking physical possession of the land."
    },
    {
        "question": "4.  A notice is filed in the public record of pending litigation affecting the title to a property. This \nnotice is an example of",
        "choices": [
            "a. fee simple determinable",
            "b. police power",
            "c. an encroachment",
            "d. a lis pendens"
        ],
        "answer": "d. A lis pendens is a notice filed in the public record affecting the title to property or a claimed \nownership interest in it.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "5. A property owner gave land to a school \u201cso long as the land is used for only academic and \nrecreational purposes.\u201d The ownership interest granted here is called",
        "choices": [
            "a. an easement by prescription.",
            "b. an encumbrance.",
            "c. a bundle of rights.",
            "d. a fee simple determinable."
        ],
        "answer": "d. The terms so long as, while, and during generally indicate creation of a fee simple \ndeterminable interest. The school obtains the full bundle of rights gained by a property \nowner, but one of the \u201csticks\u201d in that bundle has a special feature."
    },
    {
        "question": "6. If the government acquires privately owned real estate through a condemnation suit, it is \nexercising its power of",
        "choices": [
            "a. escheat.",
            "b. reverter.",
            "c. eminent domain.",
            "d. defeasance."
        ],
        "answer": "c. The right of the state to acquire private property for public use is eminent domain. The court \naction is called condemnation. Property escheats back to the state when it becomes \nownerless; that is, the owner dies leaving no heirs and no will."
    },
    {
        "question": "7. The owner of two acres of land sold one acre and reserved an easement appurtenant for \nentrance and exit over that acre to reach the public road. The buyer\u2019s land is",
        "choices": [
            "d. The buyer\u2019s land is",
            "a. capable of being cleared of the easement if the buyer sells to a third party.",
            "b. the servient tenement.",
            "c. the dominant tenement.",
            "d. subject to an easement in gross."
        ],
        "answer": "b. The seller\u2019s remaining parcel is the dominant tenement and benefits from the easement. The \neasement runs over the buyer\u2019s property, the servient tenement."
    },
    {
        "question": "8. A large undeveloped parcel of land borders a road on the lower edge. The owner sells the \nlower portion of the property and the buyer builds a home on it. Several years later, the owner \nsells the upper-portion of the property to a different buyer. The second buyer\u2019s property does \nnot border any road. For that buyer to gain access to the road, the buyer must claim an \neasement",
        "choices": [
            "d. For that buyer to gain access to the road, the buyer must claim an",
            "a. by necessity.",
            "b. in gross.",
            "c. by prescription.",
            "d. by restriction."
        ],
        "answer": "a. An easement by necessity could be created by court order to permit legal access to the second \nbuyer\u2019s property.   \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "9. If the dominant estate merges with the servient estate, which of these is TRUE?",
        "choices": [
            "a. The easement remains in effect for the entire parcel.",
            "b. The easement is suspended but cannot be terminated.",
            "c. The easement is terminated.",
            "d. The new owner must bring a suit seeking severance of the easement from the combined"
        ],
        "answer": "c. If the owner of the dominant tenement also becomes owner of the servient tenement (or vice \nversa), the easement terminates. Because the same person owns both properties, there is no \nneed for the easement to exist."
    },
    {
        "question": "0. If the homeowner has an outstanding mortgage balance of $135,000 and credit \ncard debts amounting to $24,360, how much is protected by the homestead exemption?",
        "choices": [
            "a. $640",
            "b. $2,140",
            "c. $20,000",
            "d. $26,500"
        ],
        "answer": "c. The homestead exemption is $20,"
    },
    {
        "question": "1. In some states, a husband cannot sell property unless the wife also signs the deed. The wife\u2019s \ninterest is called",
        "choices": [
            "d. The wife\u2019s",
            "a. personal property rights.",
            "b. homestead rights.",
            "c. curtesy rights.",
            "d. dower rights."
        ],
        "answer": "d. A wife\u2019s interest in her deceased husband\u2019s property is dower, a husband\u2019s interest is curtesy, \nand protection for some part of the family home is called homestead rights."
    },
    {
        "question": "2. The state\u2019s authority to enact legislation to protect the public is passed through to \nmunicipalities and counties through",
        "choices": [
            "a. police power.",
            "b. enabling acts.",
            "c. licensing laws.",
            "d. processing papers."
        ],
        "answer": "b. The state passes police power to counties and municipalities through enabling acts. Licensing \nlaws are an example of police power.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "3. The state requires enough land to build a four-lane highway. For the state to acquire the \nneeded land, the state must reimburse every property owner",
        "choices": [
            "a. the value of the land but not improvements.",
            "b. the estimated future value of the property after completion of the highway.",
            "c. for the amount that the property owner paid for the land.",
            "d. for the fair market value of the property taken."
        ],
        "answer": "d. To acquire private property through eminent domain, the state must prove that the purchase \nis for public good, pay a fair price, and allow the property owner full rights to appeal. The \nprice may or may not reflect what the owner had actually paid for the property."
    },
    {
        "question": "4. A patient died in a nursing home. The deceased left no heirs and had not written a will. What \nhappens to the deceased\u2019s $250,000 estate?",
        "choices": [
            "a. It escheats to the state or county.",
            "b. The nursing home gets to keep it.",
            "c. It will be split between the nursing home and the county.",
            "d. It can be paid over to the deceased\u2019s church."
        ],
        "answer": "a. Because the deceased left no will and there are no heirs, the $250,000 is essentially ownerless. \nIt reverts to the state or county."
    },
    {
        "question": "5. Which of these is defined as a claim, charge, or liability that attaches to real estate?",
        "choices": [
            "a. Lien",
            "b. Easement",
            "c. Deed restriction",
            "d. Encumbrance"
        ],
        "answer": "d. An encumbrance is a claim, charge, or liability that attaches to real estate, such as a lien, \neasement, or deed restriction."
    },
    {
        "question": "6. Which of these must exist for an appurtenant easement to exist?",
        "choices": [
            "a. Two adjacent parcels, different owners",
            "b. Two adjacent parcels, one owner",
            "c. Landlocked property that requires passage to the street",
            "d. Long-time unauthorized usage"
        ],
        "answer": "a. An easement appurtenant must have two owners and two parcels of land. A landlocked parcel \nwould require an easement by necessity; long-time unauthorized usage would lead to an \neasement by prescription."
    },
    {
        "question": "7. What are deed restrictions?",
        "choices": [
            "a. Public land restrictions",
            "b. Illegal land restrictions",
            "c. Private agreements affecting the use of the land",
            "d. Informal agreements between neighbors",
            "c."
        ],
        "answer": "c. Deed restrictions are private agreements written into the deed and are privately enforced. \nExamples of public restrictions include zoning ordinances and building codes."
    },
    {
        "question": "8. The electric company has the right to extend its wires over 50 parcels of land. What right does \nthe electric company have?",
        "choices": [
            "d. What right does",
            "a. Appurtenant easement",
            "b. Easement by necessity",
            "c. Easement by prescription",
            "d. Easement in gross"
        ],
        "answer": "d. Commercial easements such as this are called easements in gross. There are only servient \ntenements. There is no dominant tenement because there is no associated land ownership."
    },
    {
        "question": "9. For as long as anyone can remember, neighbors have used a footpath over a waterfront parcel \nto get to the river. Recently, the current owner of the waterfront property erected a fence \nacross the path, blocking access. Which of these easements might the neighbors claim, which \nwould require the property owner to remove the fence?",
        "choices": [
            "a. Easement by necessity",
            "b. Easement by prescription",
            "c. Easement in gross",
            "d. Appurtenant easement"
        ],
        "answer": "b. Long-time unauthorized usage may create legal rights leading to an easement by \nprescription. An easement in gross is a personal right, often used by utility companies. An \neasement by necessity could be imposed by court order to provide access to a landlocked \nproperty."
    },
    {
        "question": "0. The holder of a life estate is called",
        "choices": [
            "a. an encumbrance.",
            "b. a life tenant.",
            "c. a remainderman.",
            "d. a successor."
        ],
        "answer": "b. A life tenant is entitled to the rights of ownership and can benefit from both possession and \nordinary use, just as if the individual were a fee simple owner."
    },
    {
        "question": "1. Which of these cannot take title as a joint tenant with right of survivorship?",
        "choices": [
            "a. Spouses",
            "b. Two friends who are business partners",
            "c. Two relatives who share a house",
            "d. A corporation"
        ],
        "answer": "d. Because a corporation continues indefinitely until terminated by legal action, a corporation    \nmay never take title as a joint tenant."
    },
    {
        "question": "2. When two or more individuals decide to buy a property together, the result is a form of",
        "choices": [
            "a. cooperation.",
            "b. co-ownership.",
            "c. community effort.",
            "d. joint venture."
        ],
        "answer": "b. When two or more people buy property together, it is called co-ownership. A joint venture is a \nform of partnership in which two or more people carry out a single business project."
    },
    {
        "question": "3.  Three brothers bought a farm together, and the deed listed only each of their names. What \nform of ownership are they presumed to have taken?",
        "choices": [
            "a. Tenancy by the entireties",
            "b. Joint tenancy with right of survivorship",
            "c. Tenancy in common",
            "d. In severalty"
        ],
        "answer": "c. The brothers are presumed to be tenants in common because they did not take title as joint \ntenants with right of survivorship. Joint tenancy requires specific language. Severalty \nownership indicates one owner."
    },
    {
        "question": "4. What form of ownership is employed when one person transfers ownership to someone else \nto hold and manage for a third person?",
        "choices": [
            "a. Joint venture",
            "b. Joint tenancy",
            "c. Trust",
            "d. Severalty"
        ],
        "answer": "c. A trust is a device by which one person transfers ownership of property to someone else to \nhold or manage for the benefit of a third party. Severalty indicates one owner. Joint tenancy \nis a form of ownership in which, as joint owners die, the surviving owners acquire the \ndeceased tenant\u2019s interest.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "5. Two people, each of whom has children from a previous marriage, are now marrying each other. \nThey ask a real estate professional for advice about how to take title. What should the real \nestate professional suggest?",
        "choices": [
            "a. Tenancy in common, so that each one-half interest would go to each spouse\u2019s children",
            "b. Joint tenancy to protect each other, so that if one dies, the other gets the house",
            "c. That they wait until the real estate professional finds out how best to advise them",
            "d. That they consult with an attorney"
        ],
        "answer": "d. Because the choice of ownership affects the ability to transfer the real estate, has tax \nimplications, and decides rights to future claims, real estate professionals should tell their \nclients to discuss the issue with an attorney. Real estate professionals are not permitted to \ngive legal advice."
    },
    {
        "question": "5. What kind of provision is this?",
        "choices": [
            "a. Testamentary trust",
            "b. Living trust",
            "c. Land trust",
            "d. Trust deed"
        ],
        "answer": "a. A testamentary trust is established by will after the trustor\u2019s death. A living trust is \nestablished during the trustor\u2019s lifetime. Real estate is the only asset in a land trust. A deed of \ntrust (also called a trust deed) is a financing instrument."
    },
    {
        "question": "7. What kind of ownership do the horizontal property acts regulate?",
        "choices": [
            "a. Cooperatives",
            "b. Condominiums",
            "c. Time-sharing",
            "d. Planned unit development"
        ],
        "answer": "b. Condominiums are regulated by a horizontal property act in most states."
    },
    {
        "question": "8. Shareholders in a cooperative receive shares of stock that entitle them to a",
        "choices": [
            "a. common element lease.",
            "b. trust deed.",
            "c. proprietary lease.",
            "d. corporate deed."
        ],
        "answer": "c. The proprietary lease is part of the ownership of the cooperative stock and gives the owner \nthe right to occupy a specific apartment. Common elements refer to the property owned \njointly by condominium owners.   \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "9. Membership camping is similar to",
        "choices": [
            "a. cooperative ownership.",
            "b. condominium ownership.",
            "c. planned use development.",
            "d. time-share use."
        ],
        "answer": "d. The owner of membership camping purchases the right to use the developer\u2019s facilities, which \nis similar to a time-share. The owner may not be limited to a specific time, as is the case in a \ntypical time-share arrangement, however."
    },
    {
        "question": "0. In a large high-rise condominium, each unit is owned by individual owners. The elevators, \nparking garage, and swimming pool are called",
        "choices": [
            "a. community property.",
            "b. separate property.",
            "c. common elements.",
            "d. proprietary elements."
        ],
        "answer": "c. The parts of a property that condominium owners own together are the common elements. \nCommunity property is a system of property ownership based on the theory that each spouse \nhas an equal interest in property acquired during the marriage, which is distinct from \nproperty acquired by a spouse before marriage, making it that spouse\u2019s separate property."
    },
    {
        "question": "1. Two individuals own an apartment building as joint tenants, sharing equally in the expenses \nand profits. If one of the co-owners sells that interest by signing and delivering a deed to a \nbuyer, which of these statements is TRUE?",
        "choices": [
            "a. The buyer will become a joint tenant with the remaining owner.",
            "b. The buyer and the remaining owner will be tenants in common.",
            "c. The buyer will be a tenant in common with the remaining owner and a joint tenant with",
            "d. The conveyance will be invalid; the two individuals will remain joint tenants."
        ],
        "answer": "b. A co-owner can sell whatever the co-owner owns; however, once the unities of time, title, and \ninterest are destroyed, as they are when a joint owner sells that interest, there can no longer \nbe a joint tenancy."
    },
    {
        "question": "2. In February, a seller conveyed an undivided one-half interest in a parcel of land to a buyer. In \nMarch, the seller conveyed the remaining one-half interest to a different buyer. The deed to \nthe second buyer included this statement: \u201cThis buyer is to be a joint tenant with the buyer of \nthe other half-interest in the parcel.\u201d Both deeds were recorded. Based on these facts, which of \nthese statements is TRUE?",
        "choices": [
            "d. Based on these facts, which of",
            "a. The second buyer and first buyer hold title to the land as joint tenants under the terms of",
            "b. The second buyer and first buyer own the land by partition.",
            "c. The second buyer and first buyer are tenants in common.",
            "c.",
            "d. The second buyer owns a half-interest in the land as a joint tenant; the first buyer owns a"
        ],
        "answer": "c. Because there are two deeds made at different times, the four unities of joint tenancy have not \nbeen met. This means that the second buyer and first buyer are tenants in common."
    },
    {
        "question": "3. Three people own a large parcel of undeveloped land in joint tenancy. One of them wants to \nbuild a shopping center on the property, while the other two want to use it as an organic farm. \nThe would-be developer tries to buy the other tenants\u2019 interests, but they refuse to sell. Which \nof these is the developer\u2019s BEST option?",
        "choices": [
            "a. File a suit for partition",
            "b. Begin building a shopping center on one-third of the property",
            "c. Wait for the other two to die",
            "d. File a suit to quiet title"
        ],
        "answer": "a. When co-owners cannot come to an agreement, they must file for partition in court. The \nproperty will not physically be divided; rather, one or more will be given the opportunity to \nbuy the others out. If this is not possible, then the property will be sold, and the proceeds will \nbe divided appropriately."
    },
    {
        "question": "4. Fee simple ownership of a cottage in a lakefront community includes an undivided percentage \ninterest in a parking lot, a golf course, and a swimming pool, all located in the development. \nBased on these facts alone, the ownership interest is probably BEST described as a",
        "choices": [
            "a. time-share estate.",
            "b. time-share use.",
            "c. condominium.",
            "d. cooperative."
        ],
        "answer": "c. It appears that this is condominium ownership because it includes ownership of a cottage as \nwell as an interest in the common elements. Cooperative ownership is ruled out because the \nownership does not have a proprietary lease. It is not a time-share, because it includes more \nthan the right to use the property at a specific time."
    },
    {
        "question": "0. N contributes $30,000 and agrees to run the business, which \nthe owners call \u201cProperty Group Partners.\u201d Neither M nor R has any right to participate in the \noperation of the venture. Based on these facts, what type of business organization have M, R, \nand N established?",
        "choices": [
            "a. Joint venture",
            "b. Limited partnership",
            "c. General partnership",
            "d. Limited liability company"
        ],
        "answer": "b. A limited partnership limits the participation of the silent partners, but also limits their \nliability. A general partnership would require that all be equally involved in running the \noperation and would expose all to liability.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "6. Based on the facts in the previous question, if the building on the property collapses, resulting \nin injury and property damage worth $275,000, what will be M\u2019s liability?",
        "choices": [
            "a. None",
            "b. $50,000",
            "c. $91,667",
            "d. $100,000"
        ],
        "answer": "b. Each of the limited partners is limited in liability to the $50,000 amount of the original \ninvestment."
    },
    {
        "question": "7. A joint tenancy requires",
        "choices": [
            "a. unity of relationship.",
            "b. unity of possession.",
            "c. unity of purpose.",
            "d. unity of name."
        ],
        "answer": "b. To create joint tenancy ownership, four unities are required: possession, interest, time, and \ntitle."
    },
    {
        "question": "8. A characteristic of a tenancy by the entirety is that",
        "choices": [
            "a. title may be conveyed by a deed signed by either party.",
            "b. a spouse may dispose of their interest by will.",
            "c. the spouses can agree to own unequal interests.",
            "d. the surviving spouse automatically owns the property acquired during the marriage."
        ],
        "answer": "d. Under tenancy by the entirety, title may be conveyed only by a deed signed by both parties, \neach spouse owns an equal, undivided interest in the property, and the surviving spouse \nautomatically becomes the owner upon the death of the other."
    },
    {
        "question": "9. A trust is created to pay for a student\u2019s college education. An attorney makes payments on \nbehalf of the student directly to the college. Based on these facts, which of these statements \nBEST characterizes the relationships among the parties to the trust?",
        "choices": [
            "a. The attorney is the trustor, the student is the beneficiary, and the creator of the trust is the",
            "b. The creator of the trust is the trustor, the college is the beneficiary, and the attorney is the",
            "c. The creator of the trust is the trustor, the student is the beneficiary, and the attorney is the",
            "d. The creator of the trust is the trustor, the attorney is the trustee, and the college is the"
        ],
        "answer": "c. The creator of the trust is the owner-trustor, the student is the beneficiary, and the attorney is \nthe trustee, the person who manages the trust.   \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "0. A company is a legal entity, created by charter under the laws of the state. The company is \nmanaged and operated by a board and is permitted to buy and sell real estate. When one of its \ndirectors dies, the company continues to operate. Because of its structure, the company\u2019s \nincome is subject to double taxation. The company is BEST described as a",
        "choices": [
            "a. partnership.",
            "b. condominium trust.",
            "c. corporation.",
            "d. limited liability company."
        ],
        "answer": "c. The corporation would not be affected if one of the directors dies. The most important fact \nprovided is the double taxation that applies to corporations."
    },
    {
        "question": "1. When a corporation takes complete ownership of a property, the ownership is in",
        "choices": [
            "a. joint tenancy.",
            "b. tenancy in common.",
            "c. partnership.",
            "d. severalty."
        ],
        "answer": "d. A corporation is treated as a person and may hold ownership in severalty."
    },
    {
        "question": "2.   In a tenancy in common, if the fractions of ownership are not stated in the deed, how are they \ndetermined?",
        "choices": [
            "a. The tenants need a judicial decision to determine the fractional shares.",
            "b. The tenants are presumed to hold equal shares.",
            "c. The tenants settle the issue through binding arbitration.",
            "d. The tenants must terminate the tenancy in common through partition."
        ],
        "answer": "b. The deed creating a tenancy in common may or may not state the fractional interest held by \neach co-owner. If no fractions are stated, the tenants are presumed to hold equal shares."
    },
    {
        "question": "3. In a land trust, the beneficiary is usually also the",
        "choices": [
            "a. trustor.",
            "b. trustee.",
            "c. fiduciary.",
            "d. attorney in fact."
        ],
        "answer": "a. In a land trust, the beneficiary is usually also the trustor. The beneficiary retains management \nand control of the real property and has the right of possession and the right to any income."
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