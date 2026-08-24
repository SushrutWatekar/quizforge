from fastapi import FastAPI

app = FastAPI()

questions = [
    {
        "question": "What is 2 + 2?",
        "options": ["3", "4", "5", "6"],
        "answer": "4"
    },
    {
        "question": "What language runs directly in the browser?",
        "options": ["Python", "Java", "JavaScript", "C++"],
        "answer": "JavaScript"
    }
]

@app.get("/questions")
def get_questions():
    return questions