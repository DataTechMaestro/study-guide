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
    },
    {
      "question": "Acceptable evidence of an owner’s title includes",
      "choices": [
        "a. a recorded deed.",
        "b. an abstract of title and attorney’s opinion.",
        "c. a homeowner’s insurance policy.",
        "d. a deed."
      ],
      "answer": "b. A deed, even if recorded, is nothing more than that. A thorough examination of a property’s title history, a title insurance policy backed by such an examination, and an official title document (Torrens certificate) can all serve as acceptable evidence of title."
    },
    {
      "question": "To serve as public notice, a deed is recorded in the",
      "choices": [
        "a. city where the owner lives.",
        "b. county or, in some states, the town where the property is located.",
        "c. state capital.",
        "d. largest city in the state."
      ],
      "answer": "b. Because land is immobile, it makes sense to record all information about title to real property in the county where it is located. Some owners frequently relocate, and they would be hard to find."
    },
    {
      "question": "Five years ago, a lien was recorded against a parcel of property by a construction company. The property is in county A, but the lien was recorded in county B. Now, a former partner of the construction company, who knew that a lien had been filed, is trying to buy the property. A title search in county A disclosed no liens against the property. Which of these is TRUE?",
      "choices": [
        "a. The former partner has constructive notice of the lien but not actual notice, because of the mistake in recording.",
        "b. The former partner has actual notice of the lien but not constructive notice, because of the mistake in recording.",
        "c. The former partner has both actual and constructive notice of the lien.",
        "d. The former partner has no notice of the lien."
      ],
      "answer": "b. The former partner is aware that a lien was filed, which is actual notice. Constructive notice is not given because the lien was not filed in the county where the property is located, which is where it would be expected to be filed."
    },
    {
      "question": "Shortly after closing on a real estate purchase, the buyer discovered that there were serious flaws in the title that made it unlikely that the property could be resold in the future. What can the buyer do now?",
      "choices": [
        "a. Because the title was flawed, the buyer can legally void the sale, and the seller must return any consideration.",
        "b. The buyer has no recourse.",
        "c. Because the seller conveyed unmarketable title, the buyer is entitled to a new title report.",
        "d. Because the buyer has accepted the deed, the only recourse is to sue the seller under any covenants contained in the deed."
      ],
      "answer": "d. The buyer and the buyer’s representatives should look at the evidence of ownership before closing. There is more leverage to get problems corrected before closing than after closing."
    },
    {
      "question": "The reason that deeds and liens and other claims are recorded is to give",
      "choices": [
        "a. constructive notice.",
        "b. actual notice.",
        "c. direct notice.",
        "d. nominal notice."
      ],
      "answer": "a. The recorder’s office is a central place to deposit and discover information."
    },
    {
      "question": "A history of all recorded liens and encumbrances is revealed in the",
      "choices": [
        "a. title insurance policy.",
        "b. unrecorded documents.",
        "c. chain of title.",
        "d. abstract."
      ],
      "answer": "d. The title insurance policy lists coverage and exceptions to the policy. Unrecorded documents have not been examined. The chain of title traces ownership. The abstract is the most complete documentation of recorded liens and encumbrances."
    },
    {
      "question": "The person who prepares a certificate of title is the",
      "choices": [
        "a. broker.",
        "b. abstractor.",
        "c. buyer.",
        "d. seller."
      ],
      "answer": "b. The abstractor searches all public records and then summarizes the various events that affected the title throughout its history."
    },
    {
      "question": "Which of these would be covered in a standard title insurance policy?",
      "choices": [
        "a. Defects discoverable by physical inspection",
        "b. Unrecorded liens",
        "c. Forged documents",
        "d. Easements and restrictive covenants"
      ],
      "answer": "c. Title insurance does not protect against claims of parties in possession because the grantee should have visited the property; nor does it cover unrecorded liens. Easements and restrictive covenants are found in the deed and should be known to the grantee."
    },
    {
      "question": "A title insurance policy that protects the interests of a mortgagee is called",
      "choices": [
        "a. a leasehold policy.",
        "b. a lender’s policy.",
        "c. a certificate of sale policy.",
        "d. an ALTA policy."
      ],
      "answer": "b. The mortgagee is the lender. The mortgagee’s policy is transferable."
    },
    {
      "question": "In the states in which it has been adopted, the Marketable Title Act",
      "choices": [
        "a. establishes standardized forms for abstracts of title.",
        "b. disqualifies use of an attorney’s opinion of title as acceptable evidence of title.",
        "c. limits the time beyond which title records must be searched.",
        "d. provides a certification system for qualifying title insurance companies."
      ],
      "answer": "c. The law extinguishes certain interests and cures certain defects arising before the earliest date that the title must be examined."
    },
    {
      "question": "Why have real estate license laws been put into effect?",
      "choices": [
        "a. To protect licensees from lawsuits",
        "b. To protect the public and establish a standard of competence",
        "c. To prevent licensees from engaging in profit-making activities",
        "d. To establish maximum levels of competency and a moral marketplace"
      ],
      "answer": "b. Real estate license laws protect the public by ensuring a standard of competence in the real estate industry."
    },
    {
      "question": "In real estate, a sales associate is always",
      "choices": [
        "a. an independent contractor.",
        "b. an employee of a licensed broker.",
        "c. a licensee who performs real estate activities on behalf of a broker.",
        "d. a combination office manager, marketer, and organizer with a fundamental understanding of the real estate industry, who may or may not be licensed."
      ],
      "answer": "c. While the sales associate may be treated as an independent contractor for income tax purposes, the sales associate must work for a broker, who is responsible for the associate’s conduct."
    },
    {
      "question": "Requirements for independent contractor status used by the Internal Revenue Service include",
      "choices": [
        "a. a pending real estate license.",
        "b. specific hours stated in a written agreement.",
        "c. an understanding that the individual will not be treated as an employee for tax purposes.",
        "d. that all of the individual’s income will be based on sales production rather than hours worked."
      ],
      "answer": "c. The reason it would not be b is the real estate broker may require an employee to follow rules, such as working a certain number of hours, but the broker may not do so if treating the affiliated sales associate as an independent contractor."
    },
    {
      "question": "A broker does not permit his sales associates to charge less than an 8% commission in any transaction. After reading a newspaper article about this broker’s policy, the broker at another firm decides to adopt a 7% minimum commission rate to undercut the competition. Based on these facts, which of these statements is TRUE?",
      "choices": [
        "a. The first broker’s policy is price-fixing and violates the antitrust law.",
        "b. Although the first broker’s policy was legal, the second broker’s adoption of a lower rate to undercut the competition is not based on the cost of doing business.",
        "c. Both brokers engaged in illegal price-fixing.",
        "d. Neither broker has committed an antitrust violation."
      ],
      "answer": "d. Brokers can independently determine commission rates or fees for their own firms."
    },
    {
      "question": "A real estate broker had a listing agreement with a seller that specified a 6% commission. The broker showed the home to a prospective buyer. The next day, the buyer called the seller directly and offered to buy the house for 5% less than the asking price. The seller agreed to the price and informed the broker in writing that no further brokerage services would be required. The sale went to closing six weeks later. Based on these facts, which of these statements is TRUE?",
      "choices": [
        "a. While the broker was the procuring cause of the sale, the seller properly canceled the contract; without a valid employment agreement in force at the time of closing, the broker is not entitled to a commission.",
        "b. The broker is entitled to a partial commission, and the buyer is obligated to pay it.",
        "c. Under the facts as stated, the broker is not the procuring cause of this sale but is still entitled to a commission.",
        "d. The broker was the procuring cause of the sale and is entitled to the full 6% commission."
      ],
      "answer": "d. Because the broker introduced a ready, willing, and able buyer to the seller prior to the seller’s cancellation of the listing agreement, the broker is entitled to the commission."
    },
    {
      "question": "A qualified buyer makes a written offer on a property on March 6 by completing and signing a sales agreement. Later that day, the seller accepts and signs the agreement, keeping one copy. The seller’s broker gives a copy of the signed agreement to the buyer on March 8. The seller’s deed is delivered on May 1. The deed is recorded on May 7, and the buyer takes possession on May 15. When is the broker’s commission payable if this is a usual transaction?",
      "choices": [
        "a. March 8",
        "b. May 1",
        "c. May 7",
        "d. May 15"
      ],
      "answer": "b. Although the commission was earned when the buyer was notified of the seller’s acceptance (March 8), the commission is typically paid at the time the deed is delivered."
    },
    {
      "question": "All of these are violations of federal antitrust laws EXCEPT",
      "choices": [
        "a. group boycott.",
        "b. allocation of customers.",
        "c. commission split.",
        "d. tie-in agreement."
      ],
      "answer": "c. Brokers may legally share and split commissions. Price fixing, allocation of customers, and a group boycott are illegal under the antitrust laws."
    },
    {
      "question": "All of these are ways for a broker to charge for services EXCEPT",
      "choices": [
        "a. standard community rate.",
        "b. flat fee.",
        "c. hourly rate.",
        "d. commission based on a percentage of the selling price."
      ],
      "answer": "a. Under antitrust laws, brokers may not collaborate and agree to charge the same rate to customers. Brokers may charge for services using a flat fee, an hourly rate, or a commission based on a percentage of the selling price."
    },
    {
      "question": "What is the main value of a multiple listing service (MLS) for sellers?",
      "choices": [
        "a. Real estate professionals do not have to work as hard to secure property listings.",
        "b. It simplifies closing procedures.",
        "c. It reduces cooperation among brokers.",
        "d. It exposes the property to a greater number of prospective buyers."
      ],
      "answer": "d. The MLS exposes the property to many different real estate professionals, encouraging cooperation among brokers and expediting sales."
    },
    {
      "question": "After license laws are enacted by the legislature, who is responsible for adopting administrative regulations?",
      "choices": [
        "a. A subcommittee that reports to the legislature",
        "b. A local association of REALTORS®",
        "c. Licensing authority (division, commission, etc.)",
        "d. Brokers and salespeople appointed by the governor"
      ],
      "answer": "c. Administrative regulations are written and adopted by the licensing authorities in each state. They have the same force and effect as the law, but they are easier to create and change because they do not have to go through the legislative process."
    },
    {
      "question": "When communicating with clients or consumers via email, it is best to",
      "choices": [
        "a. send solicitations to all local residents, even when not personally known.",
        "b. be as vague as possible about the real reason for the message.",
        "c. avoid sending large attachments.",
        "d. respond to emails within one week."
      ],
      "answer": "d. Examples of email etiquette include using the subject line in a useful and helpful manner; avoiding spelling errors; responding promptly to all email messages; and being specific, to the point, and brief. Do not send unsolicited emails."
    },
    {
      "question": "Although state laws vary regarding internet advertising, which of these is a typical element of state policy or law?",
      "choices": [
        "a. Email sent by a real estate licensee needs to include the licensee’s name, phone number, and real estate license number.",
        "b. Ads must contain true, current information and avoid misleading the potential client or customer.",
        "c. On a website containing their ads, real estate licensees only need to identify themselves as a broker or salesperson on the site’s home page.",
        "d. It is acceptable for only the sales associate’s name (without the broker’s name) to be shown in an ad."
      ],
      "answer": "b. A phone number and license number are not usually required in an email. Status as a broker or sales associate should be disclosed on every page of a website with ads. Both the sales associate’s name and the broker’s name should be shown in the ads."
    },
    {
      "question": "The broker may still be entitled to a commission in which of these situations where a pending property sale did not close?",
      "choices": [
        "a. The buyer wanted to add the kitchen appliances to the sale, but the seller refused.",
        "b. The buyer decided not to buy the property.",
        "c. The seller decided not to sell.",
        "d. Financing fell through for the buyer."
      ],
      "answer": "c. If the sale is not completed due to the seller’s default (deciding not to sell), then the broker is generally due a commission. Courts may prevent a real estate broker from receiving a commission if the broker knew that the buyer was unable to perform."
    },
    {
      "question": "An arrangement to sell one product only if the buyer purchases another product as well is called",
      "choices": [
        "a. a tie-in agreement.",
        "b. a fee-for-services.",
        "c. a buydown provision.",
        "d. an allocation of customers."
      ],
      "answer": "a. A tie-in arrangement is an agreement to sell one product only if the buyer purchases another product; the sale of the desired product is tied to the purchase of a second, less-desirable product. Fee-for-services refers to splitting apart the collection of services that a broker offers. A buydown provision is a financing option. Allocation of customers refers to dividing a market and refraining from competing."
    },
    {
      "question": "The primary purpose of the Uniform Electronic Transactions Act (UETA) is to",
      "choices": [
        "a. facilitate the use of social media.",
        "b. protect consumers against unwanted email.",
        "c. remove barriers in electronic commerce that would otherwise prevent enforceability of contracts.",
        "d. allow brokers to close more deals."
      ],
      "answer": "c. The primary purpose of the Uniform Electronic Transactions Act (UETA) is to remove barriers in electronic commerce that would otherwise prevent enforceability of contracts. UETA sets forth basic rules for entering an enforceable contract using electronic means."
    },
    {
      "question": "A consumer placed their phone number on the National Do Not Call Registry, but a real estate professional may call the consumer how many months after the consumer’s last purchase?",
      "choices": [
        "a. 3",
        "b. 6",
        "c. 12",
        "d. 18"
      ],
      "answer": "d. A real estate professional may call consumers with whom there is an established business relationship for up to 18 months after the consumer’s last purchase, delivery, or payment, even if the consumer is listed on the National Do Not Call Registry. If the consumer specifically asks the company not to call, then the company must stop calling."
    },
    {
      "question": "The name for the current policy of the National Association of REALTORS® that allows all multiple listing service (MLS) members equal rights to display MLS data is the",
      "choices": [
        "a. virtual office website.",
        "b. Internet Listing Display Policy.",
        "c. Internet Data Exchange.",
        "d. Open Listing Data Service."
      ],
      "answer": "c. NAR has adopted the Internet Data Exchange (IDX) policy. The policy allows all MLS members to have equal rights to display MLS data, while also respecting the rights of the property owners and the brokers who represent them to market the property as they wish."
    },
    {
      "question": "An important purpose of the E-Sign Act is to",
      "choices": [
        "a. give contracts created electronically the same legal standing as those executed on paper.",
        "b. require stringent security measures for email communication.",
        "c. prevent notarization of electronically transmitted agreements.",
        "d. require all parties to use electronic contracting if the seller prefers it."
      ],
      "answer": "a. The E-Sign Act diminishes legal barriers in electronic contracting, but it does not specify required security measures. Notarization is allowed. Parties are not required to use electronic contracting."
    },
    {
      "question": "The compensation plan in which a sales associate’s commission split increases depending on whether the associate achieves higher production goals is the",
      "choices": [
        "a. procuring cause commission.",
        "b. cooperating broker commission.",
        "c. graduated commission split.",
        "d. 100% commission plan."
      ],
      "answer": "c. A graduated commission split is based on a sales associate’s achieving specified production goals. A 100% commission plan provides for a sales associate to pay a monthly service charge to the broker so that the associate can keep 100% of the commissions earned."
    },
    {
      "question": "What is the practice called when a consumer selects specific services to use and only pays the real estate professional for those services?",
      "choices": [
        "a. Unbundling services",
        "b. Tie-in agreement",
        "c. Discounted services",
        "d. Allocation of markets"
      ],
      "answer": "a. Unbundling services means offering services as the consumer desires them. With discounted services, the consumer receives the full package of services but pays a discounted price. Allocation of markets involves an agreement between brokers to divide their markets and stop competition."
    },
    {
      "question": "A seller had agreed to pay the listing broker a 5% commission on property that sold for $325,000. The listing broker offered a 40/60 listing/selling split to any cooperating broker who sold the property. How much did the seller have to pay in commission fees?",
      "choices": [
        "a. $9,100",
        "b. $11,375",
        "c. $13,650",
        "d. $16,250"
      ],
      "answer": "d. What the brokers agree to regarding splitting the commission is not relevant to the total cost to the seller. The seller paid $16,250 in commission fees: $325,000 × 5% = $16,250."
    },
    {
      "question": "The sales associate’s agreement with the broker was a 40/60 split with the broker keeping 40% of the commission. The seller was charged 5.5%. How much did the sales associate receive if the associate listed and sold a house for $279,500?",
      "choices": [
        "a. $6,149.00",
        "b. $7,686.25",
        "c. $9,223.50",
        "d. $15,372.50"
      ],
      "answer": "c. The sales associate received $9,223.50: $279,500 × 5.5% × 60% = $9,223.50."
    },
    {
      "question": "A broker listed a seller’s home for $425,000 with a 4% commission plus $3,000 for advertising costs. The buyer offered $380,000, and after several counteroffers, finally agreed to $400,000. What was the total cost to the seller?",
      "choices": [
        "a. $16,000",
        "b. $18,000",
        "c. $19,000",
        "d. $20,000"
      ],
      "answer": "c. The seller’s total cost is $19,000: $400,000 × 4% + $3,000 = $19,000."
    },
    {
      "question": "Sales associates in a real estate brokerage are compensated based on this formula: 35% of the commission earned on any sale, less a $200 per-transaction desk rental. Sales associates are responsible for paying 75% of all marketing and sales expenses for any property they list, and a $75 per-transaction fee to cover the monthly expenses of advertising and marketing the brokerage’s services. If a sales associate sold a house for $500,000, with a 6% commission, how much would the associate be paid if the sale incurred $800 in marketing and advertising costs?",
      "choices": [
        "a. $9,625",
        "b. $9,700",
        "c. $10,225",
        "d. $10,500"
      ],
      "answer": "a. The sales associate would be paid $9,625: $500,000 × 6% = $30,000. $30,000 × 35% = $10,500. $800 × 75% = $600. $10,500 – $200 – $75 – $600 = $9,625."
    },
    {
      "question": "At a realty agency, sales associates pay a monthly desk rent of 15% of their monthly income. In May, one sales associate receives 5% on a $560,000 sale; 6% on a $348,000 sale; and 6.75% on an $89,500 sale. The only other sales associate at the agency who received a commission in May got 6% on a $410,000 sale. How much did the agency receive in May?",
      "choices": [
        "a. $7,095.97",
        "b. $11,928.19",
        "c. $12,251.53",
        "d. $14,945.00"
      ],
      "answer": "b. In May, the realty agency received $11,928.19: $560,000 × 5% = $28,000. $348,000 × 6% = $20,880. $89,500 × 6.75% = $6,041.25. $410,000 × 6% = $24,600. $28,000 + $20,880 + $6,041.25 + $24,600 = $79,521.25. $79,521.25 × 15% = $11,928.19."
    },
    {
      "question": "An individual who is authorized and consents to represent the interests of another person is",
      "choices": [
        "a. a customer.",
        "b. a principal.",
        "c. an agent.",
        "d. a facilitator."
      ],
      "answer": "c. The agent is hired by the principal. The customer is a third party. A facilitator is someone working on a non-agency basis."
    },
    {
      "question": "A broker represents a seller but is currently working with a buyer to find a home. Assuming that no statute has replaced the traditional common law of agency, which of these correctly identifies the parties in this relationship?",
      "choices": [
        "a. The broker is the buyer’s agent; the seller is the broker’s client.",
        "b. The buyer is the broker’s client; the seller is the broker’s principal.",
        "c. The seller is the broker’s customer; the buyer is the broker’s client.",
        "d. The broker is the seller’s agent; the buyer is the broker’s customer."
      ],
      "answer": "d. Watch the terminology: The broker is working for (representing) the seller and is working with the buyer (a customer) to find a home."
    },
    {
      "question": "The agent’s obligation to use skill and expertise on behalf of the principal arises under which of these common-law duties?",
      "choices": [
        "a. Care",
        "b. Obedience",
        "c. Loyalty",
        "d. Disclosure"
      ],
      "answer": "a. Care requires skill and expertise; obedience requires following lawful instructions; loyalty is putting the client’s interests above the agent’s; and disclosure refers to material defects of the property."
    },
    {
      "question": "An agent representing the buyer has a duty to disclose to the seller",
      "choices": [
        "a. offers that are ridiculously low.",
        "b. the buyer’s financial ability to offer a higher price.",
        "c. the agent’s advertising budget.",
        "d. the buyer’s intention to resell the property for a profit."
      ],
      "answer": "a. The buyer’s (special) agent must present all offers made by the buyer but not disclose to the seller any facts about the buyer that would be detrimental to the buyer’s bargaining position, including the fact that the buyer intends to resell the property. There is no requirement that the agent disclose an advertising budget."
    },
    {
      "question": "A broker has an agency agreement to represent the seller of a house. The agreement’s expiration date is June 10. On May 5, the house is struck by lightning and burns to the ground. The seller, overwhelmed by grief, dies. Based on these facts, which of these is TRUE?",
      "choices": [
        "a. The agency agreement was terminated by the fire, although the seller’s death also would have done so.",
        "b. The agency agreement was not terminated until the seller’s death.",
        "c. If the house had not been destroyed by the fire, the seller’s death would not have terminated the agreement; the broker would become the broker for the seller’s estate.",
        "d. Only the mutual agreement of the parties can terminate a valid agency agreement before its expiration date."
      ],
      "answer": "a. An agency agreement may be terminated by either destruction of the property or death of either party. In this case, destruction of the property occurred first."
    },
    {
      "question": "A person who is designated by the principal in a broad range of matters related to a particular transaction or activity is a",
      "choices": [
        "a. facilitator.",
        "b. special agent.",
        "c. designated agent.",
        "d. general agent."
      ],
      "answer": "d. A special agent is given limited authority for a limited time. A general agent is given broad authority in a specific circumstance. A property manager is typically a general agent for the owner as are most real estate sales associates for the employing broker."
    },
    {
      "question": "A real estate broker signed an agency agreement with a seller. The asking price for the seller’s house was $499,000. A few days later, the broker met a prospective buyer who was interested in buying a home in the $480,000 to $510,000 price range. The broker agreed to help the buyer locate such a property and to represent the buyer in negotiating a favorable purchase price. Based on these facts, which of these statements is TRUE?",
      "choices": [
        "a. The broker’s relationships and the buyer and seller are separate issues, and no dual agency question arises.",
        "b. The seller is the broker’s client, and the buyer is the broker’s customer; there is no dual agency problem.",
        "c. The broker has created a potential undisclosed dual agency problem and should disclose the relationships to both parties before showing the seller’s home to the buyer.",
        "d. The broker has created a dual agency problem and should immediately terminate the agreement with either the buyer or seller."
      ],
      "answer": "c. The broker is representing the seller and now is at least implying representation of the buyer in locating a property; hence, there are two clients. If the broker intends to show the seller’s property, the broker must disclose the relationship with both clients, gain their agreement to a dual agency, and only then proceed."
    },
    {
      "question": "A broker is showing a house to a prospective buyer. The broker points out the rustic charm of the sagging front porch and refers to a weed-choked backyard as a delightful garden. The broker is engaging in",
      "choices": [
        "a. intentional misrepresentation.",
        "b. negligent misrepresentations.",
        "c. puffing.",
        "d. fraud."
      ],
      "answer": "c. Because any prudent buyer can see the sagging porch and weed-choked garden, these are puffing statements. Agents must take care that they do not make statements in such a way as to harm the buyer or take advantage of the buyer’s ignorance, which would constitute fraud."
    },
    {
      "question": "A house built over a ditch covered with decaying timber or a house with ceilings that are improperly attached to the support beams, neither condition being visible, are examples of",
      "choices": [
        "a. stigmatized properties.",
        "b. environmental hazards.",
        "c. latent defects.",
        "d. conditions that need not be disclosed."
      ],
      "answer": "c. A latent defect is a hidden structural defect that would not be discovered by ordinary inspection."
    },
    {
      "question": "The seller’s agent has certain duties to the client-principal. Duties of the principal include",
      "choices": [
        "a. cooperating with the agent but being able to limit the availability of the property for showings.",
        "b. compensating the agent but only if an offer at the full listing price is received.",
        "c. suggesting marketing strategies to the agent.",
        "d. dealing with the agent in good faith."
      ],
      "answer": "d. Marketing is the agent’s responsibility. The principal who hired the agent is responsible for cooperating with the agent, disclosing material defects, and compensating the agent."
    },
    {
      "question": "Every state has a mandatory agency disclosure law that stipulates",
      "choices": [
        "a. how an implied agency may occur.",
        "b. when, how, and to whom agents must reveal for whom they provide client-based services.",
        "c. restrictions on disclosure of confidential information.",
        "d. how a customer may be indistinguishable from a client."
      ],
      "answer": "b. Mandatory agency disclosure laws now exist in every state. In addition, state laws may require a particular type of written form be used and may require that all agency alternatives be explained."
    },
    {
      "question": "In a real estate sales transaction, who is the agent’s principal?",
      "choices": [
        "a. Seller",
        "b. Buyer",
        "c. Person who pays the commission",
        "d. Whoever hired the agent"
      ],
      "answer": "d. The most complete answer is whoever hired the agent. That could be either the buyer or the seller, but payment of compensation is not the determining factor."
    },
    {
      "question": "A broker was hired to represent the seller, to market the property, and to solicit offers to purchase. The broker is called a",
      "choices": [
        "a. general agent.",
        "b. special agent.",
        "c. facilitator.",
        "d. nonagent."
      ],
      "answer": "b. A special agent is one who is hired for a limited time and given limited authority. A broker taking a listing is generally a special agent."
    },
    {
      "question": "A house was the scene of a drug arrest and a violent murder last year. When it was listed on the market, many people considered it to be a",
      "choices": [
        "a. latent property.",
        "b. stigmatized property.",
        "c. damaged property.",
        "d. property with a material defect."
      ],
      "answer": "b. Presuming that the property is physically intact, the drug arrest and violent murder may create a psychological reaction to the property, rendering it stigmatized."
    },
    {
      "question": "An agency relationship can be terminated by",
      "choices": [
        "a. the divorce of the party who signed the listing.",
        "b. destruction of the property.",
        "c. an offer made on the property.",
        "d. issuance of a new standard listing agreement."
      ],
      "answer": "b. An offer on the property does not terminate the agency relationship. Neither does the divorce of either party, or issuance of a new standard listing agreement."
    },
    {
      "question": "What is a seller’s agent required to disclose to prospective buyers about material defects in the property?",
      "choices": [
        "a. Only information about material defects the seller has provided the agent",
        "b. Only information about material defects that the agent has personally observed",
        "c. Both information the seller has provided the agent, and material defects that the agent has personally observed",
        "d. All information about material defects that the agent knows or should know"
      ],
      "answer": "d. Agents are responsible for disclosing information they are told or that they discover on their own, plus information they should have known."
    },
    {
      "question": "Which of these statements could be negligent misrepresentation?",
      "choices": [
        "a. “The uneven floors just mean that the building dates to colonial times.”",
        "b. “I think these low doorways are a charming part of the Cape Cod style.”",
        "c. “The simple design is uncluttered and can give you many possibilities for decor.”",
        "d. “The size of the bedrooms makes them wonderfully cozy and perfect for your children.”"
      ],
      "answer": "a. Presenting an opinion is acceptable so long as it is not presented as a fact. Uneven floors could mean a latent defect, such as rotten supports."
    },
    {
      "question": "The seller’s agent is aware that a new landfill has been approved for development on a nearby property but does not disclose this information to a buyer. This could be an example of",
      "choices": [
        "a. negligent misrepresentation.",
        "b. a latent defect.",
        "c. fraudulent misrepresentation.",
        "d. unnecessary disclosure."
      ],
      "answer": "c. This is an example of misleading a party by withholding a material fact. It is deliberate misrepresentation by silence. The proposed landfill near the property is not a latent defect, because it does not threaten structural soundness or personal safety."
    },
    {
      "question": "A key element of an agent’s fiduciary responsibility of loyalty is to",
      "choices": [
        "a. report the status of all funds received from or on behalf of the principal.",
        "b. avoid conflicts of interest.",
        "c. obey the principal’s instructions in accordance with the contract.",
        "d. reveal relevant information or material facts."
      ],
      "answer": "b. Reporting the status of funds is an accounting responsibility. Obeying the principal’s instructions relates to obedience. Revealing relevant information relates to the responsibility of disclosure."
    },
    {
      "question": "When a broker places trust funds of others into the company’s operating account and then withdraws funds for the firm’s use, what illegal practice has taken place?",
      "choices": [
        "a. Escrowing",
        "b. DBA accounting",
        "c. Conversion",
        "d. Asset-liability management"
      ],
      "answer": "c. Both commingling the funds and the practice of conversion are illegal."
    },
    {
      "question": "In a buyer representation agreement, the broker acts as the agent of the buyer and must protect the buyer’s interests",
      "choices": [
        "a. at all points in the transaction.",
        "b. only during property showings.",
        "c. until the representation agreement is signed.",
        "d. only when negotiating on behalf of the buyer."
      ],
      "answer": "a. In a buyer representation agreement, the broker acts as the agent of the buyer and must protect the buyer’s interests at all points in the transaction."
    },
    {
      "question": "A homeowner listed the home for sale with a broker. When the owner sold the home without the broker’s assistance, no one was owed a commission. Based on these facts, what type of listing did the broker and the owner most likely sign?",
      "choices": [
        "a. Exclusive right-to-sell listing",
        "b. Net listing",
        "c. Multiple listing",
        "d. Open listing"
      ],
      "answer": "d. Under an open listing, the seller is permitted to sell the house without the broker’s assistance and is not obligated to pay a commission."
    },
    {
      "question": "Information in a listing agreement generally includes",
      "choices": [
        "a. block size.",
        "b. termination clause.",
        "c. client’s specific requirements for a suitable property to buy.",
        "d. neighborhood condition disclosures."
      ],
      "answer": "b. A termination clause is generally included in a listing agreement."
    },
    {
      "question": "A broker’s agreement to represent a property buyer may be terminated when",
      "choices": [
        "a. the property buyer dislikes all of the properties shown by the broker.",
        "b. the buyer becomes a seller.",
        "c. the broker and buyer mutually agree to cancel the agreement.",
        "d. there are very few properties on the market."
      ],
      "answer": "c. A broker’s agreement to represent a property buyer may be terminated for various reasons, one of which is mutual agreement between the broker and buyer."
    },
    {
      "question": "A listing agreement is",
      "choices": [
        "a. a contract between the buyer and the seller.",
        "b. a contract to purchase real property.",
        "c. an employment agreement between the broker and the sales associate.",
        "d. an employment contract between the seller and the broker."
      ],
      "answer": "d. Although the broker can subcontract the work to sales associates, the listing agreement is an employment contract between the seller and the broker."
    },
    {
      "question": "Who are the parties to a listing agreement?",
      "choices": [
        "a. Buyer and seller",
        "b. Seller and broker",
        "c. Seller and sales associate",
        "d. Buyer and sales associate"
      ],
      "answer": "b. The seller and broker are parties to the listing agreement. Listings remain the property of the broker even if the sales associate who represented the broker in securing the listing leaves the company."
    },
    {
      "question": "There are five different brokerage signs in the front yard of a home for sale. Evidently, the seller has signed",
      "choices": [
        "a. an exclusive agency listing.",
        "b. an exclusive right-to-sell listing.",
        "c. a net listing.",
        "d. an open listing."
      ],
      "answer": "d. In an open listing, the seller retains the right to sell the property and may employ more than one broker to perform agency duties."
    },
    {
      "question": "A broker just explained the value of signing an exclusive agency listing with a broker who is a member of the multiple listing service. The broker is trying to overcome the misconceptions of the seller who asked about",
      "choices": [
        "a. an open listing.",
        "b. an option listing.",
        "c. an exclusive right-to-sell listing.",
        "d. a net listing."
      ],
      "answer": "a. Sellers are often confused, thinking that the only way to find buyers from a number of brokers is to enter into an open listing. Explaining the advantages of a multiple listing service can overcome the misconception."
    },
    {
      "question": "What kind of listing agreement is illegal in many states because of the potential for conflict of interest between a broker’s fiduciary responsibility to the seller and the broker’s profit motive?",
      "choices": [
        "a. Open listing",
        "b. Net listing",
        "c. Exclusive right-to-sell",
        "d. Exclusive agency listing"
      ],
      "answer": "b. Because a broker is free to offer the property at any price greater than the net amount, a net listing can create a conflict of interest between the broker’s fiduciary responsibility to the seller and the broker’s profit motive. Thus, net listings are illegal in many states and discouraged in others."
    },
    {
      "question": "Buyer agents typically are compensated by a",
      "choices": [
        "a. flat fee for service.",
        "b. percentage of selling price.",
        "c. hourly rate.",
        "d. percentage of list price."
      ],
      "answer": "b. Buyer agents typically are compensated by a percentage of the selling price."
    },
    {
      "question": "A listing agreement will be terminated by",
      "choices": [
        "a. performance.",
        "b. a downturn in the market.",
        "c. an offer to purchase.",
        "d. abandonment by the sales associate."
      ],
      "answer": "a. Because an offer to purchase may not be accepted, it would not terminate the listing agreement. The state of the market will not terminate the agreement, and neither would the abandonment of the listing by the sales associate. The listing still remains with the broker."
    },
    {
      "question": "A broker is retiring and wants to submit the firm’s listings to another broker. How can the broker do this?",
      "choices": [
        "a. The broker must sign over the listings to the new broker.",
        "b. The new broker has to sign an acceptance agreement.",
        "c. Each sales associate must sign over the listings to the new broker.",
        "d. Each seller must agree to a new listing with the new broker."
      ],
      "answer": "d. Because the listing agreement is a contract for the personal services of the original broker, each seller has the right to cancel the listing agreement and not be represented by the new broker."
    },
    {
      "question": "In which of these types of listing agreements is the broker appointed as the seller’s only agent?",
      "choices": [
        "a. Exclusive right-to-sell and exclusive agency listings",
        "b. Open listing",
        "c. Net listing",
        "d. Option listing"
      ],
      "answer": "a. Under an exclusive right-to-sell or exclusive agency listing, one broker is appointed as the seller’s sole agent. Open and option listings do not specifically exclude other brokers from acting as the seller’s agent."
    },
    {
      "question": "In most states, a broker’s license can be suspended or revoked if the broker",
      "choices": [
        "a. breaches the terms of the listing agreement.",
        "b. cancels the listing agreement without cause.",
        "c. takes a listing that does not include a date on which the listing expires.",
        "d. does not include an automatic extension clause in the listing agreement."
      ],
      "answer": "c. If the broker breaches the listing contract or cancels it without cause, the broker may be liable for damages; however, it is not usually grounds for suspension or revocation of the license. Courts discourage the use of automatic extension clauses, and these clauses are even illegal in some states."
    },
    {
      "question": "A listing agreement may include",
      "choices": [
        "a. the dimensions of the block.",
        "b. the possibility of seller financing.",
        "c. the age of the seller.",
        "d. the history of the property’s taxes."
      ],
      "answer": "b. Information needed for a listing agreement may include the possibility of seller financing. The age of the seller is not needed. The dimensions of the block are not relevant, and only the most recent property tax bill is included."
    },
    {
      "question": "An example of personal property that a seller may leave with the real estate and which, therefore, must be identified on the listing agreement is",
      "choices": [
        "a. a built-in dishwasher.",
        "b. the door key.",
        "c. stacked firewood.",
        "d. a ceiling light fixture."
      ],
      "answer": "c. Firewood is not attached to the real estate and is therefore considered personal property. All the other items, even the door key, are normally considered to be part of the real estate."
    },
    {
      "question": "A brokerage charged the seller $1,000 as an advertising fee and 4% of the selling price. The house was listed for $439,500 and sold for $429,350. What was the total amount the seller paid the brokerage?",
      "choices": [
        "a. $15,174",
        "b. $15,580",
        "c. $16,580",
        "d. None of these"
      ],
      "answer": "d. The seller paid the brokerage none of these: The sales price is $429,350 × 4% + $1,000 = $18,174."
    },
    {
      "question": "A seller agreed to a 5% commission on a sale price of $175,000. The brokerage split with salespeople is 30/70, with 30% remaining with the company. How much is the sales associate’s share if the sales associate both lists and sells the property?",
      "choices": [
        "a. $2,625",
        "b. $6,125",
        "c. $8,750",
        "d. None of these"
      ],
      "answer": "b. The sales associate’s share is $6,125: $175,000 × 5% × 70% = $6,125."
    },
    {
      "question": "It is the broker’s office policy that a sales associate keep 60% of the firm’s share of any commission earned from any property the associate lists. A sales associate listed a property that was later sold by a cooperating broker for $285,000. If the two brokers agree to split the 6.5% commission equally, what will the salesperson receive?",
      "choices": [
        "a. $5,557.50",
        "b. $6,092.00",
        "c. $7,235.25",
        "d. $7,654.00"
      ],
      "answer": "a. The sales associate receives $5,557.50: $285,000 × 6.5% × 50% × 60% = $5,557.50."
    },
    {
      "question": "The commission on the sale of a house was $16,500, which was based on a 7.5% commission rate. What was the final selling price of the house?",
      "choices": [
        "a. $127,000",
        "b. $145,000",
        "c. $199,000",
        "d. $220,000"
      ],
      "answer": "d. The selling price was $220,000: $16,500 ÷ 7.5% = $220,000."
    },
    {
      "question": "The broker listed a home for $360,000 under a 90-day exclusive right-to-sell listing agreement with a 6% commission. The next week, the broker began advertising the home in a local paper and showed the property to two prospective buyers. Later that week, the seller announced that the property would be sold to a relative for $340,000. The seller is liable to the broker for",
      "choices": [
        "a. $1,200.",
        "b. $20,400.",
        "c. $21,600.",
        "d. none of these."
      ],
      "answer": "b. The seller is liable to the broker for $20,400: $340,000 × 6% = $20,400. Because the seller had signed an exclusive right-to-sell listing agreement, the seller is responsible for paying a commission regardless of who finds the buyer."
    },
    {
      "question": "Which of these is an example of a unilateral contract?",
      "choices": [
        "a. Lease",
        "b. Agreement of sale",
        "c. Option",
        "d. Listing agreement"
      ],
      "answer": "c. In a unilateral contract, only one party is obligated to perform. The optionor/owner of the property must sell at the agreed-upon price only if the optionee decides to buy."
    },
    {
      "question": "A seller accepted all the terms that the buyer offered, making only one small change in the amount of the earnest money. At that point, there is",
      "choices": [
        "a. an offer.",
        "b. a counteroffer.",
        "c. an acceptance.",
        "d. an executed contract."
      ],
      "answer": "b. Proposing any deviation from the terms of the offer is considered a rejection of the original offer and is called a counteroffer."
    },
    {
      "question": "After making an offer but prior to receiving any response from the seller, a buyer decided against buying a particular lot. The buyer called the agent and said, 'Withdraw my offer.' The buyer’s action is called a",
      "choices": [
        "a. counteroffer.",
        "b. rejection.",
        "c. breach of contract.",
        "d. revocation."
      ],
      "answer": "d. The buyer may revoke the offer any time before being notified that the seller has accepted the offer."
    },
    {
      "question": "A real estate broker announces to the firm’s sales associates that the top-selling sales associate each quarter will receive a $1,000 bonus. This constitutes an",
      "choices": [
        "a. implied bilateral contract.",
        "b. express unilateral contract.",
        "c. implied unilateral contract.",
        "d. express bilateral contract."
      ],
      "answer": "b. The offer of a bonus to the top-selling sales associate each quarter is an express contract because the broker clearly stated the offer to the sales associates. It is a unilateral contract because the broker is obligated to keep the promise, but the sales associates are not obligated to perform."
    },
    {
      "question": "A buyer makes an offer on a house, and the seller accepts in writing. What is the current status of this relationship?",
      "choices": [
        "a. The buyer and seller do not have a valid contract until the seller delivers title at closing.",
        "b. The buyer and seller have an express, bilateral executed contract.",
        "c. The buyer and seller have an express, bilateral executory contract.",
        "d. The buyer and seller have an implied, unilateral executory contract."
      ],
      "answer": "c. Because the seller has promised to sell and the buyer has promised to buy, it is clearly a bilateral contract. It is express because they expressed their intentions in writing. The contract is executory because the sale has not yet closed."
    },
    {
      "question": "A buyer offers the full $215,000 asking price for a house. The offer contains this clause: 'Possession of the premises on August 1.' The seller is delighted to accept the offer and signs the contract. First, however, the seller crosses out 'August 1' and replaces it with 'August 3,' because of a business trip scheduled for the first of the month. The seller immediately books a moving company. What is the status of this agreement?",
      "choices": [
        "a. Because the seller changed the date of possession rather than the amount of the offer, the seller and buyer have a valid contract.",
        "b. The seller has accepted the buyer’s offer. Because the reason for the change was out of the seller’s control, the change is of no legal effect once the seller signed the contract.",
        "c. The seller has rejected the buyer’s offer and made a counteroffer, which the buyer is free to accept or reject.",
        "d. While the seller technically rejected the buyer’s offer, the seller’s behavior in scheduling movers creates an implied contract between the parties."
      ],
      "answer": "c. Even changing the smallest of terms, for whatever reason, constitutes a rejection and counteroffer that the other party is not under obligation to accept."
    },
    {
      "question": "A real estate contract that is entered into by a person who is under the age of contractual capacity generally is",
      "choices": [
        "a. unenforceable.",
        "b. void.",
        "c. voidable.",
        "d. valid."
      ],
      "answer": "c. A contract entered into with a minor is voidable by the minor."
    },
    {
      "question": "A buyer wants to take over the seller’s mortgage. The lender releases the seller from the obligation, substituting the buyer as the party liable for the debt. This arrangement is called",
      "choices": [
        "a. an assignment.",
        "b. a novation.",
        "c. a conversion.",
        "d. a consideration."
      ],
      "answer": "b. A transfer of the responsibilities under a contract that releases the original party from further obligation is called a novation."
    },
    {
      "question": "A buyer and a seller enter into a sales contract for the sale of a home. The seller backs out of the deal at the last minute, and the buyer suffers a financial loss of $1,500 as a result and must rent a home in which to live. Unless provided otherwise by the contract",
      "choices": [
        "a. the buyer may sue the seller for specific performance, forcing the sale of the home to the buyer.",
        "b. the buyer may sue the seller’s agent for damages to recover the $1,500 loss.",
        "c. the seller is not liable because the buyer should not have incurred the $1,500 cost before the sale.",
        "d. the buyer may sue the buyer’s agent for the $1,500 loss and rent paid."
      ],
      "answer": "a. In this case, the seller breached the contract without legal excuse. The buyer is likely to be successful in suing the seller for specific performance, for the $1,500 loss, and for the cost of rent as a hardship; however, many contracts limit the remedies available to the parties."
    },
    {
      "question": "On March 7, a buyer and a seller execute a contract for the purchase of the seller’s property. Closing is set for June 10. On April 15, the property is struck by lightning and destroyed by the resulting fire. If the Uniform Vendor and Purchaser Risk Act has been adopted by the state in which the property is located, which party bears liability for the loss?",
      "choices": [
        "a. Under the act, the buyer and the seller share the loss equally.",
        "b. Under the act, the seller bears the loss alone.",
        "c. The act does not apply. The buyer bears the loss alone, as the holder of equitable title.",
        "d. Under the act, neither the buyer nor the seller bears the loss. A state fund covers the loss."
      ],
      "answer": "b. In states that have adopted the Uniform Vendor and Purchaser Act, the seller remains responsible for the property until the day of closing."
    },
    {
      "question": "A buyer makes an offer to buy a seller’s house. Pursuant to this offer, the buyer is obligated to perform only if the buyer is first able to sell a condominium. This is an example of",
      "choices": [
        "a. a mortgage contingency.",
        "b. an option contingency.",
        "c. a time-is-of-the-essence contingency.",
        "d. a property sale contingency."
      ],
      "answer": "d. A property sale contingency protects a buyer who must sell a property in order to buy the seller’s property."
    },
    {
      "question": "A valid real estate sales contract needs",
      "choices": [
        "a. offer and acceptance.",
        "b. no consideration.",
        "c. an earnest money deposit, held in an escrow account.",
        "d. unrelated parties."
      ],
      "answer": "a. Earnest money is an optional term in a contract, not a requirement. The essential elements of a contract are offer and acceptance, consideration, and legally competent parties."
    },
    {
      "question": "A 14-year-old comes into a brokerage office and says, 'I want to make an offer on this property. Here is a certified check for 10% of the asking price. Please help me with the paperwork.' Why should the broker be concerned?",
      "choices": [
        "a. Because one of the parties is a minor, the contract is voidable.",
        "b. The earnest money deposit must be at least 20% of the asking price when a minor is involved in the transaction.",
        "c. The sales contract may be disaffirmed by the minor.",
        "d. The sales contract will be void."
      ],
      "answer": "a. If it is discovered that a party is not legally competent, the contract is voidable at the option of the person who lacks competency."
    },
    {
      "question": "In case the buyer decides not to buy on a whim, the contract may provide that the earnest money is there as",
      "choices": [
        "a. actual damages.",
        "b. nominal damages.",
        "c. punitive damages.",
        "d. liquidated damages."
      ],
      "answer": "d. Liquidated damages limit the compensation available to the injured party should a breach of contract occur."
    },
    {
      "question": "The buyer and seller agreed to a closing date of September 7 and that time is of the essence. Which of these is the closest meaning of the phrase?",
      "choices": [
        "a. The date of closing may only be delayed by one day at a time.",
        "b. If closing is not held on September 7, there is an automatic extension built in.",
        "c. Closing must be on or before September 7.",
        "d. If either party gives notice, the date can be moved back."
      ],
      "answer": "c. Time is of the essence requires that the contract be completed during that time frame; otherwise, the party who fails to perform on time is liable for breach of contract."
    },
    {
      "question": "Which of these is typically a factor in determining the amount of the earnest money deposit?",
      "choices": [
        "a. Whether it is an amount sufficient to cover the broker fees",
        "b. Whether it is an amount equal to the standard down payment on a mortgage loan.",
        "c. Whether it is an amount sufficient to compensate the seller for taking the property off the market",
        "d. Whether it is an amount equal to the interest that would have been earned on an investment equivalent to the property value"
      ],
      "answer": "c. Broker fees are not the focus when the parties are working out an agreement concerning the earnest money deposit. An important factor is determining an amount sufficient to compensate the owner for taking the property off the market."
    },
    {
      "question": "If a property owner is threatened with violence to force a sale of the property for a low price, the contract is voidable because there is lack of",
      "choices": [
        "a. consent.",
        "b. discharge.",
        "c. consideration.",
        "d. offer and acceptance."
      ],
      "answer": "a. Because a contract must be entered into by consent as a free and voluntary act of each party, a contract made under duress deprives a person of that ability. The contract is voidable by the injured party."
    },
    {
      "question": "If a contract seems to be valid, but neither party can sue the other to force performance, the contract is said to be",
      "choices": [
        "a. voided.",
        "b. breached.",
        "c. rescinded.",
        "d. unenforceable."
      ],
      "answer": "d. An unenforceable contract may appear to be valid; however, neither party can sue the other to enforce performance. An oral contract for the sale of real estate is unenforceable in a court of law because it must be in writing. The parties may still proceed and complete a transaction, but both are in a very risky position."
    },
    {
      "question": "What is minimum consideration in a valid contract?",
      "choices": [
        "a. One dollar",
        "b. Any item that can be appraised with a market value",
        "c. Specified goods or services",
        "d. Anything the parties agree is good and valuable"
      ],
      "answer": "d. The parties must agree that the consideration is good and valuable. The courts do not consider whether the consideration is adequate."
    },
    {
      "question": "If a contract does NOT contain a time or date for performance, it should be executed within",
      "choices": [
        "a. a reasonable time.",
        "b. one week.",
        "c. two weeks.",
        "d. one month."
      ],
      "answer": "a. Interpretation of what is a reasonable time depends on the situation; however, courts have sometimes declared contracts invalid if they did not contain a time or date for performance."
    },
    {
      "question": "If a seller allows a buyer to back out of a contract, returns the earnest money to the buyer, and both are back to the positions they held before the contract, the contract has been",
      "choices": [
        "a. cancelled.",
        "b. rescinded.",
        "c. assigned.",
        "d. executed."
      ],
      "answer": "b. Rescission allows both parties to return to their original positions before the contract, so any monies exchanged must be returned."
    },
    {
      "question": "When is an offer considered to be accepted?",
      "choices": [
        "a. When the broker notifies the buyer that the seller has accepted the offer",
        "b. When the buyer gives a signed receipt to the broker to show the buyer has received the acceptance",
        "c. The moment the seller accepts the buyer’s offer",
        "d. One business day after the offer is accepted and signed by the seller"
      ],
      "answer": "a. Buyer notification is the key. It is not an accepted offer until the buyer is notified, and there is no lag time after that point."
    },
    {
      "question": "Additional conditions that must be satisfied before a sales contract is fully enforceable are called",
      "choices": [
        "a. binders.",
        "b. amendments.",
        "c. addenda.",
        "d. contingencies."
      ],
      "answer": "d. A contingency is any additional condition that must be satisfied before a sales contract is fully enforceable. A binder is a short version of a sales contract that is used until a more complete version is prepared. Amendments are changes to the existing content of a contract."
    },
    {
      "question": "The amount of the earnest money in a sales contract should",
      "choices": [
        "a. cover any expenses the buyer might incur if the seller defaults.",
        "b. discourage the buyer from walking away from the agreement.",
        "c. pay the broker’s commission.",
        "d. pay for any required inspections."
      ],
      "answer": "b. The amount of earnest money should be sufficient that the seller feels reassured that the buyer is committed to the purchase. Earnest money is not used to pay for inspections or the broker’s commission."
    },
    {
      "question": "The term statute of limitations is BEST described as the limitation on the",
      "choices": [
        "a. time period in which parties to a contract may bring a lawsuit to enforce their rights.",
        "b. parties’ ability to demand a “time is of the essence” clause in a sales contract.",
        "c. amount of damages that can be claimed in the event of breach.",
        "d. broker’s right to a commission."
      ],
      "answer": "a. Every state limits the time during which parties to a contract may bring a legal action to enforce their rights. Rights not enforced within the applicable time period are lost."
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