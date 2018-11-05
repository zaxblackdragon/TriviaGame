$(document).ready(function () {
    $(document).on('click', function(){
        newQuestion();
    });
        // ? for the user
        //   aswers with buttons
     
        //  timer  -> if time is up, then ? is wrong, move to next ?
        //  correct -> increase correctAcc, move to next ?
        //  incorrect -> increase incorrectAcc, move to next ?
        //  at the end - show results
     
        var timer;
        var countDown = 20;
     
        var correctAcc = 0;
        var incorrect = 0;
        var currentQuestion;
        var questions = [
            {
                question: "What is your Fav color?",
                answers: ["blue", "yellow"],
                correctAnswer: "yellow",
            }
        ];
     function newQuestion() {
        timer = setInterval(countDown, 1000);
        $("#questAndAnswer").html(questions.question);
        for( var i=0; i < questions.answers.length; i++ ){
            $("#questAndAnswer").append('<button>' + questions.answers[i] + '</button>');
        }
     }
     
     });