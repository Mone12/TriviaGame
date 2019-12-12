$(document).ready(function(){
var trivia = [
    {
        question:'What is the name of The Powerpuff Girls evil counterparts?',
        options:['The Gangreen Gang', 'The Amoeba Boys','The RowdyRuff Boys'],
        answer:2,
    },

    {
        question:'In Hey Arnold!, what city did Arnold live in?',
        options:['Nashville','Boston','Hillwood','Albuquerque'],
        answer:2,
    },

    {
        question:'In Captain Planet, the planteers each possessed an element power: Earth, Fire, Wind, Water, and what?',
        options:['Heart','Air','Cloud','Thunder'],
        answer: 0,
    },

    {
        question:'Who is Dexters archenemy?',
        options:['Anti-Dexter','Jeezes','DeeDee','Mandark'],
        answer:3,
    },

    {
        question:'What is the name of this show?',
        options:['Card Captors','Tokyo Mew Mew','Sailor Moon','The Winx Club'],
        answer:2,
    },
    
    {
        question:'What is Dougs last name?',
        options:['Funnie','Skeeter','Johnson'],
        answer: 0,
    },
    
    {
        question:'What was the teachers name in The Magic School Bus?',
        options:['Mrs Drizzle','Mrs Frizzle','School Bus Driver','Professor Molly'],
        answer:1,
    },
    
    {
        question:'What did Pinky and the Brain do every night?',
        options:['Try to escape from the lab','Conquer the world','Build a mouse trap','Cheese it'],
        answer:1,
    },

    {
        question:'Which anime series always came on right after Sailor Moon on Toonami?',
        options:['Dragonball Z','Yu-gi-oh!','Naruto','Pokemon'],
        answer:0,
    },

    {
        question:'What were the names of Tommy and Dils Parents in Rugrats?',
        options:['Diane and Steve Pickle','Didi and Stu Pickles', 'Debbie and Stan Olives','Deeds and Steward Okra'],
        answer:1,
    }];
    
// counter variables
var twentySeconds = 20;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// holder variables
var definePush = [];
var userGuess = "";
var timerRuns = false;
var intervalid;

// game starts when uses click "#start-button"

$("#start-button").on("click",function(){
    $("#start-button").hide();
    displayQuestion();
    runTimer();
    for (var i = 0; i < trivia.length; i++) {
        definePush.push(trivia[i]);
        
    };

    function displayQuestion(){

    };
    function runTimer(){
    intervalid = setInterval(decrement,1000);
    }
})

    function decrement(){
    twentySeconds--;

    $("#time-left").html("<h3>Time Remaining:" + twentySeconds + "</h3>");

   
        if (twentySeconds === 0) {
        unanswered++;
        stop();
        console.log(unanswered);

      }
}

    function stop(){
        clearInterval(intervalid);
}




// When user clicks start button, 20 second starts
// hide start page/show questions page
// show question 1
// create function for user input
// if user guesses the right answer than hid question and show answer for five seconds
// if timers runs out show answer and display next question plus restart timer
// create function for results after last question
});