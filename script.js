document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    let score = 0;
    let totalQuestions = 0;

    // Fetch the JSON file
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            totalQuestions = data.length;
            displayQuestion(data[currentQuestionIndex]);

            const nextButton = document.getElementById('next-question');
            nextButton.addEventListener('click', () => {
                currentQuestionIndex++;
                if (currentQuestionIndex < totalQuestions) {
                    resetState();
                    displayQuestion(data[currentQuestionIndex]);
                } else {
                    showResults();
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    function displayQuestion(questionObj) {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = '';

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.textContent = questionObj.question;
        quizContainer.appendChild(questionElement);

        const choicesList = document.createElement('ul');
        choicesList.className = 'choices';

        questionObj.choices.forEach(choice => {
            const choiceItem = document.createElement('li');
            choiceItem.textContent = choice;
            choiceItem.addEventListener('click', () => selectAnswer(choiceItem, questionObj.correctAnswer));
            choicesList.appendChild(choiceItem);
        });

        quizContainer.appendChild(choicesList);
    }

    function selectAnswer(choiceItem, correctAnswer) {
        const selectedAnswer = choiceItem.textContent;
        const isCorrect = selectedAnswer === correctAnswer;

        if (isCorrect) {
            choiceItem.classList.add('correct');
            score++;
        } else {
            choiceItem.classList.add('incorrect');
            document.querySelectorAll('.choices li').forEach(item => {
                if (item.textContent === correctAnswer) {
                    item.classList.add('correct');
                }
            });
        }

        document.querySelectorAll('.choices li').forEach(item => {
            item.removeEventListener('click', () => selectAnswer(item, correctAnswer));
            item.classList.add('disabled');
        });

        document.getElementById('next-question').style.display = 'block';
    }

    function resetState() {
        document.getElementById('next-question').style.display = 'none';
    }

    function showResults() {
        const quizContainer = document.getElementById('quiz-container');
        const resultsContainer = document.getElementById('results');

        quizContainer.innerHTML = '';
        resultsContainer.style.display = 'block';
        resultsContainer.textContent = `You scored ${score} out of ${totalQuestions}`;
    }
});
