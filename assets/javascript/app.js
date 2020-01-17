
$(document).ready(function() {
  const trivia = [
    {
      question: "What is the name of The Powerpuff Girls evil counterparts?",
      options: ["The Gangreen Gang", "The Amoeba Boys", "The RowdyRuff Boys"],
      answer: 2
    },

    {
      question: "In Hey Arnold!, what city did Arnold live in?",
      options: ["Nashville", "Boston", "Hillwood", "Albuquerque"],
      answer: 2
    },

    {
      question:
        "In Captain Planet, the planteers each possessed an element power: Earth, Fire, Wind, Water, and what?",
      options: ["Heart", "Air", "Cloud", "Thunder"],
      answer: 0
    },

    {
      question: "Who is Dexters archenemy?",
      options: ["Anti-Dexter", "Jeezes", "DeeDee", "Mandark"],
      answer: 3
    },

    {
      question: "Which is my favorite anime kids show?",
      options: [
        "Card Captors",
        "Tokyo Mew Mew",
        "Sailor Moon",
        "The Winx Club"
      ],
      answer: 2
    },

    {
      question: "What is Dougs last name?",
      options: ["Funnie", "Skeeter", "Johnson"],
      answer: 0
    },

    {
      question: "What was the teachers name in The Magic School Bus?",
      options: [
        "Mrs Drizzle",
        "Mrs Frizzle",
        "School Bus Driver",
        "Professor Molly"
      ],
      answer: 1
    },

    {
      question: "What did Pinky and the Brain do every night?",
      options: [
        "Try to escape from the lab",
        "Conquer the world",
        "Build a mouse trap",
        "Cheese it"
      ],
      answer: 1
    },

    {
      question:
        "Which anime series always came on right after Sailor Moon on Toonami?",
      options: ["Dragonball Z", "Yu-gi-oh!", "Naruto", "Pokemon"],
      answer: 0
    },

    {
      question: "What were the names of Tommy and Dils Parents in Rugrats?",
      options: [
        "Diane and Steve Pickle",
        "Didi and Stu Pickles",
        "Debbie and Stan Olives",
        "Deeds and Steward Okra"
      ],
      answer: 1
    }
  ];

  // counter variables
  var twentySeconds = 20;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var index = 0;

  // holder variables

  var definePush = [];
  var userGuess = "";
  var timerRuns = false;
  var intervalid;
  var Qtext;

  // game starts when uses click "#start-button"
  

  $("#start-button").on("click", function() {
    $("#start-button").hide();
    displayQuestion();
    secondsTimer();
    
  });

  function secondsTimer() {
    twentySeconds = 20;
    intervalid = setInterval(decrement, 1000);
  }

  // Displays seconds on HTML and counts 'twentySeconds' down
  function decrement() {
    twentySeconds--;

    $("#time-left").html("<h3>Time Remaining:" + twentySeconds + "</h3>");

    // timer restarts to 20 seconds after hitting zero and unanswered var goes up 1
    if (twentySeconds < 1) {
      unanswered++;
      messageUser("Time's up!!!");
      $("#answers-page").html("<h3>Correct answer is" + " " +trivia[index].options[trivia[index].answer] + "</h3>");
      
    }
  }

  // Function to displays questions
  function displayQuestion() {
    $("#questions-page").html("<h3>" + trivia[index].question + "</h3>");

    // for (let index = 0; index < trivia[i].question.length; index++) {

    // // loop choices for question
    $("#answers-page").empty();
    for (let j = 0; j < trivia[index].options.length; j++) {
      // create a button for the choices
      var b = $("<button>");
      b.addClass("choice-btn");
      b.attr("answer", j);
      b.text(trivia[index].options[j]);
      $("#answers-page").append(b);
    }
    $(".choice-btn").on("click", function() {
      var answer = $(this).attr("answer");
      console.log("clicked", answer);

      stop();
      // verify the response
      if (trivia[index].answer === parseInt(answer)) {
        correct++;
        messageUser("correct!");
      } else {
        incorrect++;
        messageUser("incorrect!");
      }
    });
  }

  function stop() {
    clearInterval(intervalid);
  }

  function messageUser(msg) {
    stop();
    $("#message").html(`<h4>${msg}</h4>`);
    setTimeout(next, 3000);
  }

  function next() {
    $("#message").empty();
    index++;
    if (index < trivia.length) {
      displayQuestion();
      secondsTimer();
    } else {
      results();
    }
  }

  // show the results
  function results() {
    console.log("stop", correct, incorrect, unanswered);
    stop();
    $("#time-left").hide();
    $("#questions-page").hide();
    $("#answers-page").hide();

    
    messageUser("Game Over! Here's Your Results:");

    $("#results-page").append("<h3>Correct:"+ correct + "</h3>"); 
    $("#results-page").append("<h3>Incorrect:"+ incorrect + "</h3>");
    $("#results-page").append("<h3>Unanswered:"+ unanswered + "</h3>");
    
    
  }




  function restart() {
    $("#results-page").hide();
    correct = 0;
    incorrect = 0;
    unanswered = 0;

    $("start-button").show()
    
      displayQuestion();
      secondsTimer();
    
  }

  
  
});
