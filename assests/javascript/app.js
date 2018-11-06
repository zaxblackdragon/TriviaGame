$(document).ready(function () {



    

        // ? for the user
        //   aswers with buttons
     
        //  timer  -> if time is up, then ? is wrong, move to next ?
        //  correct -> increase correctAcc, move to next ?
        //  incorrect -> increase incorrectAcc, move to next ?
        //  at the end - show results

        var timer;
        var countDown = 5;
     
        var correctAcc = 0;
        var incorrect = 0;
        var currentQuestion;
        var questions = [
            {
                questionOne: "What is your Fav color?",
                answers: ["blue", "yellow"],
                correctAnswer: "yellow",
            }
        ];
    
    // sets the timer disply to 20 sec
    $("#display-timer").text("Time Left = " + countDown + " sec");
    // sets the interval
    function timerInterval() {
        timer = setInterval(counter, 1000);
    };

    function resetCountDown() {
        countDown = 5;
    }

    //counts down the timer
    function counter() {
        countDown--;
        var choiceButton = $("<button>");
        $("#display-timer").text("Time Left = " + countDown + " sec");
        if (countDown <= 0) {
            clearInterval(timer);
            $("#questions").empty();
            $("#questions").append("Times up, no more questions."); 
            resetCountDown();
        }

    };
        // starts the countdown
        //  bug in the counter when clicked more than once
        $("#playGame").on('click', function(){
            
            $("#display-timer").empty();
            $("#display-timer").text("Time Remaining: " + countDown + " seconds");
            $("#questions").text(questions[0].questionOne);
            timerInterval();
            counter();
          
        });


     
     
 //Mike's code for timerbelow
    //  function timer() {
    //     intervalID = setInterval(countdown, 1000)
    //  };
     
    //  function countdown() {
    //     time--;
    //     $("#time-display").text("Time left: " + time);
    //     if (time === 0) {
    //         unAnswered++;
    //         console.log(unAnswered);
    //         stop();
    //         $("#time-display").text("Time's up!");
    //         displayQuestion(quizQuestions2[questionIndex++]);
    //         reset();
    //     }
    //  };
     
    //  function stop() {
    //     clearInterval(intervalID)
    //  };
     
    //  function reset() {
    //     clearInterval(intervalID);
    //     time = 25;
    //     timer();
    //  };

    //  function newQuestion() {
    //     timer = setInterval(countDown, 1000);
    //     $("#questAndAnswer").html(questions.question);
    //     for( var i=0; i < questions.answers.length; i++ ){
    //         $("#questAndAnswer").append('<button>' + questions.answers[i] + '</button>');
    //     }
    //  }
     
     });