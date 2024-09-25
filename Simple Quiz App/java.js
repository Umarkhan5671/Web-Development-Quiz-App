// Task # 2
// Problem: Simple Quiz App
// Write a JavaScript program that conducts a quiz for a user. The program should:

// Store a list of 5 questions and their correct answers in two arrays.
// Use a for loop to display each question using prompt and ask for the user's answer.
// Use if-else to check if the user's answer is correct.
// Keep track of how many answers are correct and how many are wrong.
// At the end, display the user's total score and a message based on their performance (using nested if for grading).
// Requirements:
// Use two arrays: one for the questions and one for the correct answers.
// Use a for loop to display the questions and capture the user's answer.
// Use if-else to compare the user's answer with the correct one.
// Use nested if statements to give feedback based on the score (like grading A, B, C, etc.).



var questions = [
    "📄 What does HTML stand for?",
    "🎨 Which CSS property is used to change the background color?",
    "🔠 What is the correct HTML element for the largest heading?",
    "📝 Which CSS property controls the text size?",
    "🔗 How do you create a hyperlink in HTML?"
];
var correctAnswers = ["HyperText Markup Language", "background-color", "h1", "font-size", "a"];


var correctCount = 0;
var wrongCount = 0;
var wrongAnswers = []; 

// Show quiz start message
alert("🧑‍🏫 Welcome to the Web Development Quiz!\n\nYou will be asked 5 questions about HTML and CSS. Let's get started!");

// Loop through each question
for (var i = 0; i < questions.length; i++) {
    var userAnswer = prompt(questions[i] + "\n\nYour Answer:").trim(); 

    // Check if the user's answer is correct
    if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
        correctCount++; 
    } else {
        wrongCount++; 
       
        wrongAnswers.push({
            question: questions[i],
            userAnswer: userAnswer,
            correctAnswer: correctAnswers[i]
        });
    }
}


var totalQuestions = questions.length;
var score = (correctCount / totalQuestions) * 100;
var grade;


if (score === 100) {
    grade = "🏆 A+ (Excellent)";
} else if (score >= 80) {
    grade = "🎉 A (Great job)";
} else if (score >= 60) {
    grade = "👍 B (Good effort)";
} else if (score >= 40) {
    grade = "🙂 C (Needs improvement)";
} else {
    grade = "😞 F (Failed)";
}


var resultMessage = "🎓 Quiz Result Summary:\n";
resultMessage += "----------------------------\n";
resultMessage += "Total Questions: " + totalQuestions + "\n";
resultMessage += "✅ Correct Answers: " + correctCount + "\n";
resultMessage += "❌ Wrong Answers: " + wrongCount + "\n";
resultMessage += "📊 Score: " + score + "%\n";
resultMessage += "🏅 Grade: " + grade + "\n";
resultMessage += "----------------------------\n";


if (wrongCount > 0) {
    resultMessage += "\n📚 Review of Wrong Answers:\n";
    for (var j = 0; j < wrongAnswers.length; j++) {
        resultMessage += (j + 1) + ". " + wrongAnswers[j].question + "\n";
        resultMessage += "   ❌ Your Answer: " + wrongAnswers[j].userAnswer + "\n";
        resultMessage += "   ✅ Correct Answer: " + wrongAnswers[j].correctAnswer + "\n";
    }
} else {
    resultMessage += "🎉 Perfect Score! All answers are correct!";
}

alert(resultMessage);
