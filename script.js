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
        "a. Novation - Novation is a contract substitution and is not related to home equity.",
        "b. An adjustable-rate mortgage - This would not provide income for travel, and the couple is retired.",
        "c. A reverse mortgage - A reverse mortgage allows homeowners aged 62 or older to borrow money against their home equity.",
        "d. A growing equity mortgage - This would require higher payments over time, which would not be suitable for their situation."
      ],
      "answer": "c. A reverse mortgage allows the couple to borrow money against the equity in their home and is not repaid until they die or move out."
    },
    {
      "question": "A document that indicates that a loan has been made is called a",
      "choices": [
        "a. promissory note - A promissory note serves as evidence of the loan made.",
        "b. mortgage - A mortgage provides security for the loan but does not indicate the loan itself.",
        "c. deed of trust - A deed of trust is a security document but does not indicate the loan itself.",
        "d. satisfaction - A satisfaction or release indicates that the loan has been fully repaid."
      ],
      "answer": "a. A promissory note is the legal document showing that a loan has been made."
    },
    {
      "question": "A homeowner defaults on a mortgage and the lender forecloses. The lender’s foreclosure suit is filed on March 15, and a court-ordered sale is to occur on August 10. If the homeowner attempts to redeem the property on August 1, which of these statements applies?",
      "choices": [
        "a. The homeowner is exercising a statutory right of redemption - This right applies after the foreclosure sale in some states.",
        "b. The homeowner is exercising an equitable right of redemption - The homeowner has the equitable right to redeem before the sale.",
        "c. The homeowner's attempt to redeem the property is too early; by statute, the homeowner must wait until after the sale - The homeowner can redeem the property before the sale.",
        "d. The homeowner cannot redeem the property after a foreclosure suit is filed - Redemption is possible until the sale is complete."
      ],
      "answer": "b. The homeowner has the right to exercise the equitable right of redemption before the foreclosure sale."
    },
    {
      "question": "A house is listed for $250,000. It is purchased for $230,000, with a 20% down payment and the balance financed with a fixed-rate mortgage at 5%. The lender charges four points. If there are no other closing costs involved, and the buyer made an earnest money deposit of $2,000, how much money does the buyer need at closing?",
      "choices": [
        "a. $7,360 - This is only the cost of the points.",
        "b. $26,000 - This amount is much lower than the total needed.",
        "c. $46,000 - This is just the down payment.",
        "d. $51,360 - This is the total after accounting for the down payment, points, and the earnest money deposit."
      ],
      "answer": "d. The buyer needs $51,360 at closing after the down payment and points are calculated and the earnest money deposit is subtracted."
    },
    {
      "question": "One afternoon, a client calls a real estate broker. 'My lender just told me that my note and mortgage is a negotiable instrument,' says the client. 'What does that mean?' Which of these would be the broker’s BEST response?",
      "choices": [
        "a. That’s great! It means the lender is willing to negotiate on the interest rate.",
        "b. Oh no! That means the mortgage can’t be assumed by the next person you sell to.",
        "c. Don’t worry. That means the mortgage can be sold by the lender, but your terms are not affected.",
        "d. Uh-oh! That means we have to go back to the sellers and ask them to pay the points."
      ],
      "answer": "c. Negotiable instruments are transferable, meaning the note and mortgage can be sold on the secondary market without affecting the borrower’s terms."
    },
    {
      "question": "A deed of trust involves all of these terms EXCEPT",
      "choices": [
        "a. lender - The lender is the beneficiary in a deed of trust.",
        "b. borrower - The borrower is the trustor in a deed of trust.",
        "c. trustee - The trustee holds legal title in a deed of trust.",
        "d. mortgagor - A mortgagor is specific to a mortgage, not a deed of trust."
      ],
      "answer": "d. The mortgagor refers to the borrower in a mortgage, not a deed of trust."
    },
    {
      "question": "In a lien theory state, a buyer purchases property and gives the seller a mortgage as part of the purchase price. The buyer is the borrower and the seller is the lender. Which of these statements is true?",
      "choices": [
        "a. The buyer retains only equitable title to the property - The buyer retains both legal and equitable title in a lien theory state.",
        "b. If the buyer defaults on the loan, the seller always must undergo a formal foreclosure proceeding to recover the security - The need for formal foreclosure proceedings depends on state law and the mortgage agreement.",
        "c. The buyer has given legal title to the seller - The buyer retains legal title in lien theory states.",
        "d. The seller has only a lien interest in the property - In lien theory states, the seller holds a lien, not legal title."
      ],
      "answer": "d. In a lien theory state, the seller has only a lien interest, while the buyer retains legal and equitable title."
    },
    {
      "question": "A basic form homeowners insurance policy provides coverage against",
      "choices": [
        "a. floods - Floods are covered under a separate flood insurance policy.",
        "b. fire, lightning, and smoke damage - A basic form policy covers fire, lightning, and smoke damage.",
        "c. damage due to the weight of ice, snow, or sleet - This is typically covered under a broad-form policy.",
        "d. falling objects - This is also covered under a broad-form policy."
      ],
      "answer": "b. A basic form homeowners insurance policy provides coverage against fire, lightning, and smoke damage."
    },
    {
      "question": "A mortgage company charges borrowers a 1.5% loan origination fee. A house is purchased for $210,000, with a $50,000 down payment. The buyer applies for a mortgage to cover the balance. What will the mortgage company charge as a fee if the asking price of the house was $235,000?",
      "choices": [
        "a. $2,400 - This is the calculation: ($210,000 - $50,000) × 1.5%.",
        "b. $3,150 - This calculation is incorrect based on the balance of the mortgage.",
        "c. $3,525 - This calculation is also incorrect.",
        "d. $3,750 - The asking price is irrelevant in this case."
      ],
      "answer": "a. The loan origination fee is $2,400, calculated based on the mortgage balance, not the asking price."
    },
    {
      "question": "A mortgage document contains the clause: 'In the event of Borrower’s default under the terms of this Agreement, Lender may declare the entire unpaid balance of the debt due and payable immediately.' This clause is called",
      "choices": [
        "a. a hypothecation clause - This refers to offering property as security without giving up possession.",
        "b. an acceleration clause - This allows the lender to demand full repayment if the borrower defaults.",
        "c. a defeasance clause - This clause requires the lender to release the mortgage once the loan is fully paid.",
        "d. a release clause - This clause refers to the release of part or all of the property from the mortgage upon certain conditions."
      ],
      "answer": "b. An acceleration clause allows the lender to declare the entire loan due and payable in case of default by the borrower."
    },
    {
      "question": "This month, a homeowner made the last payment on a mortgage loan. The lender must execute a",
      "choices": [
        "a. release deed - A release deed is not executed in mortgage satisfaction.",
        "b. promissory note - A promissory note is not related to the final payment.",
        "c. possessory note - This is not applicable in mortgage loans.",
        "d. satisfaction of mortgage - This document indicates the loan has been fully repaid."
      ],
      "answer": "d. The lender must execute a satisfaction of mortgage when the loan is fully repaid."
    },
    {
      "question": "A growing equity mortgage is also called a",
      "choices": [
        "a. straight loan - A straight loan refers to interest-only payments.",
        "b. balloon payment loan - A balloon payment loan requires a large final payment.",
        "c. rapid-payoff mortgage - A growing equity mortgage is designed for rapid payoff.",
        "d. reverse mortgage - A reverse mortgage allows older homeowners to draw on equity."
      ],
      "answer": "c. A growing equity mortgage is also called a rapid-payoff mortgage because it allows for faster loan repayment."
    },
    {
      "question": "A buyer purchases property for $45,000 in cash and assumes the seller’s outstanding mortgage balance of $98,500. The lender executes a release for the seller. The buyer fails to make any mortgage payments, and the lender forecloses. At the foreclosure sale, the property is sold for $75,000. Based on these facts, unless state law provides anti-deficiency protection, who is liable, and for what amount?",
      "choices": [
        "a. The seller is solely liable for $23,500 - The seller was released from the mortgage by the lender.",
        "b. The buyer is solely liable for $23,500 - The buyer is responsible for the remaining deficiency.",
        "c. The buyer and the seller are equally liable for $23,500 - The seller was released from liability.",
        "d. The buyer is solely liable for $30,000 - This does not correctly calculate the deficiency."
      ],
      "answer": "b. The buyer is solely liable for $23,500 because the lender released the original borrower."
    },
    {
      "question": "The decision whether to buy or rent should involve consideration of",
      "choices": [
        "a. whether or not the property is located in a title theory state - This does not directly affect the decision to buy or rent.",
        "b. the terms of the security agreement - This is more relevant to the loan terms, not the buy/rent decision.",
        "c. housing affordability and current mortgage interest rates - These are key considerations in the buy/rent decision.",
        "d. the availability of a reverse mortgage - This is typically not a factor in buy/rent decisions."
      ],
      "answer": "c. Housing affordability and current mortgage interest rates are critical factors in deciding whether to buy or rent."
    },
    {
      "question": "A borrower defaulted on a mortgage loan, leaving an unpaid balance of $95,000. After receiving only $85,000 from the sale of the property, the lender filed for a",
      "choices": [
        "a. lis pendens - This gives notice of a pending lawsuit.",
        "b. release deed - A release deed is not applicable here.",
        "c. satisfaction piece - This is used when a loan is repaid.",
        "d. deficiency judgment - A deficiency judgment is filed when the sale proceeds do not cover the loan balance."
      ],
      "answer": "d. The lender filed for a deficiency judgment to recover the remaining balance after the sale."
    },
    {
      "question": "The owner of a parcel of property defaulted on the purchase loan and the trustee immediately sold the property to recover the debt. The trustee acted under the terms of the security instrument. Based on these facts, which of these statements is TRUE?",
      "choices": [
        "a. The exercise of this power of sale clause is an example of strict foreclosure - Strict foreclosure does not involve a sale.",
        "b. The trustee’s sale of the property was illegal unless the owner’s state permits a so-called friendly foreclosure - The sale was legal under a power of sale clause.",
        "c. The exercise of this power of sale clause is an example of nonjudicial foreclosure - Nonjudicial foreclosure allows the trustee to sell the property without going to court.",
        "d. The owner could have exercised the statutory right of redemption at any time prior to the trustee’s sale of the property - Statutory redemption usually applies after the sale."
      ],
      "answer": "c. The trustee’s sale was an example of nonjudicial foreclosure under the power of sale clause."
    },
    {
      "question": "The difference between the interest rate that the lender charges and what the investor demands can be made up by charging",
      "choices": [
        "a. discount points - Discount points help to bridge the gap between what the lender charges and what investors require.",
        "b. loan origination fees - Loan origination fees cover the cost of making the loan.",
        "c. satisfaction fees - Satisfaction fees are used to indicate that the loan is repaid.",
        "d. underwriting fees - Underwriting fees cover the risk analysis of the loan."
      ],
      "answer": "a. Discount points help close the gap between what the lender charges and what investors demand."
    },
    {
      "question": "What is the term that refers to a lender charging an interest rate that is higher than that permitted by law?",
      "choices": [
        "a. Alienation - Alienation refers to the transfer of property ownership.",
        "b. Usury - Usury is the illegal act of charging excessive interest rates.",
        "c. Hypothecation - Hypothecation refers to using property as collateral for a loan.",
        "d. Defeasance - Defeasance is a clause that voids the mortgage when the loan is repaid."
      ],
      "answer": "b. Usury refers to charging an interest rate higher than permitted by law."
    },
    {
      "question": "Parties to lending agreements are referred to by different terms. Which of these refers to the same party?",
      "choices": [
        "a. Borrower = beneficiary",
        "b. Borrower = mortgagor",
        "c. Trustee = borrower",
        "d. Trustor = mortgagee"
      ],
      "answer": "b. The borrower is also known as the mortgagor."
    },
    {
      "question": "The lender wants to call the entire note due and payable if the borrower stops making payments, so the security instrument must include",
      "choices": [
        "a. an acceleration clause - This clause allows the lender to demand full repayment if the borrower defaults.",
        "b. a defeasance clause - This clause requires the lender to release the mortgage upon repayment.",
        "c. an alienation clause - This clause refers to transferring the property title.",
        "d. a prepayment clause - This clause outlines penalties or conditions for early loan repayment."
      ],
      "answer": "a. An acceleration clause allows the lender to declare the entire loan due if the borrower stops making payments."
    },
    {
      "question": "When a deed of trust is the security instrument, which party usually chooses the trustee?",
      "choices": [
        "a. The borrower - The borrower typically does not choose the trustee.",
        "b. The lender - The lender usually chooses the trustee.",
        "c. The devisee",
        "d. The county government"
      ],
      "answer": "b. The lender typically chooses the trustee in a deed of trust."
    },
    {
      "question": "Lenders charge a loan origination fee to",
      "choices": [
        "a. guard against charges of usury",
        "b. cover the losses involved if the borrower repays the loan before the end of the loan term",
        "c. cover the expenses involved in generating the loan",
        "d. guard against losses in the event of a short sale"
      ],
      "answer": "c. Lenders charge a loan origination fee to cover the expenses involved in generating the loan."
    },
    {
      "question": "How does an acceleration clause help lenders?",
      "choices": [
        "a. Without the acceleration clause, lenders would have to sue the borrower for every overdue payment.",
        "b. Lenders would rather foreclose on property than hold a long-term loan.",
        "c. It results in a deed in lieu of foreclosure rather than the default process.",
        "d. It sets out the provisions for the impound account."
      ],
      "answer": "a. An acceleration clause allows the lender to declare the entire loan due after a default, avoiding the need to sue for each missed payment."
    },
    {
      "question": "After a foreclosure sale, what responsibility does the purchaser have for the mortgage and any junior liens?",
      "choices": [
        "a. The purchaser pays off the mortgage after the sale, but the junior lienholders receive nothing.",
        "b. The mortgage holder receives funds from the sale, but the purchaser must pay off the junior lienholders to obtain title.",
        "c. The purchaser must pay off both the mortgage and junior lienholders after the sale.",
        "d. The purchaser has no responsibility because the purchaser receives the property title unencumbered by the mortgage and junior liens."
      ],
      "answer": "d. After a foreclosure sale, the purchaser has no responsibility for the mortgage or junior liens, as the title is cleared of all encumbrances."
    },
    {
      "question": "What is a major consideration for a lender accepting a deed in lieu of foreclosure?",
      "choices": [
        "a. The lender takes the real estate subject to all junior liens.",
        "b. The lender gains rights to private mortgage insurance.",
        "c. The process is lengthy and involves a lawsuit.",
        "d. It is an adverse element in the borrower’s credit history."
      ],
      "answer": "a. A major consideration for a lender accepting a deed in lieu of foreclosure is that the lender takes the property subject to all junior liens."
    },
    {
      "question": "By controlling interest rates and the amount that lenders must keep in reserve, the Federal Reserve System",
      "choices": [
        "a. insures loans made to consumers - The Federal Reserve does not directly insure loans, other agencies like the FDIC are involved in insuring deposits.",
        "b. affects the job market - The Federal Reserve has an indirect influence on the job market through its policies but does not directly control employment.",
        "c. maintains sound credit conditions - The Federal Reserve aims to maintain stable economic growth, price stability, and sound credit conditions through monetary policy.",
        "d. makes direct loans to buyers - The Federal Reserve does not directly lend to consumers; it operates at the level of banks and financial institutions."
      ],
      "answer": "c. The Federal Reserve maintains sound credit conditions, but it does not make direct loans to consumers and does not insure loans made to consumers."
    },
    {
      "question": "A lender who collects payments, processes them, and follows up on loan delinquencies is said to",
      "choices": [
        "a. increase the yield to the lender - Increasing the yield typically involves raising interest rates or extending the loan, not processing payments.",
        "b. service the loan - Loan servicing includes collecting payments, processing them, and handling delinquency follow-ups for the lender or investor.",
        "c. insure loan payments - Loan servicing does not involve insuring payments but managing the loan on behalf of the lender.",
        "d. underwrite the loans - Underwriting refers to the process of assessing the risk of issuing a loan before it is approved."
      ],
      "answer": "b. In addition to the income directly related to making loans, some lenders derive income from servicing loans for other mortgage lenders or investors."
    },
    {
      "question": "The primary mortgage market lenders that have most recently branched out into making mortgage loans are",
      "choices": [
        "a. credit unions - Traditionally focused on consumer loans, credit unions have expanded into the mortgage market in recent years.",
        "b. endowment funds - Endowment funds are typically used by institutions like universities for investments, not direct mortgage lending.",
        "c. insurance companies - Insurance companies do make real estate investments, but their primary focus is not on originating mortgage loans.",
        "d. savings associations - Savings associations have been involved in the mortgage market for a long time, not a recent development."
      ],
      "answer": "a. Credit unions were known for short-term consumer loans but have more recently branched out into originating mortgage loans."
    },
    {
      "question": "The Federal Deposit Insurance Corporation (FDIC) does which of these?",
      "choices": [
        "a. Administers Freddie Mac and Ginnie Mae - Freddie Mac and Ginnie Mae are administered by separate government entities, not the FDIC.",
        "b. Administers Freddie Mac only - The FDIC is not involved in the administration of Freddie Mac, which is a government-sponsored enterprise.",
        "c. Insures deposits in participating institutions up to $250,000 per depositor, per account - The FDIC insures bank deposits to protect consumers in case of a bank failure.",
        "d. Services loans - The FDIC does not service loans; it regulates and insures deposits in financial institutions."
      ],
      "answer": "c. Deposits in participating institutions are covered up to the specified limit, which is currently $250,000 per depositor, per account."
    },
    {
      "question": "One way a borrower can obtain a conventional mortgage loan with a lower down payment than 20% of the purchase price is by",
      "choices": [
        "a. obtaining a package loan - A package loan covers real estate and personal property but does not affect down payment amounts.",
        "b. obtaining a blanket loan - A blanket loan covers multiple properties but does not reduce down payment requirements.",
        "c. obtaining private mortgage insurance - Private mortgage insurance allows borrowers to qualify for lower down payments by reducing the lender's risk.",
        "d. obtaining permission from the FDIC - The FDIC does not regulate down payment requirements for conventional loans."
      ],
      "answer": "c. Private mortgage insurance provides the lender with funds in the event that the borrower defaults on the loan."
    },
    {
      "question": "A package loan includes",
      "choices": [
        "a. real and personal property - A package loan typically includes both real estate and personal items such as appliances.",
        "b. private mortgage insurance - Private mortgage insurance protects the lender but is not related to package loans.",
        "c. multiple parcels or lots - This is characteristic of a blanket loan, not a package loan.",
        "d. cash for the construction of improvement on real estate - A construction loan, not a package loan, provides financing for improvements."
      ],
      "answer": "a. Package loans usually include items such as drapes, refrigerator, dishwasher, and other appliances as part of the sales price of the home."
    },
    {
      "question": "To qualify for most conventional loans, the borrower’s monthly housing expenses and total other monthly obligations cannot exceed what percent of the total gross monthly income?",
      "choices": [
        "a. 28% - 28% is typically the limit for housing expenses alone, not total monthly obligations.",
        "b. 36% - For conventional loans, the borrower's total monthly obligations, including housing, cannot exceed 36% of gross monthly income.",
        "c. 41% - This percentage is typically used for FHA loans, not conventional loans.",
        "d. 45% - 45% may apply to certain loan programs, but it's generally higher than the standard for conventional loans."
      ],
      "answer": "b. To be considered a conforming loan that can be sold in the secondary market, the borrower’s monthly housing expenses and total other monthly obligations must not exceed 36% of total monthly gross income."
    },
    {
      "question": "What does private mortgage insurance cover?",
      "choices": [
        "a. Pays the lender if the borrower dies - Life insurance covers death, not private mortgage insurance.",
        "b. Reimburses the cosigner if the borrower defaults - Private mortgage insurance protects the lender, not cosigners.",
        "c. Protects the top 20% to 30% of the loan against borrower default - Private mortgage insurance covers a portion of the loan to reduce the lender's risk in case of default.",
        "d. Pays the borrower if the borrower loses the house to a title claim - Title insurance, not private mortgage insurance, covers claims against title."
      ],
      "answer": "c. Private mortgage insurance, usually required for loans more than 80% of value, provides security to the lender if the borrower defaults."
    },
    {
      "question": "Regulation Z generally applies to",
      "choices": [
        "a. a credit transaction secured by a residence - Regulation Z applies to consumer credit transactions involving real estate.",
        "b. business loans - Regulation Z does not apply to business loans, which are governed by other regulations.",
        "c. commercial loans - Commercial loans are not covered by Regulation Z, which deals with consumer loans.",
        "d. agricultural loans of more than $25,000 - Agricultural loans over $25,000 are excluded from Regulation Z requirements."
      ],
      "answer": "a. The truth-in-lending law, implemented by Regulation Z, generally applies to a credit transaction secured by a residence."
    },
    {
      "question": "The amount of the loan a veteran can obtain under the VA’s loan guarantee program is determined by",
      "choices": [
        "a. the VA, which set a dollar limit on the loan - The VA guarantees loans but does not set specific loan amounts.",
        "b. the lender and the qualification of the buyer - The lender determines the loan amount based on the borrower's qualifications, and the VA guarantees part of the loan.",
        "c. the appraised value of the property purchased - The appraised value affects the loan amount, but the final decision is based on buyer qualification.",
        "d. loan qualification criteria established by the VA - The VA has criteria, but the lender ultimately determines the loan amount."
      ],
      "answer": "b. There is no VA dollar limit on the amount of the loan a veteran can obtain; the limit is determined by the lender and the qualification of the buyer."
    },
    {
      "question": "The VA-approved property appraisal is stated in the",
      "choices": [
        "a. certificate of reasonable value - The CRV is a VA appraisal that sets the property’s market value.",
        "b. broker’s price opinion - A broker’s price opinion is an estimate by a real estate broker, not related to VA loans.",
        "c. certificate of eligibility - The certificate of eligibility verifies a veteran’s entitlement to a VA loan but does not determine property value.",
        "d. guarantee certificate - There is no specific VA document called a guarantee certificate."
      ],
      "answer": "a. The certificate of reasonable value (CRV) states the property’s current market value based on a VHA-approved appraisal."
    },
    {
      "question": "Intermediaries who bring borrowers and lenders together are",
      "choices": [
        "a. endowment funds - Endowment funds are investment funds and do not function as intermediaries between borrowers and lenders.",
        "b. mortgage brokers - Mortgage brokers connect borrowers and lenders but do not lend their own money.",
        "c. insurance companies - Insurance companies offer policies but are not intermediaries in real estate lending.",
        "d. credit unions - Credit unions are direct lenders, not intermediaries."
      ],
      "answer": "b. Mortgage brokers do not loan their own money; they are intermediaries who bring borrowers and lenders together."
    },
    {
      "question": "The Homeowner’s Protection Act of 1998 (HPA) requires that the lender automatically",
      "choices": [
        "a. lower the interest rate on a mortgage - The HPA does not regulate interest rates; it addresses mortgage insurance.",
        "b. terminate the private mortgage insurance payment if the borrower has accrued at least 22% equity in the home - The HPA mandates automatic termination of PMI when the borrower reaches 22% equity.",
        "c. provide for a home equity line of credit - The HPA does not deal with home equity lines of credit.",
        "d. allow for refinancing terms if requested by the borrower - The HPA does not regulate refinancing terms."
      ],
      "answer": "b. The borrower must also be current on mortgage payments."
    },
    {
      "question": "A house sold for $240,000 and the buyer obtained a loan for $220,000. If the lender charges three points, how much will the buyer pay in points?",
      "choices": [
        "a. $5,335 - This is not the correct amount based on 3 points of the loan value.",
        "b. $6,600 - Three points on a $220,000 loan equals $6,600.",
        "c. $6,950 - This is higher than 3 points of the loan value.",
        "d. $7,540 - This is significantly more than 3 points of the loan value."
      ],
      "answer": "b. The buyer will pay $6,600: $220,000 × 3% = $6,600. Points are charged on the loan amount, not the sale price."
    },
    {
      "question": "On which type of loan can the borrower prepay provided a penalty also is paid?",
      "choices": [
        "a. Loans sold to Fannie Mae and Freddie Mac - Prepayment penalties are generally not allowed on these loans.",
        "b. FHA loans - FHA loans do not have prepayment penalties.",
        "c. VA loans - VA loans also do not have prepayment penalties.",
        "d. None of these - Prepayment penalties are rare in the current lending market."
      ],
      "answer": "d. Prepayment penalties are fairly unusual in today’s market."
    },
    {
      "question": "The Equal Credit Opportunity Act prohibits discrimination in the lending process based on",
      "choices": [
        "a. race - Race is one of the protected categories under the ECOA.",
        "b. religion - Religion is also a protected category under the ECOA.",
        "c. marital status - The ECOA prohibits lenders from discriminating based on marital status.",
        "d. all of these - The ECOA protects borrowers from discrimination based on race, religion, marital status, and more."
      ],
      "answer": "d. The ECOA prohibits discrimination in granting credit based on race, color, religion, national origin, sex, marital status, age, and receipt of public assistance."
    },
    {
      "question": "The asking price for a home was $585,000; the buyer offered $565,000 and the seller accepted. The appraised value of the home is $560,000. The buyer plans to pay $94,600 in cash and take out a mortgage for the remainder. What is the LTV for this property?",
      "choices": [
        "a. 82% - This LTV is slightly too low based on the loan and appraised value.",
        "b. 83% - This LTV is still lower than the correct calculation.",
        "c. 84% - The loan-to-value ratio (LTV) for this property is 84%, calculated based on the appraised value.",
        "d. 85% - This LTV is too high based on the appraised value."
      ],
      "answer": "c. The LTV on the loan amount is 84%. LTV = loan amount ÷ appraised value or sale price (whichever is lower)."
    },
    {
      "question": "A buyer is purchasing property from a seller who bought the property on December 20, 2012, with an FHA loan and who has lived there ever since. Because of its favorable terms, the buyer would like to assume the seller’s mortgage. Is this possible?",
      "choices": [
        "a. Yes, there are no restrictions on the assumption of this mortgage - FHA loans originated after 1989 require buyer qualification.",
        "b. Yes, but the buyer will have to undergo the complete buyer qualification process - The buyer must undergo a full qualification process to assume the loan.",
        "c. Yes, but the buyer will have to undergo a creditworthiness review only - Creditworthiness reviews are not sufficient for loans after 1989.",
        "d. No, this FHA loan is not assumable - FHA loans are assumable but with qualification requirements."
      ],
      "answer": "b. Because the loan was made after December 15, 1989, an assumption is not permitted without complete buyer qualification."
    },
    {
      "question": "A veteran served for six months on active duty in Vietnam in 1967. In 1998, the veteran was killed in a skiing accident. The veteran’s surviving spouse wishes to make a down payment on a condominium and wants to obtain a VA-guaranteed loan. Is the surviving spouse entitled to a VA-guaranteed loan?",
      "choices": [
        "a. Yes, the unremarried spouse of a qualified veteran is entitled to a VA-guaranteed loan - The unremarried spouse of a veteran who died in service or from a service-related injury can qualify.",
        "b. Yes, whether or not the surviving spouse remarries, the surviving spouse is entitled to the same VA benefits that the veteran was during the veteran’s lifetime - Remarriage can affect the spouse’s entitlement.",
        "c. No, the veteran’s death was not service-related - Only spouses of veterans who died from service-related causes are eligible.",
        "d. No, the veteran did not meet the time-in-service criteria for qualified veterans - The veteran did meet time-in-service requirements, but the cause of death is relevant."
      ],
      "answer": "c. Only the surviving spouse of a veteran whose death is service-related may use the veteran’s entitlements."
    },
    {
      "question": "Which of these makes direct loans to qualified borrowers?",
      "choices": [
        "a. VA - The VA guarantees loans but does not make direct loans to borrowers.",
        "b. FSA - The Farm Service Agency makes direct loans to farmers and ranchers.",
        "c. Fannie Mae - Fannie Mae purchases loans on the secondary market but does not issue loans directly.",
        "d. FHA - The FHA insures loans but does not directly issue them."
      ],
      "answer": "b. The Farm Service Agency will guarantee loans made and serviced by private lenders and guaranteed for a specific percentage."
    },
    {
      "question": "A buyer is purchasing a fully furnished condominium unit. In this situation, the buyer would be MOST likely to use a",
      "choices": [
        "a. package loan - A package loan includes both real estate and personal property, such as the furnishings in this condo.",
        "b. blanket loan - A blanket loan covers multiple properties but would not apply to this condo purchase.",
        "c. wraparound loan - A wraparound loan involves a new loan that wraps around an existing one, which does not apply here.",
        "d. buydown - A buydown lowers the interest rate on a mortgage, not the type of loan."
      ],
      "answer": "a. A loan secured by a fully furnished condominium unit is secured by both real and personal property."
    },
    {
      "question": "Foreclosure sales of FHA-insured homes are conducted by:",
      "choices": [
        "a. FHA - The FHA insures loans but does not conduct foreclosure sales.",
        "b. HUD - HUD is responsible for managing foreclosures of FHA-insured homes.",
        "c. VA - The VA handles loans for veterans but not FHA-insured loans.",
        "d. the lender - While lenders may initiate foreclosure, HUD conducts the sale for FHA-insured properties."
      ],
      "answer": "b. HUD is responsible for conducting foreclosures of FHA-insured homes."
    },
    {
      "question": "The Equal Credit Opportunity Act allows lenders to consider which of the following factors in evaluating an applicant’s creditworthiness?",
      "choices": [
        "a. Religion - Religion cannot be considered under the ECOA.",
        "b. Past credit history - Lenders may consider an applicant's credit history when determining creditworthiness.",
        "c. Income from public assistance - Lenders must include public assistance income but cannot discriminate based on its source.",
        "d. Marital status - Marital status cannot be considered, except in specific cases where it directly affects loan approval."
      ],
      "answer": "b. Lenders may deny a loan request because of the borrower’s previous credit history."
    },
    {
      "question": "Lenders that make conventional loans to sell in the secondary mortgage market follow the standardized forms and guidelines issued by Fannie Mae and",
      "choices": [
        "a. the FSA - The Farm Service Agency is unrelated to the secondary mortgage market.",
        "b. the FHA - The FHA insures loans but does not set standards for the secondary mortgage market.",
        "c. Ginnie Mae - Ginnie Mae deals with government-insured loans, not conventional loans.",
        "d. Freddie Mac - Freddie Mac, like Fannie Mae, sets standards for conventional loans sold on the secondary market."
      ],
      "answer": "d. Freddie Mac and Fannie Mae are the dominant participants in the secondary mortgage market."
    },
    {
      "question": "Which of these may lawfully be used as part of a loan application evaluation process?",
      "choices": [
        "a. The applicant’s religious beliefs - Religious beliefs are protected under the ECOA and cannot be considered.",
        "b. The fact that the borrower is over 40 years old - Age cannot be considered unless the applicant is too young to enter into a legal contract.",
        "c. A credit score - Lenders may lawfully consider credit scores when evaluating a loan application.",
        "d. None of these - One of the options, credit score, can be used, so this is not accurate."
      ],
      "answer": "c. A credit score is one factor that can be lawfully considered in evaluating a loan application."
    },
    {
      "question": "The real estate financing market is comprised of",
      "choices": [
        "a. the primary and secondary mortgage markets - This refers to the institutions that originate and trade mortgages but does not include other influences.",
        "b. Fannie Mae and Ginnie Mae - These are major players but are not the entire market.",
        "c. the primary and secondary mortgage markets, plus government influences such as the Federal Reserve system - The real estate financing market includes the primary and secondary mortgage markets as well as government influences like the Federal Reserve.",
        "d. none of these - There are components missing in this answer."
      ],
      "answer": "c. These are the three basic components of the real estate financing market."
    },
    {
      "question": "A 16-year-old female applied for a conventional loan in order to purchase a condominium. The lender denied the application, citing the applicant’s age as the reason for the denial. Which of these is TRUE?",
      "choices": [
        "a. The lender violated the ECOA because the applicant is female and sex cannot be a lending consideration - Sex discrimination is prohibited, but the denial was based on age.",
        "b. The lender violated the ECOA because lending decisions cannot be based on age - Age can be considered if the applicant is too young to legally sign a contract.",
        "c. The lender lawfully denied the application because the applicant was under 18 and therefore was too young to legally sign a contract - Minors cannot enter into legally binding contracts, making this a lawful denial.",
        "d. None of these - One of the options is accurate, so this is not correct."
      ],
      "answer": "c. A lender may not consider age unless the applicant is too young to legally sign a contract."
    },
    {
      "question": "What helps lenders reduce the risk on a conventional mortgage loan with a high LTV?",
      "choices": [
        "a. Private mortgage insurance - Private mortgage insurance protects the lender if the borrower defaults on a high-LTV loan.",
        "b. Flood insurance - Flood insurance protects against property damage but does not reduce the lender's financial risk.",
        "c. Sale-and-leaseback arrangement - A sale-and-leaseback arrangement is typically used for commercial properties, not residential loans.",
        "d. Home equity - Home equity provides security for the loan but is not a tool used to reduce risk on a new high-LTV loan."
      ],
      "answer": "a. Private mortgage insurance provides lenders with funds in case of borrower default and encourages lenders to make higher LTV loans."
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