var playerScore = 0;
var compScore = 0;
var tempScore = 0;
    
var maxScore = Math.floor((Math.random()*101)+19);

var fst = Math.floor((Math.random()*11)+1);
var sec = Math.floor((Math.random()*11)+1);
var thi = Math.floor((Math.random()*11)+1);
var fou = Math.floor((Math.random()*11)+1);

$(document).ready(function() {

var checker = scoreChecker;

$("div.thing").text("The score to match is : " + maxScore);

$(first).on("click", function first () {
    tempScore += fst;
    $("div.thing2").text("Your current score is: " + tempScore);
    checker();
});

$(second).on("click", function second () {
    tempScore += sec;
    $("div.thing2").text("Your current score is: " + tempScore);
    checker();
});

$(third).on("click", function third () {
    tempScore += thi;
    $("div.thing2").text("Your current score is: " + tempScore);
    checker();
});

$(fourth).on("click", function fourth () {
    tempScore += fou;
    $("div.thing2").text("Your current score is: " + tempScore);
    checker();
});

function scoreChecker() {

    if (tempScore > maxScore) {
        
        compScore += 1;
        tempScore = 0;
        $(".losses").text("Losses: " + compScore);
        maxScore = Math.floor((Math.random()*101)+19);
        fst = Math.floor((Math.random()*11)+1);
        sec = Math.floor((Math.random()*11)+1);
        thi = Math.floor((Math.random()*11)+1);
        fou = Math.floor((Math.random()*11)+1);
        $("div.thing").text("The score to match is : " + maxScore);
        $("div.thing2").text(tempScore);

    };

    if (tempScore === maxScore) {
        
        playerScore += 1;
        tempScore = 0;
        $(".wins").text("Wins: " + playerScore);
        maxScore = Math.floor((Math.random()*101)+19);
        fst = Math.floor((Math.random()*11)+1);
        sec = Math.floor((Math.random()*11)+1);
        thi = Math.floor((Math.random()*11)+1);
        fou = Math.floor((Math.random()*11)+1);
        $("div.thing").text("The score to match is : " + maxScore);
        $("div.thing2").text(tempScore);

    };

};

});