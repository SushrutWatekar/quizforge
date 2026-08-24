interface Question {
    question: string;
    options: string[];
    answer: string;
}


async function getQuestions(): Promise<void> {
    const response = await fetch("http://127.0.0.1:8000/questions");
    const questions: Question[] = await response.json();

    const questionsContainer = document.getElementById("questions");

    for (const question of questions) {
        const questionElement = document.createElement("p");

        questionElement.textContent = question.question;

        for (const option of question.options) {
            const optionButton = document.createElement("button");

            optionButton.textContent = option;

            questionElement.appendChild(optionButton);
        }

        if (questionsContainer !== null) {
            questionsContainer.appendChild(questionElement);
        }
    }
}

getQuestions();