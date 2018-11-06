$(document).ready(function () {



    

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

    // sets the interval
    function timerInterval() {
        timer = setInterval(counter, 1000);
    };
    //counts down the timer
    function counter() {
        countDown--;
        $("#display-timer").text("Time Left = " + countDown + " sec");
        if (countDown <= 0) {
            clearInterval(timer);

        }
    };
        // sets the timmer on the page
        $("#playGame").on('click', function(){
    
            $("#display-timer").empty();
            $("#display-timer").text("Time Remaining: " + countDown + " seconds");
            timerInterval();
            counter();

            
        });

   
     
     
 //Mike's code for timerbelow
     function timer() {
        intervalID = setInterval(countdown, 1000)
     };
     
     function countdown() {
        time--;
        $("#time-display").text("Time left: " + time);
        if (time === 0) {
            unAnswered++;
            console.log(unAnswered);
            stop();
            $("#time-display").text("Time's up!");
            displayQuestion(quizQuestions2[questionIndex++]);
            reset();
        }
     };
     
     function stop() {
        clearInterval(intervalID)
     };
     
     function reset() {
        clearInterval(intervalID);
        time = 25;
        timer();
     };

    //  function newQuestion() {
    //     timer = setInterval(countDown, 1000);
    //     $("#questAndAnswer").html(questions.question);
    //     for( var i=0; i < questions.answers.length; i++ ){
    //         $("#questAndAnswer").append('<button>' + questions.answers[i] + '</button>');
    //     }
    //  }
     
     });