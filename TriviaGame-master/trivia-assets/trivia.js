   //constants
   const questionDiv = document.getElementById("question");
   const choiceOne = document.getElementById("choice-one");
   const choiceTwo = document.getElementById("choice-two");
   const choiceThree = document.getElementById("choice-three");
   const choiceFour = document.getElementById("choice-four");
   const choiceFive = document.getElementById("choice-five");
   const scoreTracker = document.getElementById("valueTracker");
   var showTime = document.getElementById("Timer");
   var imageFinish = document.getElementById("imageFinish");
   var imageFinish2 = document.createElement("img");
   var blue =  "trivia-assets/right_answers.jpg";

   var questions = [{
     question: "Whose house was burned to the ground?",
     choices: ["James May", "Jeremy Clarkson", "Richard Hammond", "An audience member", "A producer of TopGear"],
     correctAnswer: "Jeremy Clarkson"
   }, {
     question: "Who tried to make a car out of mud?",
     choices: ["James May", "Jeremy Clarkson", "Richard Hammond", "The stig", "A celebrity guest"],
     correctAnswer: "James May"
   }, {
     question: "Who won Battleship?",
     choices: ["The Stig", "The American", "James May", "Richard Hammond", "Jeremy Clarkson"],
     correctAnswer: "Richard Hammond"
   }, {
     question: "Who got punched in the face?",
     choices: ["The American", "A producer of TopGear", "Jeremy Clarkson", "Richard Hammond", "A local"],
     correctAnswer: "A producer of TopGear"
   }, {
     question: "Who totaled a 1.4MM Croatian super car while subsequently injuring himself?",
     choices: ["The stig", "James May", "A celebrity guest", "Richard Hammond", "Jeremy Clarkson"],
     correctAnswer: "Richard Hammond"
   }]
   

   var questionCounter = 0; //1
   var scoreCounter = 1;  
   var selections = [];
   var intervalOne = setInterval(decrease, 1000);
   var timer = 15;



   function initGame(){
       initQuestion();
       addEvents();
       decrease();
       // questionTime();
   }


   function decrease() {
    //    var tOne = stopWatch.qOne--;
    //    var tTwo = stopWatch.qTwo--;
    //    var tThree = stopWatch.qThree--;
    //    var intervalFirst = setInterval(tOne, 1000);
    //    var intervalSecond = setInterval(tTwo, 1000);

    //    console.log(stopWatch.qOne);
    //    showTime.textContent = stopWatch.qOne;

    //    if (stopWatch.qOne === 0) {
    //     clearInterval(intervalFirst);
    //     initQuestion()
    //     setInterval(tTwo, 1000);
    //     console.log(stopWatch.qTwo);
    //     showTime.textContent = stopWatch.qTwo;
    //    }
    timer--;
    showTime.textContent = timer;
    if ( timer === 0) {
        alert("out of time")
        initQuestion()
    }

    };

    function questionTimer (timer) {
        decrease()


    }

   
   function initQuestion() {
       if(questionCounter < questions.length){
           var currentQuestion = questions[questionCounter];
           questionDiv.textContent = currentQuestion.question;
           choiceOne.textContent = currentQuestion.choices[0];
           choiceTwo.textContent = currentQuestion.choices[1];
           choiceThree.textContent = currentQuestion.choices[2];
           choiceFour.textContent = currentQuestion.choices[3];
           choiceFive.textContent = currentQuestion.choices[4];    
           questionCounter++;
           timer = 30;
       }else {
           document.write(scoreCounter);
        //    imageFinish.appendChild(blue);
       } 
   }

   function addEvents(){
       var buttons = document.querySelectorAll(".answer-choice");
       for (var i = 0; i < buttons.length; i++) {
           buttons[i].addEventListener('click', function(e) {
               var userChoice = this.textContent;
               if(userChoice === questions[questionCounter - 1].correctAnswer){
                   alert("you're correct!");
                   scoreTracker.textContent = scoreCounter++
               }else {
                   alert("not correct");
               }
               console.log(questionCounter);
               initQuestion();
           });
       }
   }

   function winnerLoser () {
       if ( scoreTracker === 5) {
           imageFinish.appendChild(blue);

       }
   }

   initGame();



  