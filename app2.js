 // Correct answers for each question
 const answers = {
    a : 'Paris',
    b : '8',
    c: 'Newton',
    d:'100',
    e:'Charles Babbage'
};

let currentQuestion = 1;
score=10


function checkAnswer(questionNumber, selectedAnswer, button) {
    

    if (answers.a='paris') {
        score++; // Increment score if correct
    }
    if(answers.b='8'){
        score++
    }
    if(answers.c='newton'){
        score++
    }
    if(answers.d='100'){
        score++
    }
    if(answers.e='Charles Babbage'){
        score++
    }

    // Disable all buttons for the current question
    const buttons = button.parentElement.parentElement.querySelectorAll("button");
    buttons.forEach((btn) => (btn.disabled = true));

    // Enable the "Next" button
    document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
    // Hide current question
    document.getElementById(`q${currentQuestion}`).classList.remove("active");

    // Show next question or completion message
    currentQuestion++;
     const nextQuestion = document.getElementById(`q${currentQuestion}`);
     if (nextQuestion) {
         nextQuestion.classList.add("active");
         document.getElementById("prevBtn").disabled = currentQuestion === 1;
     } else {
        // Show completion message
        document.getElementById("completion").style.display = "block";
        document.getElementById("completion").innerHTML = `
            <h2>Congratulations! You've completed the quiz.</h2>
            <p>Your score is: ${score}<p/>
            <p>and your precentage is:${score/answers.length*100}%<p/>`
        document.querySelector(".nav-buttons").style.display = "none";
    }

    // Disable the "Next" button until the user answers the question
    document.getElementById("nextBtn").disabled = true;
 }

function prevQuestion() {
    // Hide current question
    document.getElementById(`q${currentQuestion}`).classList.remove("active");

    // Show previous question
    currentQuestion--;
    document.getElementById(`q${currentQuestion}`).classList.add("active");

    // Enable the "Next" button
    document.getElementById("nextBtn").disabled = false;

    // Disable the "Previous" button if on the first question
    document.getElementById("prevBtn").disabled = currentQuestion === 1;
}