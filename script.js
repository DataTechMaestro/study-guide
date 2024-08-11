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
    },
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
    },
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