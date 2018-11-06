$(document).ready(function () {



    

        // ? for the user
        //   aswers with buttons
     
        //  timer  -> if time is up, then ? is wrong, move to next ?
        //  correct -> increase correctAcc, move to next ?
        //  incorrect -> increase incorrectAcc, move to next ?
        //  at the end - show results

        var timer;
        var countDown = 10;
     
        var correctAcc = 0;
        var incorrectAcc = 0;
        var currentTime;
        var questions = [
            {
                questionOne: "Which hurricane devastated New Orleans in 2005?",
                answers: ["Ike", "Katrina", "Albert", "Doris"],
                correctAnswer: "Katrina",
            }
        ];
    
    // sets the timer disply to 5 sec on load
    $("#display-timer").text("Time Left = " + countDown + " sec");
    $("#questions").text(questions[0].questionOne);
    $("#choiceA").append(questions[0].answers[0]);
    $("#choiceB").append(questions[0].answers[1]);
    $("#choiceC").append(questions[0].answers[2]);
    $("#choiceD").append(questions[0].answers[3]);
    // sets the interval
    function timerInterval() {
        timer = setInterval(counter, 1000);
    };

    function resetCountDown() {
        countDown = 10;
    }


    //counts down the timer
    function counter() {
        countDown--;
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
           
            if (countDown === 0 || countDown === 10) {
                $("#display-timer").empty();
                $("#display-timer").text("Time Remaining: " + countDown  + " seconds");
                $("#questions").empty();
                $("#questions").append(questions[0].questionOne); 

                timerInterval();
                counter();
            }
            
        });
        //stores the value of button a to a var and checks that input against the correct answer
        $("#choiceA").on("click", function() {
            
                if (countDown > 0 && countDown < 10) {
                    var buttonVal = questions[0].answers[0];
                
                    if (buttonVal === questions[0].correctAnswer) {
                        correctAcc++;
                        $("#correct").empty();
                        $("#correct").append("Correct Answers: " + correctAcc);
                    } else {
                        incorrectAcc++;
                        $("#incorrect").empty();
                        $("#incorrect").append("Incorrect Answers: " +  incorrectAcc); 
                    }
                }
            
        });


        //stores the value of button b to a var
        $("#choiceB").on("click", function(){
            if (countDown > 0 && countDown < 10) {
                var buttonVal = questions[0].answers[1];

                    if (buttonVal === questions[0].correctAnswer) {
                        correctAcc++;
                        $("#correct").empty();
                        $("#correct").append("Correct Answers: " + correctAcc);
                    } else {
                        incorrectAcc++;
                        $("#incorrect").empty();
                        $("#incorrect").append("Incorrect Answers: " +  incorrectAcc); 
                    }
            }
        });

        //stores the value of button c to a var
        $("#choiceC").on("click", function(){
            if (countDown > 0 && countDown < 10) {
                var buttonVal = questions[0].answers[2];

                    if (buttonVal === questions[0].correctAnswer) {
                        correctAcc++;
                        $("#correct").empty();
                        $("#correct").append("Correct Answers: " + correctAcc);
                    } else {
                        incorrectAcc++;
                        $("#incorrect").empty();
                        $("#incorrect").append("Incorrect Answers: " +  incorrectAcc); 
                    }
                    
            }
        });

        //stores the value of button d to a var
        $("#choiceD").on("click", function(){
            if (countDown > 0 && countDown < 10) {
                var buttonVal = questions[0].answers[3];

                if (buttonVal === questions[0].correctAnswer) {
                    correctAcc++;
                    $("#correct").empty();
                    $("#correct").append("Correct Answers: " + correctAcc);
                } else {
                    incorrectAcc++;
                    $("#incorrect").empty();
                    $("#incorrect").append("Incorrect Answers: " +  incorrectAcc); 
                }

            }
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