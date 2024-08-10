document.addEventListener('DOMContentLoaded', () => {
    fetch('questions.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const questionsContainer = document.getElementById('questions');
            data.forEach((questionObj, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question');
                
                const questionTitle = document.createElement('h2');
                questionTitle.textContent = `${index + 1}. ${questionObj.question}`;
                questionDiv.appendChild(questionTitle);
                
                const choicesList = document.createElement('ul');
                choicesList.classList.add('choices');
                
                questionObj.choices.forEach(choice => {
                    const choiceItem = document.createElement('li');
                    choiceItem.textContent = choice;
                    choicesList.appendChild(choiceItem);
                });
                
                questionDiv.appendChild(choicesList);
                
                const answerDiv = document.createElement('div');
                answerDiv.classList.add('answer');
                answerDiv.textContent = `Answer: ${questionObj.answer}`;
                questionDiv.appendChild(answerDiv);
                
                questionsContainer.appendChild(questionDiv);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
