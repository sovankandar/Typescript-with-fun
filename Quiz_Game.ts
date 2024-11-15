
interface Question {
    question:string;
    options:string[];
    answer:string;
}

const quizQuestions: Question[]=[
    {
        question: "What is the capital of France?",
        options: ["a) Paris", "b) Rome", "c) Berlin", "d) Madrid"],
        answer: "a"
    },
    {
        question: "Which language is used for web development?",
        options: ["a) Python", "b) C++", "c) JavaScript", "d) Java"],
        answer: "c"
    },
    {
        question: "What is 5 + 3?",
        options: ["a) 5", "b) 8", "c) 10", "d) 15"],
        answer: "b"
    }
];

function startQuiz(){
     let score:number = 0;
    console.log("Welcome to Quiz! Answer by typing 'a','ab','c','d'")

    quizQuestions.forEach((q, index)=>{
        console.log(`${index + 1}. ${q.question}`);
        q.options.forEach(option=>console.log(option));

        const userAnswer:string = prompt("Enter Your Answer: ")
        if(userAnswer?.toLowerCase() === q.answer){
            console.log("Correct!\n");
            score++;
        }else{
            console.log(`Wrong! The correct answer was ${q.answer}`)
        }
    });
    console.log('Quiz Over!')
    console.log(score/quizQuestions.length)
}

startQuiz();