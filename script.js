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
        "question": "1. A grantor is conveying an interest that is less than fee simple absolute. This explanation of the \nextent of ownership will be found in the",
        "choices": [
            "a. seisin clause.",
            "b. granting clause.",
            "c. habendum clause.",
            "d. exceptions and reservations."
        ],
        "answer": "c. The habendum clause is the \u201cto have and to hold\u201d clause that defines the extent of ownership \nthat is being conveyed."
    },
    {
        "question": "2. A seller conveys property to a buyer by a written document that contains five covenants \nprotecting the buyer\u2019s title. What is the seller\u2019s role in this transaction?",
        "choices": [
            "a. Grantee",
            "b. Grantor",
            "c. Devisor",
            "d. Devisee"
        ],
        "answer": "b. Because the seller is conveying the interest, the seller is the grantor. The person who receives \nthe interest is the grantee."
    },
    {
        "question": "3. The verification that the grantor\u2019s signature is both genuine and voluntary is",
        "choices": [
            "a. a judgment.",
            "b. an attachment.",
            "c. a consideration.",
            "d. an acknowledgment."
        ],
        "answer": "d. An acknowledgment is a formal declaration under oath that the person who signs a written \ndocument does so voluntarily, and that the signature is genuine."
    },
    {
        "question": "4. Which of these is an example of involuntary alienation?",
        "choices": [
            "a. Sale",
            "b. Gift",
            "c. Escheat",
            "d. Will"
        ],
        "answer": "c. When a person dies intestate and leaves no heirs, the person\u2019s estate will escheat to the state. \nEscheat is an example of involuntary alienation."
    },
    {
        "question": "5. The transfer of any interest in a parcel of real estate is typically in a document called the",
        "choices": [
            "a. title.",
            "b. deed.",
            "c. attachment.",
            "c.",
            "d. mortgage."
        ],
        "answer": "b. A deed is the written document that transfers a real estate interest. Evidence of ownership \n(title) is written in the deed. An attachment is the process of taking a person\u2019s property into \nlegal custody by a court order. A mortgage provides the security for a loan."
    },
    {
        "question": "6. A valid deed requires",
        "choices": [
            "a. adequate consideration.",
            "b. a photo of the property conveyed.",
            "c. the grantee\u2019s acceptance.",
            "d. recording."
        ],
        "answer": "c. The deed needs to be delivered to the grantee and accepted by the grantee. As long as \nconsideration is stated, there is no question of its adequacy."
    },
    {
        "question": "7. \u201cI do hereby convey to my nearest relative all my interest in the property called 123 Main \nStreet, Bismarck, North Dakota, to have and to hold, in consideration of receipt of the amount \nof $10 and other good and valuable consideration.\u201d When signed, this document is",
        "choices": [
            "a. a valid conveyance by deed.",
            "b. an invalid conveyance by deed, because the property conveyed is inadequately described.",
            "c. an invalid conveyance by deed, because there is no recital of exceptions and reservations.",
            "d. an invalid conveyance by deed, because the grantee is inadequately identified."
        ],
        "answer": "d. Although the property may be adequately described, the grantee is not sufficiently identified. \nThere is no transfer."
    },
    {
        "question": "8.  The type of deed that imposes the least liability on the grantor is a",
        "choices": [
            "a. special warranty deed.",
            "b. bargain and sale deed.",
            "c. quitclaim deed.",
            "d. general warranty deed."
        ],
        "answer": "c. A quitclaim deed carries no covenants or warranties and generally only conveys whatever \ninterest the grantor has, if any, when the deed is delivered."
    },
    {
        "question": "9. Title is NOT considered transferred until the deed is",
        "choices": [
            "a. signed by the grantor.",
            "b. delivered to and accepted by the grantee.",
            "c. delivered to the grantee.",
            "d. released from escrow."
        ],
        "answer": "b. The most complete answer is delivered to and accepted by the grantee during the grantor\u2019s \nlifetime.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "0. Which of these is a guarantee that the grantor has the right to convey the property?",
        "choices": [
            "a. Covenant against encumbrances",
            "b. Covenant of seisin",
            "c. Covenant of further assurance",
            "d. Covenant of quiet enjoyment"
        ],
        "answer": "b. The covenant against encumbrances is a warranty that the property is free from \nencumbrances, except as noted. The grantor further assures that everything will be done to \nmake the title good. Quiet enjoyment guarantees that the title will be good against third \nparties who might try to bring legal action to gain the property."
    },
    {
        "question": "1. A bargain and sale deed contains how many express warranties?",
        "choices": [
            "a. 0",
            "b. 2",
            "c. 3",
            "d. 5"
        ],
        "answer": "a. A bargain and sale deed contains no express warranties against encumbrances; however, it \ndoes imply that the grantor holds title and possession of the property."
    },
    {
        "question": "2. Which type of deed is used by a grantor whose interest in the real estate may be unknown?",
        "choices": [
            "a. Bargain-and-sale deed",
            "b. Special warranty deed",
            "c. General warranty deed",
            "d. Quitclaim deed"
        ],
        "answer": "d. If the grantor has no interest, the grantee will acquire nothing and have no right of warranty \nclaim against the grantor."
    },
    {
        "question": "3. Under state law, one-half of an intestate decedent\u2019s property goes to the decedent\u2019s spouse, \none-fourth is divided equally among the decedent\u2019s children, and one-fourth goes to the state. \nIf there is no spouse, the children divide three-fourths equally. A citizen of this state dies \nintestate, survived by an ex-spouse and seven adult children. If the estate is $865,550, how \nmuch will each child receive under state law?",
        "choices": [
            "a. $0",
            "b. $61,825.25",
            "c. $92,737.50",
            "d. $123,650.00"
        ],
        "answer": "c. The ex-spouse gets nothing. The state gets one-fourth and the remaining three-fourths will be \ndivided equally among the seven children: $865,550 \u00f7 4 = $216,387.50 to the state. The \nremaining amount, $649,162.50, is divided seven ways, leaving $92,737.50 per child.   \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "4. In one state, transfer tax is $1.20 for each $300 (or fraction of $300) of the sales price of any \nparcel of real estate. If a seller\u2019s property sold for $250,000, what will be the amount of the \ntransfer tax due?",
        "choices": [
            "a. $97.00",
            "b. $999.99",
            "c. $1,000.80",
            "d. $1,250.50"
        ],
        "answer": "c. The transfer tax due is $1,000.80:  \n$250,000 \u00f7 $300 = 833.33, rounded up to 834 \n834 \u00d7 $1.20 = $1,000."
    },
    {
        "question": "5. In front of witnesses, P says to Q, \u201cI never made a will, but I want you to have my property \nwhen I die.\u201d If Q becomes the owner of the property on P\u2019s death, it is because the state \nrecognizes what kind of will?",
        "choices": [
            "a. Holographic",
            "b. Testamentary",
            "c. Nuncupative",
            "d. Probated"
        ],
        "answer": "c. A holographic will is completely handwritten. A testamentary trust is established by will after \nthe owner\u2019s death. Probate is the process of determining the validity of the will and \ndistributing the assets of the estate."
    },
    {
        "question": "6. In one state, the transfer tax is $0.80 per $500 or fraction thereof. There is no tax charged on \nthe first $500 of the price. What tax must the seller pay if the property sells for $329,650?",
        "choices": [
            "a. $525.60",
            "b. $526.40",
            "c. $527.20",
            "d. $528.00"
        ],
        "answer": "c. The seller must pay $527.20:  \n$329,650 \u2013 the first $500 = $329,150 \n$329,150 \u00f7 $500 = 658.3, rounded up to 659 \n659 \u00d7 $0.80 = $527."
    },
    {
        "question": "7. A modification to a will is called",
        "choices": [
            "a. an addendum.",
            "b. an amendment.",
            "c. a probate.",
            "c.",
            "d. a codicil."
        ],
        "answer": "d. Any modification to a previously executed will is contained in a separate document called a \ncodicil. Additional agreements attached to an agreement of sale are addenda. An \namendment is a change to the existing content of a contract. Probate is the process of \ndetermining the validity of a will."
    },
    {
        "question": "8. The first goal of a probate proceeding when there is a will is",
        "choices": [
            "a. to ensure that the heirs do not fight among themselves.",
            "b. to confirm that the will is valid.",
            "c. to determine the exact assets of the deceased person.",
            "d. to identify how the estate will be disbursed."
        ],
        "answer": "b. Preventing fights among heirs is not the reason for probate.  Before anything else is \ndetermined, the court must confirm that the will is valid."
    },
    {
        "question": "9. When a corporation transfers ownership of real property, the deed to the property must be \nsigned by",
        "choices": [
            "a. an authorized officer.",
            "b. a shareholder.",
            "c. a broker.",
            "d. a grantee."
        ],
        "answer": "a. Proper authority for the sale must be given by bylaws or by a resolution passed by the board \nof directors. Shareholders are not necessarily officers, nor are brokers. A grantee does not \nsign a deed."
    },
    {
        "question": "0. The granting clause in a special warranty deed generally contains the words",
        "choices": [
            "a. \u201cgrantor conveys and warrants.\u201d",
            "b. \u201cgrantor grants, bargains, and sells.\u201d",
            "c. \u201cgrantor remises, releases, and quitclaims.\u201d",
            "d. \u201cgrantor remises, releases, alienates, and conveys.\u201d"
        ],
        "answer": "d. The granting clause in a special warranty deed generally contains the words grantor remises, \nreleases, alienates, and conveys."
    },
    {
        "question": "1. A general power of attorney",
        "choices": [
            "a. is illegal in most states.",
            "b. requires delivery and acceptance by the grantee.",
            "c. provides general legal authority for intestate succession.",
            "d. provides authority to carry out all business dealings of the person giving it."
        ],
        "answer": "d. A general power of attorney provides authority to carry out all business dealings of the \nperson giving it. A special power of attorney permits the execution of only certain acts.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "2. What limits are set by the covenants in a general warranty deed?",
        "choices": [
            "a. No limits are set.",
            "b. The covenants are limited to matters that occurred during the time the grantor owned the",
            "c. The covenants are limited to the matters that occurred within the last 10 years.",
            "d. The covenants are limited to the matters that occurred before the grantor owned the"
        ],
        "answer": "a. No limits are set by the covenants in a general warranty deed. The grantor defends the title \nagainst defects created by the grantor and all those who previously held title"
    },
    {
        "question": "1. Acceptable evidence of an owner\u2019s title includes",
        "choices": [
            "a. a recorded deed.",
            "b. an abstract of title and attorney\u2019s opinion.",
            "c. a homeowner\u2019s insurance policy.",
            "d. a deed."
        ],
        "answer": "b. A deed, even if recorded, is nothing more than that.  A thorough examination of a property\u2019s \ntitle history, a title insurance policy backed by such an examination, and an official title \ndocument (Torrens certificate) can all serve as acceptable evidence of title."
    },
    {
        "question": "2. To serve as public notice, a deed is recorded in the",
        "choices": [
            "a. city where the owner lives.",
            "b. county or, in some states, the town where the property is located.",
            "c. state capital.",
            "d. largest city in the state."
        ],
        "answer": "b. Because land is immobile, it makes sense to record all information about title to real property \nin the county where it is located. Some owners frequently relocate, and they would be hard to \nfind."
    },
    {
        "question": "3. Five years ago, a lien was recorded against a parcel of property by a construction company. \nThe property is in county A, but the lien was recorded in county B. Now, a former partner of \nthe construction company, who knew that a lien had been filed, is trying to buy the property. A \ntitle search in county A disclosed no liens against the property. Which of these is TRUE?",
        "choices": [
            "a. The former partner has constructive notice of the lien but not actual notice, because of the",
            "b. The former partner has actual notice of the lien but not constructive notice, because of the",
            "c. The former partner has both actual and constructive notice of the lien.",
            "d. The former partner has no notice of the lien."
        ],
        "answer": "b. The former partner is aware that a lien was filed, which is actual notice. Constructive notice is \nnot given because the lien was not filed in the county where the property is located, which is \nwhere it would be expected to be filed.   \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "4. Shortly after closing on a real estate purchase, the buyer discovered that there were serious \nflaws in the title that made it unlikely that the property could be resold in the future. What can \nthe buyer do now?",
        "choices": [
            "a. Because the title was flawed, the buyer can legally void the sale, and the seller must return",
            "b. The buyer has no recourse.",
            "c. Because the seller conveyed unmarketable title, the buyer is entitled to a new title report.",
            "d. Because the buyer has accepted the deed, the only recourse is to sue the seller under any",
            "d."
        ],
        "answer": "d. The buyer and the buyer\u2019s representatives should look at the evidence of ownership before \nclosing. There is more leverage to get problems corrected before closing than after closing."
    },
    {
        "question": "5. The reason that deeds and liens and other claims are recorded is to give",
        "choices": [
            "a. constructive notice.",
            "b. actual notice.",
            "c. direct notice.",
            "d. nominal notice."
        ],
        "answer": "a. The recorder\u2019s office is a central place to deposit and discover information."
    },
    {
        "question": "6.  A history of all recorded liens and encumbrances is revealed in the",
        "choices": [
            "a. title insurance policy.",
            "b. unrecorded documents.",
            "c. chain of title.",
            "d. abstract."
        ],
        "answer": "d. The title insurance policy lists coverage and exceptions to the policy. Unrecorded documents \nhave not been examined. The chain of title traces ownership. The abstract is the most complete \ndocumentation of recorded liens and encumbrances."
    },
    {
        "question": "7.   The person who prepares a certificate of title is the",
        "choices": [
            "a. broker.",
            "b. abstractor.",
            "c. buyer.",
            "d. seller."
        ],
        "answer": "b. The abstractor searches all public records and then summarizes the various events that \naffected the title throughout its history."
    },
    {
        "question": "8. Which of these would be covered in a standard title insurance policy?",
        "choices": [
            "a. Defects discoverable by physical inspection",
            "b. Unrecorded liens",
            "c. Forged documents",
            "c.",
            "d. Easements and restrictive covenants"
        ],
        "answer": "c. Title insurance does not protect against claims of parties in possession because the grantee \nshould have visited the property; nor does it cover unrecorded liens. Easements and \nrestrictive covenants are found in the deed and should be known to the grantee."
    },
    {
        "question": "9. A title insurance policy that protects the interests of a mortgagee is called",
        "choices": [
            "a. a leasehold policy.",
            "b. a lender\u2019s policy.",
            "c. a certificate of sale policy.",
            "d. an ALTA policy."
        ],
        "answer": "b. The mortgagee is the lender. The mortgagee\u2019s policy is transferable."
    },
    {
        "question": "0. In the states in which it has been adopted, the Marketable Title Act",
        "choices": [
            "a. establishes standardized forms for abstracts of title.",
            "b. disqualifies use of an attorney\u2019s opinion of title as acceptable evidence of title.",
            "c. limits the time beyond which title records must be searched.",
            "d. provides a certification system for qualifying title insurance companies."
        ],
        "answer": "c. The law extinguishes certain interests and cures certain defects arising before the earliest \ndate that the title must be examined"
    },
    {
        "question": "1. Why have real estate license laws been put into effect?",
        "choices": [
            "a. To protect licensees from lawsuits",
            "b. To protect the public and establish a standard of competence",
            "c. To prevent licensees from engaging in profit-making activities",
            "d. To establish maximum levels of competency and a moral marketplace"
        ],
        "answer": "b. Real estate license laws protect the public by ensuring a standard of competence in the real \nestate industry."
    },
    {
        "question": "2. In real estate, a sales associate is always",
        "choices": [
            "a. an independent contractor.",
            "b. an employee of a licensed broker.",
            "c. a licensee who performs real estate activities on behalf of a broker.",
            "d. a combination office manager, marketer, and organizer with a fundamental understanding",
            "d."
        ],
        "answer": "c. While the sales associate may be treated as an independent contractor for income tax \npurposes, the sales associate must work for a broker, who is responsible for the associate\u2019s \nconduct."
    },
    {
        "question": "3. Requirements for independent contractor status used by the Internal Revenue Service include",
        "choices": [
            "a. a pending real estate license.",
            "b. specific hours stated in a written agreement.",
            "c. an understanding that the individual will not be treated as an employee for tax purposes.",
            "d. that all of the individual\u2019s income will be based on sales production rather than hours",
            "d."
        ],
        "answer": "c.  The reason it would not be b is the real estate broker may require an employee to follow \nrules, such as working a certain number of hours, but the broker may not do so if treating the \naffiliated sales associate as an independent contractor."
    },
    {
        "question": "4. A broker does not permit his sales associates to charge less than an 8% commission in any \ntransaction. After reading a newspaper article about this broker\u2019s policy, the broker at another \nfirm decides to adopt a 7% minimum commission rate to undercut the competition. Based on \nthese facts, which of these statements is TRUE?",
        "choices": [
            "a. The first broker\u2019s policy is price-fixing and violates the antitrust law.",
            "b. Although the first broker\u2019s policy was legal, the second broker\u2019s adoption of a lower rate",
            "c. Both brokers engaged in illegal price-fixing.",
            "d. Neither broker has committed an antitrust violation."
        ],
        "answer": "d. Brokers can independently determine commission rates or fees for their own firms. \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "5. A real estate broker had a listing agreement with a seller that specified a 6% commission. The \nbroker showed the home to a prospective buyer. The next day, the buyer called the seller \ndirectly and offered to buy the house for 5% less than the asking price. The seller agreed to the \nprice and informed the broker in writing that no further brokerage services would be \nrequired. The sale went to closing six weeks later. Based on these facts, which of these \nstatements is TRUE?",
        "choices": [
            "d. The sale went to closing six weeks later. Based on these facts, which of these",
            "a. While the broker was the procuring cause of the sale, the seller properly canceled the",
            "b. The broker is entitled to a partial commission, and the buyer is obligated to pay it.",
            "c. Under the facts as stated, the broker is not the procuring cause of this sale but is still",
            "d. The broker was the procuring cause of the sale and is entitled to the full 6% commission."
        ],
        "answer": "d. Because the broker introduced a ready, willing, and able buyer to the seller prior to the \nseller\u2019s cancellation of the listing agreement, the broker is entitled to the commission."
    },
    {
        "question": "5. When is the broker\u2019s commission payable if this is a usual transaction?",
        "choices": [
            "a. March 8",
            "b. May 1",
            "c. May 7",
            "d. May 15"
        ],
        "answer": "b. Although the commission was earned when the buyer was notified of the seller\u2019s acceptance \n(March 8), the commission is typically paid at the time the deed is delivered."
    },
    {
        "question": "7. All of these are violations of federal antitrust laws EXCEPT",
        "choices": [
            "a. group boycott.",
            "b. allocation of customers.",
            "c. commission split.",
            "d. tie-in agreement."
        ],
        "answer": "c. Brokers may legally share and split commissions. Price fixing, allocation of customers, and a \ngroup boycott are illegal under the antitrust laws."
    },
    {
        "question": "8. All of these are ways for a broker to charge for services EXCEPT",
        "choices": [
            "a. standard community rate.",
            "b. flat fee.",
            "c. hourly rate.",
            "d. commission based on a percentage of the selling price.",
            "c."
        ],
        "answer": "a. Under antitrust laws, brokers may not collaborate and agree to charge the same rate to \ncustomers. Brokers may charge for services using a flat fee, an hourly rate, or a commission \nbased on a percentage of the selling price."
    },
    {
        "question": "9. What is the main value of a multiple listing service (MLS) for sellers?",
        "choices": [
            "a. Real estate professionals do not have to work as hard to secure property listings.",
            "b. It simplifies closing procedures.",
            "c. It reduces cooperation among brokers.",
            "d. It exposes the property to a greater number of prospective buyers."
        ],
        "answer": "d. The MLS exposes the property to many different real estate professionals, encouraging \ncooperation among brokers and expediting sales."
    },
    {
        "question": "0. After license laws are enacted by the legislature, who is responsible for adopting \nadministrative regulations?",
        "choices": [
            "a. A subcommittee that reports to the legislature",
            "b. A local association of REALTORS\u00ae",
            "c. Licensing authority (division, commission, etc.)",
            "d. Brokers and salespeople appointed by the governor"
        ],
        "answer": "c. Administrative regulations are written and adopted by the licensing authorities in each state. \nThey have the same force and effect as the law, but they are easier to create and change \nbecause they do not have to go through the legislative process."
    },
    {
        "question": "1. When communicating with clients or consumers via email, it is best to",
        "choices": [
            "a. send solicitations to all local residents, even when not personally known.",
            "b. be as vague as possible about the real reason for the message.",
            "c. avoid sending large attachments.",
            "d. respond to emails within one week."
        ],
        "answer": "d. Examples of email etiquette include using the subject line in a useful and helpful manner; \navoiding spelling errors; responding promptly to all email messages; and being specific, to \nthe point, and brief. Do not send unsolicited emails."
    },
    {
        "question": "2. Although state laws vary regarding internet advertising, which of these is a typical element of \nstate policy or law?",
        "choices": [
            "a. Email sent by a real estate licensee needs to include the licensee\u2019s name, phone number,",
            "b. Ads must contain true, current information and avoid misleading the potential client or",
            "c. On a website containing their ads, real estate licensees only need to identify themselves as",
            "d. It is acceptable for only the sales associate\u2019s name (without the broker\u2019s name) to be",
            "d.",
            "c."
        ],
        "answer": "b. A phone number and license number are not usually required in an email. Status as a broker \nor sales associate should be disclosed on every page of a website with ads. Both the sales \nassociate\u2019s name and the broker\u2019s name should be shown in the ads."
    },
    {
        "question": "3. The broker may still be entitled to a commission in which of these situations where a pending \nproperty sale did not close?",
        "choices": [
            "a. The buyer wanted to add the kitchen appliances to the sale, but the seller refused.",
            "b. The buyer decided not to buy the property.",
            "c. The seller decided not to sell.",
            "d. Financing fell through for the buyer."
        ],
        "answer": "c. If the sale is not completed due to the seller\u2019s default (deciding not to sell), then the broker is \ngenerally due a commission. Courts may prevent a real estate broker from receiving a \ncommission if the broker knew that the buyer was unable to perform."
    },
    {
        "question": "4. An arrangement to sell one product only if the buyer purchases another product as well is \ncalled",
        "choices": [
            "a. a tie-in agreement.",
            "b. a fee-for-services.",
            "c. a buydown provision.",
            "d. an allocation of customers."
        ],
        "answer": "a. A tie-in arrangement is an agreement to sell one product only if the buyer purchases another \nproduct; the sale of the desired product is tied to the purchase of a second, less-desirable \nproduct. Fee-for-services refers to splitting apart the collection of services that a broker \noffers. A buydown provision is a financing option. Allocation of customers refers to dividing a \nmarket and refraining from competing."
    },
    {
        "question": "5. The primary purpose of the Uniform Electronic Transactions Act (UETA) is to",
        "choices": [
            "a. facilitate the use of social media.",
            "b. protect consumers against unwanted email.",
            "c. remove barriers in electronic commerce that would otherwise prevent enforceability of",
            "d. allow brokers to close more deals."
        ],
        "answer": "c. The primary purpose of the Uniform Electronic Transactions Act (UETA) is to remove barriers \nin electronic commerce that would otherwise prevent enforceability of contracts. UETA sets \nforth basic rules for entering an enforceable contract using electronic means."
    },
    {
        "question": "6. A consumer placed their phone number on the National Do Not Call Registry, but a real estate \nprofessional may call the consumer how many months after the consumer\u2019s last purchase?",
        "choices": [
            "a. 3",
            "b. 6",
            "c. 12",
            "d. 18",
            "c."
        ],
        "answer": "d. A real estate professional may call consumers with whom there is an established business \nrelationship for up to 18 months after the consumer\u2019s last purchase, delivery, or payment, \neven if the consumer is listed on the National Do Not Call Registry. If the consumer \nspecifically asks the company not to call, then the company must stop calling."
    },
    {
        "question": "7. The name for the current policy of the National Association of REALTORS\u00ae that allows all \nmultiple listing service (MLS) members equal rights to display MLS data is the",
        "choices": [
            "a. virtual office website.",
            "b. Internet Listing Display Policy.",
            "c. Internet Data Exchange.",
            "d. Open Listing Data Service."
        ],
        "answer": "c. NAR has adopted the Internet Data Exchange (IDX) policy. The policy allows all MLS members \nto have equal rights to display MLS data, while also respecting the rights of the property \nowners and the brokers who represent them to market the property as they wish."
    },
    {
        "question": "8.  An important purpose of the E-Sign Act is to",
        "choices": [
            "a. give contracts created electronically the same legal standing as those executed on paper.",
            "b. require stringent security measures for email communication.",
            "c. prevent notarization of electronically transmitted agreements.",
            "d. require all parties to use electronic contracting if the seller prefers it."
        ],
        "answer": "a. The E-Sign Act diminishes legal barriers in electronic contracting, but it does not specify \nrequired security measures. Notarization is allowed. Parties are not required to use \nelectronic contracting."
    },
    {
        "question": "9. The compensation plan in which a sales associate\u2019s commission split increases depending on \nwhether the associate achieves higher production goals is the",
        "choices": [
            "a. procuring cause commission.",
            "b. cooperating broker commission.",
            "c. graduated commission split.",
            "d. 100% commission plan."
        ],
        "answer": "c. A graduated commission split is based on a sales associate\u2019s achieving specified production \ngoals. A 100% commission plan provides for a sales associate to pay a monthly service \ncharge to the broker so that the associate can keep 100% of the commissions earned."
    },
    {
        "question": "0. What is the practice called when a consumer selects specific services to use and only pays the \nreal estate professional for those services?",
        "choices": [
            "a. Unbundling services",
            "b. Tie-in agreement",
            "c. Discounted services",
            "d. Allocation of markets",
            "c."
        ],
        "answer": "a. Unbundling services means offering services as the consumer desires them. With discounted \nservices, the consumer receives the full package of services but pays a discounted price. \nAllocation of markets involves an agreement between brokers to divide their markets and \nstop competition."
    },
    {
        "question": "0. The listing broker offered a 40/60 listing/selling split to any cooperating broker \nwho sold the property. How much did the seller have to pay in commission fees?",
        "choices": [
            "a. $9,100",
            "b. $11,375",
            "c. $13,650",
            "d. $16,250"
        ],
        "answer": "d. What the brokers agree to regarding splitting the commission is not relevant to the total cost \nto the seller. The seller paid $22,750 in commission fees: $325,000 \u00d7 5% = $16,"
    },
    {
        "question": "2. The sales associate\u2019s agreement with the broker was a 40/60 split with the broker keeping \n40% of the commission. The seller was charged 5.5%. How much did the sales associate receive \nif the associate listed and sold a house for $279,500?",
        "choices": [
            "a. $6,149.00",
            "b. $7,686.25",
            "c. $9,223.50",
            "d. $15,372.50"
        ],
        "answer": "c. The sales associate received $9,223.50: $279,500 \u00d7 5.5% \u00d7 60% = $9,223."
    },
    {
        "question": "0. \nWhat was the total cost to the seller?",
        "choices": [
            "a. $16,000",
            "b. $18,000",
            "c. $19,000",
            "d. $20,000"
        ],
        "answer": "c. The seller\u2019s total cost is $19,000: $400,000 \u00d7 4% + $3,000 = $19,"
    },
    {
        "question": "4. Sales associates in a real estate brokerage are compensated based on this formula: 35% of the \ncommission earned on any sale, less a $200 per-transaction desk rental. Sales associates are \nresponsible for paying 75% of all marketing and sales expenses for any property they list, and \na $75 per-transaction fee to cover the monthly expenses of advertising and marketing the \nbrokerage\u2019s services. If a sales associate sold a house for $500,000, with a 6% commission, \nhow much would the associate be paid if the sale incurred $800 in marketing and advertising \ncosts?",
        "choices": [
            "a. $9,625",
            "b. $9,700",
            "c.",
            "c. $10,225",
            "d. $10,500"
        ],
        "answer": "a. The sales associate would be paid $9,625:  \n$500,000 \u00d7 6% = $30,000 \n$30,000 \u00d7 35% = $10,500 \n$800 x 75% = $600 \n$10,500 \u2013 $200 \u2013 $75 \u2013 $600 = $9,"
    },
    {
        "question": "5.  At a realty agency, sales associates pay a monthly desk rent of 15% of their monthly income. In \nMay, one sales associate receives 5% on a $560,000 sale; 6% on a $348,000 sale; and 6.75% \non an $89,500 sale. The only other sales associate at the agency who received a commission in \nMay got 6% on a $410,000 sale. How much did the agency receive in May?",
        "choices": [
            "a. $7,095.97",
            "b. $11,928.19",
            "c. $12,251.53",
            "d. $14,945.00"
        ],
        "answer": "b. In May, the realty agency received $11,928.19: \n$560,000 \u00d7 5% = $28,000 \n$348,000 \u00d7 6% = $20,880 \n$89,500 \u00d7 6.75% = $6,041.25 \n$410,000 \u00d7 6% = $24,600 \n$28,000 + $20,880 + $6,041.25 + $24,600 = $79,521.25 \n$79,521.25 \u00d7 15% = $11,928.19"
    },
    {
        "question": "1. An individual who is authorized and consents to represent the interests of another person is",
        "choices": [
            "a. a customer.",
            "b. a principal.",
            "c. an agent.",
            "d. a facilitator."
        ],
        "answer": "c. The agent is hired by the principal. The customer is a third party. A facilitator is someone \nworking on a non-agency basis."
    },
    {
        "question": "2. A broker represents a seller but is currently working with a buyer to find a home. Assuming \nthat no statute has replaced the traditional common law of agency, which of these correctly \nidentifies the parties in this relationship?",
        "choices": [
            "a. The broker is the buyer\u2019s agent; the seller is the broker\u2019s client.",
            "b. The buyer is the broker\u2019s client; the seller is the broker\u2019s principal.",
            "c. The seller is the broker\u2019s customer; the buyer is the broker\u2019s client.",
            "d. The broker is the seller\u2019s agent; the buyer is the broker\u2019s customer."
        ],
        "answer": "d. Watch the terminology: The broker is working for (representing) the seller and is working \nwith the buyer (a customer) to find a home."
    },
    {
        "question": "3. The agent\u2019s obligation to use skill and expertise on behalf of the principal arises under which \nof these common-law duties?",
        "choices": [
            "a. Care",
            "b. Obedience",
            "c. Loyalty",
            "d. Disclosure"
        ],
        "answer": "a. Care requires skill and expertise; obedience requires following lawful instructions; loyalty is \nputting the client\u2019s interests above the agent\u2019s; and disclosure refers to material defects of the \nproperty."
    },
    {
        "question": "4.  An agent representing the buyer has a duty to disclose to the seller",
        "choices": [
            "a. offers that are ridiculously low.",
            "b. the buyer\u2019s financial ability to offer a higher price.",
            "c. the agent\u2019s advertising budget.",
            "d. the buyer\u2019s intention to resell the property for a profit."
        ],
        "answer": "a. The buyer\u2019s (special) agent must present all offers made by the buyer but not disclose to the \nseller any facts about the buyer that would be detrimental to the buyer\u2019s bargaining position, \nincluding the fact that the buyer intends to resell the property. There is no requirement that \nthe agent disclose an advertising budget.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "0. On May 5, the house is struck by lightning and burns to the ground. \nThe seller, overwhelmed by grief, dies. Based on these facts, which of these is TRUE?",
        "choices": [
            "d.",
            "a. The agency agreement was terminated by the fire, although the seller\u2019s death also would",
            "b. The agency agreement was not terminated until the seller\u2019s death.",
            "c. If the house had not been destroyed by the fire, the seller\u2019s death would not have",
            "d. Only the mutual agreement of the parties can terminate a valid agency agreement before"
        ],
        "answer": "a. An agency agreement may be terminated by either destruction of the property or death of \neither party. In this case, destruction of the property occurred first."
    },
    {
        "question": "6. A person who is designated by the principal in a broad range of matters related to a particular \ntransaction or activity is a",
        "choices": [
            "a. facilitator.",
            "b. special agent.",
            "c. designated agent.",
            "d. general agent."
        ],
        "answer": "d. A special agent is given limited authority for a limited time. A general agent is given broad \nauthority in a specific circumstance. A property manager is typically a general agent for the \nowner as are most real estate sales associates for the employing broker."
    },
    {
        "question": "0. A few days later, the broker met a prospective buyer who was interested \nin buying a home in the $480,000 to $510,000 price range. The broker agreed to help the \nbuyer locate such a property and to represent the buyer in negotiating a favorable purchase \nprice. Based on these facts, which of these statements is TRUE?",
        "choices": [
            "a. The broker\u2019s relationships and the buyer and seller are separate issues, and no dual",
            "b. The seller is the broker\u2019s client, and the buyer is the broker\u2019s customer; there is no dual",
            "c. The broker has created a potential undisclosed dual agency problem and should disclose",
            "d. The broker has created a dual agency problem and should immediately terminate the"
        ],
        "answer": "c. The broker is representing the seller and now is at least implying representation of the buyer \nin locating a property; hence, there are two clients. If the broker intends to show the seller\u2019s \nproperty, the broker must disclose the relationship with both clients, gain their agreement to \na dual agency, and only then proceed.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "8. A broker is showing a house to a prospective buyer. The broker points out the rustic charm of \nthe sagging front porch and refers to a weed-choked backyard as a delightful garden. The \nbroker is engaging in",
        "choices": [
            "a. intentional misrepresentation.",
            "b. negligent misrepresentations.",
            "c. puffing.",
            "d. fraud."
        ],
        "answer": "c. Because any prudent buyer can see the sagging porch and weed-choked garden, these are \npuffing statements. Agents must take care that they do not make statements in such a way as to \nharm the buyer or take advantage of the buyer\u2019s ignorance, which would constitute fraud."
    },
    {
        "question": "9. A house built over a ditch covered with decaying timber or a house with ceilings that are \nimproperly attached to the support beams, neither condition being visible, are examples of",
        "choices": [
            "a. stigmatized properties.",
            "b. environmental hazards.",
            "c. latent defects.",
            "d. conditions that need not be disclosed."
        ],
        "answer": "c. A latent defect is a hidden structural defect that would not be discovered by ordinary \ninspection."
    },
    {
        "question": "0. The seller\u2019s agent has certain duties to the client-principal. Duties of the principal include",
        "choices": [
            "a. cooperating with the agent but being able to limit the availability of the property for",
            "b. compensating the agent but only if an offer at the full listing price is received.",
            "c. suggesting marketing strategies to the agent.",
            "d. dealing with the agent in good faith."
        ],
        "answer": "d. Marketing is the agent\u2019s responsibility. The principal who hired the agent is responsible for \ncooperating with the agent, disclosing material defects, and compensating the agent."
    },
    {
        "question": "1. Every state has a mandatory agency disclosure law that stipulates",
        "choices": [
            "a. how an implied agency may occur.",
            "b. when, how, and to whom agents must reveal for whom they provide client-based services.",
            "c. restrictions on disclosure of confidential information.",
            "d. how a customer may be indistinguishable from a client."
        ],
        "answer": "b. Mandatory agency disclosure laws now exist in every state. In addition, state laws may \nrequire a particular type of written form be used and may require that all agency \nalternatives be explained.   \n \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "2. In a real estate sales transaction, who is the agent\u2019s principal?",
        "choices": [
            "a. Seller",
            "b. Buyer",
            "c. Person who pays the commission",
            "d. Whoever hired the agent"
        ],
        "answer": "d. The most complete answer is whoever hired the agent. That could be either the buyer or the \nseller, but payment of compensation is not the determining factor."
    },
    {
        "question": "3. A broker was hired to represent the seller, to market the property, and to solicit offers to \npurchase. The broker is called a",
        "choices": [
            "a. general agent.",
            "b. special agent.",
            "c. facilitator.",
            "d. nonagent."
        ],
        "answer": "b. A special agent is one who is hired for a limited time and given limited authority. A broker \ntaking a listing is generally a special agent."
    },
    {
        "question": "4. A house was the scene of a drug arrest and a violent murder last year. When it was listed on \nthe market, many people considered it to be a",
        "choices": [
            "a. latent property.",
            "b. stigmatized property.",
            "c. damaged property.",
            "d. property with a material defect."
        ],
        "answer": "b. Presuming that the property is physically intact, the drug arrest and violent murder may \ncreate a psychological reaction to the property, rendering it stigmatized."
    },
    {
        "question": "5. An agency relationship can be terminated by",
        "choices": [
            "a. the divorce of the party who signed the listing.",
            "b. destruction of the property.",
            "c. an offer made on the property.",
            "d. issuance of a new standard listing agreement."
        ],
        "answer": "b. An offer on the property does not terminate the agency relationship. Neither does the divorce \nof either party, or issuance of a new standard listing agreement."
    },
    {
        "question": "6. What is a seller\u2019s agent required to disclose to prospective buyers about material defects in \nthe property?",
        "choices": [
            "a. Only information about material defects the seller has provided the agent",
            "b. Only information about material defects that the agent has personally observed",
            "c. Both information the seller has provided the agent, and material defects that the agent has",
            "c.",
            "d. All information about material defects that the agent knows or should know"
        ],
        "answer": "d. Agents are responsible for disclosing information they are told or that they discover on their \nown, plus information they should have known."
    },
    {
        "question": "7. Which of these statements could be negligent misrepresentation?",
        "choices": [
            "a. \u201cThe uneven floors just mean that the building dates to colonial times.\u201d",
            "b. \u201cI think these low doorways are a charming part of the Cape Cod style.\u201d",
            "c. \u201cThe simple design is uncluttered and can give you many possibilities for decor.\u201d",
            "d. \u201cThe size of the bedrooms makes them wonderfully cozy and perfect for your children.\u201d"
        ],
        "answer": "a. Presenting an opinion is acceptable so long as it is not presented as a fact. Uneven floors could \nmean a latent defect, such as rotten supports."
    },
    {
        "question": "8. The seller\u2019s agent is aware that a new landfill has been approved for development on a nearby \nproperty but does not disclose this information to a buyer. This could be an example of",
        "choices": [
            "a. negligent misrepresentation.",
            "b. a latent defect.",
            "c. fraudulent misrepresentation.",
            "d. unnecessary disclosure."
        ],
        "answer": "c. This is an example of misleading a party by withholding a material fact. It is deliberate \nmisrepresentation by silence. The proposed landfill near the property is not a latent defect, \nbecause it does not threaten structural soundness or personal safety."
    },
    {
        "question": "9. A key element of an agent\u2019s fiduciary responsibility of loyalty is to",
        "choices": [
            "a. report the status of all funds received from or on behalf of the principal.",
            "b. avoid conflicts of interest.",
            "c. obey the principal\u2019s instructions in accordance with the contract.",
            "d. reveal relevant information or material facts."
        ],
        "answer": "b. Reporting the status of funds is an accounting responsibility. Obeying the principal\u2019s \ninstructions relates to obedience. Revealing relevant information relates to the responsibility \nof disclosure."
    },
    {
        "question": "0. When a broker places trust funds of others into the company\u2019s operating account and then \nwithdraws funds for the firm\u2019s use, what illegal practice has taken place?",
        "choices": [
            "a. Escrowing",
            "b. DBA accounting",
            "c. Conversion",
            "d. Asset-liability management"
        ],
        "answer": "c. Both commingling the funds and the practice of conversion are illegal."
    },
    {
        "question": "1. In a buyer representation agreement, the broker acts as the agent of the buyer and must \nprotect the buyer\u2019s interests",
        "choices": [
            "a. at all points in the transaction.",
            "b. only during property showings.",
            "c. until the representation agreement is signed.",
            "d. only when negotiating on behalf of the buyer."
        ],
        "answer": "a. In a buyer representation agreement, the broker acts as the agent of the buyer and must \nprotect the buyer\u2019s interests at all points in the transaction."
    },
    {
        "question": "2. A homeowner listed the home for sale with a broker. When the owner sold the home without \nthe broker\u2019s assistance, no one was owed a commission. Based on these facts, what type of \nlisting did the broker and the owner most likely sign?",
        "choices": [
            "a. Exclusive right-to-sell listing",
            "b. Net listing",
            "c. Multiple listing",
            "d. Open listing"
        ],
        "answer": "d. Under an open listing, the seller is permitted to sell the house without the broker\u2019s assistance \nand is not obligated to pay a commission."
    },
    {
        "question": "3. Information in a listing agreement generally includes",
        "choices": [
            "a. block size."
        ],
        "answer": "b. termination clause."
    },
    {
        "question": "4. A broker\u2019s agreement to represent a property buyer may be terminated when",
        "choices": [
            "a. the property buyer dislikes all of the properties shown by the broker.",
            "b. the buyer becomes a seller.",
            "c. the broker and buyer mutually agree to cancel the agreement.",
            "d. there are very few properties on the market."
        ],
        "answer": "c.  A broker\u2019s agreement to represent a property buyer may be terminated for various reasons, \none of which is mutual agreement between the broker and buyer."
    },
    {
        "question": "5. A listing agreement is",
        "choices": [
            "a. a contract between the buyer and the seller.",
            "b. a contract to purchase real property.",
            "c. an employment agreement between the broker and the sales associate.",
            "c.",
            "d. an employment contract between the seller and the broker."
        ],
        "answer": "d. Although the broker can subcontract the work to sales associates, the listing agreement is an \nemployment contract between the seller and the broker."
    },
    {
        "question": "6.  Who are the parties to a listing agreement?",
        "choices": [
            "a. Buyer and seller",
            "b. Seller and broker",
            "c. Seller and sales associate",
            "d. Buyer and sales associate"
        ],
        "answer": "b. The seller and broker are parties to the listing agreement. Listings remain the property of the \nbroker even if the sales associate who represented the broker in securing the listing leaves \nthe company."
    },
    {
        "question": "7. There are five different brokerage signs in the front yard of a home for sale. Evidently, the \nseller has signed",
        "choices": [
            "a. an exclusive agency listing.",
            "b. an exclusive right-to-sell listing.",
            "c. a net listing.",
            "d. an open listing."
        ],
        "answer": "d. In an open listing, the seller retains the right to sell the property and may employ more than \none broker to perform agency duties."
    },
    {
        "question": "8. A broker just explained the value of signing an exclusive agency listing with a broker who is a \nmember of the multiple listing service. The broker is trying to overcome the misconceptions of \nthe seller who asked about",
        "choices": [
            "a. an open listing.",
            "b. an option listing.",
            "c. an exclusive right-to-sell listing.",
            "d. a net listing."
        ],
        "answer": "a. Sellers are often confused, thinking that the only way to find buyers from a number of brokers \nis to enter into an open listing. Explaining the advantages of a multiple listing service can \novercome the misconception."
    },
    {
        "question": "9. What kind of listing agreement is illegal in many states because of the potential for conflict of \ninterest between a broker\u2019s fiduciary responsibility to the seller and the broker\u2019s profit \nmotive?",
        "choices": [
            "a. Open listing",
            "b. Net listing",
            "c. Exclusive right-to-sell",
            "d. Exclusive agency listing",
            "c."
        ],
        "answer": "b. Because a broker is free to offer the property at any price greater than the net amount, a net \nlisting can create a conflict of interest between the broker\u2019s fiduciary responsibility to the \nseller and the broker\u2019s profit motive. Thus, net listings are illegal in many states and \ndiscouraged in others."
    },
    {
        "question": "0. Buyer agents typically are compensated by a",
        "choices": [
            "a. flat fee for service."
        ],
        "answer": "b. percentage of selling price"
    },
    {
        "question": "1. A listing agreement will be terminated by",
        "choices": [
            "a. performance.",
            "b. a downturn in the market.",
            "c. an offer to purchase.",
            "d. abandonment by the sales associate."
        ],
        "answer": "a. Because an offer to purchase may not be accepted, it would not terminate the listing \nagreement.  The state of the market will not terminate the agreement and neither would the \nabandonment of the listing by the sales associate. The listing still remains with the broker."
    },
    {
        "question": "2. A broker is retiring and wants to submit the firm\u2019s listings to another broker. How can the \nbroker do this?",
        "choices": [
            "a. The broker must sign over the listings to the new broker.",
            "b. The new broker has to sign an acceptance agreement.",
            "c. Each sales associate must sign over the listings to the new broker.",
            "d. Each seller must agree to a new listing with the new broker."
        ],
        "answer": "d. Because the listing agreement is a contract for the personal services of the original broker, \neach seller has the right to cancel the listing agreement and not be represented by the new \nbroker."
    },
    {
        "question": "3. In which of these types of listing agreements is the broker appointed as the seller\u2019s only agent?",
        "choices": [
            "a. Exclusive right-to-sell and exclusive agency listings",
            "b. Open listing",
            "c. Net listing",
            "d. Option listing"
        ],
        "answer": "a. Under an exclusive right-to-sell or exclusive agency listing, one broker is appointed as the \nseller\u2019s sole agent. Open and option listings do not specifically exclude other brokers from \nacting as the seller\u2019s agent.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "4. In most states, a broker\u2019s license can be suspended or revoked if the broker",
        "choices": [
            "a. breaches the terms of the listing agreement.",
            "b. cancels the listing agreement without cause.",
            "c. takes a listing that does not include a date on which the listing expires.",
            "d. does not include an automatic extension clause in the listing agreement."
        ],
        "answer": "c. If the broker breaches the listing contract or cancels it without cause, the broker may be \nliable for damages; however, it is not usually grounds for suspension or revocation of the \nlicense. Courts discourage the use of automatic extension clauses, and these clauses are even \nillegal in some states."
    },
    {
        "question": "5. A listing agreement may include",
        "choices": [
            "a. the dimensions of the block.",
            "b. the possibility of seller financing.",
            "c. the age of the seller.",
            "d. the history of the property\u2019s taxes."
        ],
        "answer": "b. Information needed for a listing agreement may include the possibility of seller financing. The \nage of the seller is not needed. The dimensions of the block are not relevant and only the most \nrecent property tax bill is included."
    },
    {
        "question": "6. An example of personal property that a seller may leave with the real estate and which, \ntherefore, must be identified on the listing agreement is",
        "choices": [
            "a. a built-in dishwasher.",
            "b. the door key.",
            "c. stacked firewood.",
            "d. a ceiling light fixture."
        ],
        "answer": "c. Firewood is not attached to the real estate and is therefore considered personal property. All \nthe other items, even the door key, are normally considered to be part of the real estate."
    },
    {
        "question": "0. What was the total amount the seller \npaid the brokerage?",
        "choices": [
            "a. $15,174",
            "b. $15,580",
            "c. $16,580",
            "d. None of these"
        ],
        "answer": "d. The seller paid the brokerage none of these: The sales price is $429,350 \u00d7 4% + $1,000 = \n$18,"
    },
    {
        "question": "0. The brokerage split with \nsalespeople is 30/70, with 30% remaining with the company. How much is the sales \nassociate\u2019s share if the sales associate both lists and sells the property?",
        "choices": [
            "a. $2,625",
            "b. $6,125",
            "c. $8,750",
            "d. None of these"
        ],
        "answer": "b. The sales associate\u2019s share is $6,125: $175,000 \u00d7 5% \u00d7 70% = $6,"
    },
    {
        "question": "0. If the two brokers agree to split the \n6.5% commission equally, what will the salesperson receive?",
        "choices": [
            "a. $5,557.50",
            "b. $6,092.00",
            "c. $7,235.25",
            "d. $7,654.00"
        ],
        "answer": "a. The sales associate receives $5,557.50: $285,000 \u00d7 6.5% \u00d7 50% \u00d7 60% = $5,557."
    },
    {
        "question": "0. The commission on the sale of a house was $16,500, which was based on a 7.5% commission \nrate. What was the final selling price of the house?",
        "choices": [
            "a. $127,000",
            "b. $145,000",
            "c. $199,000",
            "d. $220,000"
        ],
        "answer": "d. The selling price was $220,000: $16,500 \uf0b8 7.5% = $220,"
    },
    {
        "question": "1. Which of these is an example of a unilateral contract?",
        "choices": [
            "a. Lease",
            "b. Agreement of sale",
            "c. Option",
            "d. Listing agreement"
        ],
        "answer": "c. In a unilateral contract, only one party is obligated to perform. The optionor/owner of the \nproperty must sell at the agreed-upon price only if the optionee decides to buy."
    },
    {
        "question": "2. A seller accepted all the terms that the buyer offered, making only one small change in the \namount of the earnest money. At that point, there is",
        "choices": [
            "a. an offer.",
            "b. a counteroffer.",
            "c. an acceptance.",
            "d. an executed contract."
        ],
        "answer": "b. Proposing any deviation from the terms of the offer is considered a rejection of the original \noffer and is called a counteroffer."
    },
    {
        "question": "3. After making an offer but prior to receiving any response from the seller, a buyer decided \nagainst buying a particular lot. The buyer called the agent and said, \u201cWithdraw my offer.\u201d The \nbuyer\u2019s action is called a",
        "choices": [
            "a. counteroffer.",
            "b. rejection.",
            "c. breach of contract.",
            "d. revocation."
        ],
        "answer": "d. The buyer may revoke the offer any time before being notified that the seller has accepted the \noffer."
    },
    {
        "question": "4. A real estate broker announces to the firm\u2019s sales associates that the top-selling sales \nassociate each quarter will receive a $1,000 bonus. This constitutes an",
        "choices": [
            "a. implied bilateral contract.",
            "b. express unilateral contract.",
            "c. implied unilateral contract.",
            "d. express bilateral contract."
        ],
        "answer": "b. The offer of a bonus to the top-selling sales associate each quarter is an express contract \nbecause the broker clearly stated the offer to the sales associates. It is a unilateral contract \nbecause the broker is obligated to keep the promise, but the sales associates are not \nobligated to perform.   \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "5. A buyer makes an offer on a house, and the seller accepts in writing. What is the current status \nof this relationship?",
        "choices": [
            "a. The buyer and seller do not have a valid contract until the seller delivers title at closing.",
            "b. The buyer and seller have an express, bilateral executed contract.",
            "c. The buyer and seller have an express, bilateral executory contract.",
            "d. The buyer and seller have an implied, unilateral executory contract."
        ],
        "answer": "c. Because the seller has promised to sell and the buyer has promised to buy, it is clearly a \nbilateral contract. It is express because they expressed their intentions in writing. The \ncontract is executory because the sale has not yet closed."
    },
    {
        "question": "6. A buyer offers the full $215,000 asking price for a house. The offer contains this clause: \n\u201cPossession of the premises on August 1.\u201d The seller is delighted to accept the offer and signs \nthe contract. First, however, the seller crosses out \u201cAugust 1\u201d and replaces it with \u201cAugust 3,\u201d \nbecause of a business trip scheduled for the first of the month. The seller immediately books a \nmoving company. What is the status of this agreement?",
        "choices": [
            "a. Because the seller changed the date of possession rather than the amount of the offer, the",
            "b. The seller has accepted the buyer\u2019s offer. Because the reason for the change was out of the",
            "c. The seller has rejected the buyer\u2019s offer and made a counteroffer, which the buyer is free",
            "d. While the seller technically rejected the buyer\u2019s offer, the seller\u2019s behavior in scheduling"
        ],
        "answer": "c. Even changing the smallest of terms, for whatever reason, constitutes a rejection and \ncounteroffer that the other party is not under obligation to accept."
    },
    {
        "question": "7. A real estate contract that is entered into by a person who is under the age of contractual \ncapacity generally is",
        "choices": [
            "a. unenforceable.",
            "b. void.",
            "c. voidable.",
            "d. valid."
        ],
        "answer": "c.  A contract entered into with a minor is voidable by the minor"
    },
    {
        "question": "8. A buyer wants to take over the seller\u2019s mortgage. The lender releases the seller from the \nobligation, substituting the buyer as the party liable for the debt. This arrangement is called",
        "choices": [
            "a. an assignment.",
            "b. a novation.",
            "c. a conversion.",
            "d. a consideration.",
            "c."
        ],
        "answer": "a. A transfer of the responsibilities under a contract that releases the original party from \nfurther obligation is called an assignment."
    },
    {
        "question": "9. A buyer and a seller enter into a sales contract for the sale of a home. The seller backs out of \nthe deal at the last minute, and the buyer suffers a financial loss of $1,500 as a result and must \nrent a home in which to live. Unless provided otherwise by the contract",
        "choices": [
            "a. the buyer may sue the seller for specific performance, forcing the sale of the home to the",
            "b. the buyer may sue the seller\u2019s agent for damages to recover the $1,500 loss.",
            "c. the seller is not liable because the buyer should not have incurred the $1,500 cost before",
            "d. the buyer may sue the buyer\u2019s agent for the $1,500 loss and rent paid."
        ],
        "answer": "a. In this case, the seller breached the contract without legal excuse. The buyer is likely to be \nsuccessful in suing the seller for specific performance, for the $1,500 loss, and for the cost of rent \nas a hardship; however, many contracts limit the remedies available to the parties."
    },
    {
        "question": "0. On April 15, the property is struck by lightning and destroyed by the \nresulting fire. If the Uniform Vendor and Purchaser Risk Act has been adopted by the state in \nwhich the property is located, which party bears liability for the loss?",
        "choices": [
            "a. Under the act, the buyer and the seller share the loss equally.",
            "b. Under the act, the seller bears the loss alone.",
            "c. The act does not apply. The buyer bears the loss alone, as the holder of equitable title.",
            "d. Under the act, neither the buyer nor the seller bears the loss. A state fund covers the loss."
        ],
        "answer": "b. In states that have adopted the Uniform Vendor and Purchaser Act, the seller remains \nresponsible for the property until the day of closing."
    },
    {
        "question": "1. A buyer makes an offer to buy a seller\u2019s house. Pursuant to this offer, the buyer is obligated to \nperform only if the buyer is first able to sell a condominium. This is an example of",
        "choices": [
            "a. a mortgage contingency.",
            "b. an option contingency.",
            "c. a time-is-of-the-essence contingency.",
            "d. a property sale contingency."
        ],
        "answer": "d. A property sale contingency protects a buyer who must sell a property in order to buy the \nseller\u2019s property."
    },
    {
        "question": "2. A valid real estate sales contract needs",
        "choices": [
            "a. offer and acceptance.",
            "b. no consideration.",
            "c. an earnest money deposit, held in an escrow account.",
            "d. unrelated parties.",
            "c."
        ],
        "answer": "a. Earnest money is an optional term in a contract, not a requirement. The essential elements of \na contract are offer and acceptance, consideration, and legally competent parties."
    },
    {
        "question": "3. A 14-year-old comes into a brokerage office and says, \u201cI want to make an offer on this \nproperty. Here is a certified check for 10% of the asking price. Please help me with the \npaperwork.\u201d Why should the broker be concerned?",
        "choices": [
            "a. Because one of the parties is a minor, the contract is voidable.",
            "b. The earnest money deposit must be at least 20% of the asking price when a minor is",
            "c. The sales contract may be disaffirmed by the minor.",
            "d. The sales contract will be void."
        ],
        "answer": "a. If it is discovered that a party is not legally competent, the contract is voidable at the option \nof the person who lacks competency."
    },
    {
        "question": "4. In case the buyer decides not to buy on a whim, the contract may provide that the earnest \nmoney is there as",
        "choices": [
            "a. actual damages.",
            "b. nominal damages.",
            "c. punitive damages.",
            "d. liquidated damages."
        ],
        "answer": "d. Liquidated damages limit the compensation available to the injured party should a breach of \ncontract occur."
    },
    {
        "question": "6. Which of these is typically a factor in determining the amount of the earnest money deposit?",
        "choices": [
            "a. Whether it is an amount sufficient to cover the broker fees",
            "b. Whether it is an amount equal to the standard down payment on a mortgage loan.",
            "c. Whether it is an amount sufficient to compensate the seller for taking the property off the",
            "d. Whether it is an amount equal to the interest that would have been earned on an",
            "c."
        ],
        "answer": "c. Broker fees are not the focus when the parties are working out an agreement concerning the \nearnest money deposit. An important factor is determining an amount sufficient to \ncompensate the owner for taking the property off the market."
    },
    {
        "question": "7. If a property owner is threatened with violence to force a sale of the property for a low price, \nthe contract is voidable because there is lack of",
        "choices": [
            "a. consent.",
            "b. discharge.",
            "c. consideration.",
            "d. offer and acceptance."
        ],
        "answer": "a. Because a contract must be entered into by consent as a free and voluntary act of each party, \na contract made under duress deprives a person of that ability. The contract is voidable by \nthe injured party."
    },
    {
        "question": "8. If a contract seems to be valid, but neither party can sue the other to force performance, the \ncontract is said to be",
        "choices": [
            "a. voided.",
            "b. breached.",
            "c. rescinded.",
            "d. unenforceable."
        ],
        "answer": "d. An unenforceable contract may appear to be valid; however, neither party can sue the other \nto enforce performance. An oral contract for the sale of real estate is unenforceable in a \ncourt of law because it must be in writing. The parties may still proceed and complete a \ntransaction, but both are in a very risky position."
    },
    {
        "question": "9. What is minimum consideration in a valid contract?",
        "choices": [
            "a. One dollar",
            "b. Any item that can be appraised with a market value",
            "c. Specified goods or services",
            "d. Anything the parties agree is good and valuable"
        ],
        "answer": "d. The parties must agree that the consideration is good and valuable. The courts do not \nconsider whether the consideration is adequate."
    },
    {
        "question": "0. If a contract does NOT contain a time or date for performance, it should be executed within",
        "choices": [
            "a. a reasonable time.",
            "b. one week.",
            "c. two weeks.",
            "d. one month."
        ],
        "answer": "a. Interpretation of what is a reasonable time depends on the situation; however, courts have \nsometimes declared contracts invalid if they did not contain a time or date for performance.   \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "1. If a seller allows a buyer to back out of a contract, returns the earnest money to the buyer, and \nboth are back to the positions they held before the contract, the contract has been",
        "choices": [
            "a. cancelled.",
            "b. rescinded.",
            "c. assigned.",
            "d. executed."
        ],
        "answer": "b. Rescission allows both parties to return to their original positions before the contract, so any \nmonies exchanged must be returned."
    },
    {
        "question": "2. When is an offer considered to be accepted?",
        "choices": [
            "a. When the broker notifies the buyer that the seller has accepted the offer",
            "b. When the buyer gives a signed receipt to the broker to show the buyer has received the",
            "c. The moment the seller accepts the buyer\u2019s offer",
            "d. One business day after the offer is accepted and signed by the seller"
        ],
        "answer": "a. Buyer notification is the key. It is not an accepted offer until the buyer is notified, and there is \nno lag time after that point."
    },
    {
        "question": "3. Additional conditions that must be satisfied before a sales contract is fully enforceable are \ncalled",
        "choices": [
            "a. binders.",
            "b. amendments.",
            "c. addenda.",
            "d. contingencies."
        ],
        "answer": "d. A contingency is any additional condition that must be satisfied before a sales contract is fully \nenforceable. A binder is a short version of a sales contract that is used until a more complete \nversion is prepared. Amendments are changes to the existing content of a contract."
    },
    {
        "question": "4. The amount of the earnest money in a sales contract should",
        "choices": [
            "a. cover any expenses the buyer might incur if the seller defaults.",
            "b. discourage the buyer from walking away from the agreement.",
            "c. pay the broker\u2019s commission.",
            "d. pay for any required inspections."
        ],
        "answer": "b. The amount of earnest money should be sufficient that the seller feels reassured that the \nbuyer is committed to the purchase. Earnest money is not used to pay for inspections or the \nbroker\u2019s commission.   \n \n \n \n\nModern Real Estate Practice 21st Edition \n \nRhode Island Association of REALTORS\u00ae  \n \n\u00a92022 Kaplan, Inc."
    },
    {
        "question": "5. The term statute of limitations is BEST described as the limitation on the",
        "choices": [
            "a. time period in which parties to a contract may bring a lawsuit to enforce their rights.",
            "b. parties\u2019 ability to demand a \u201ctime is of the essence\u201d clause in a sales contract.",
            "c. amount of damages that can be claimed in the event of breach.",
            "d. broker\u2019s right to a commission."
        ],
        "answer": "a. Every state limits the time during which parties to a contract may bring a legal action to \nenforce their rights. Rights not enforced within the applicable time period are lost."
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