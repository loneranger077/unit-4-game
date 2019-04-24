var playerScore = 0;
var compScore = 0;
var tempScore = 0;

$(document).ready(function() {

var maxScore = Math.floor((Math.random()*101)+19);

$("div.thing").text(maxScore);

var fst = Math.floor(Math.random*10);
var sec = Math.floor(Math.random*10);
var thi = Math.floor(Math.random*10);
var fou = Math.floor(Math.random*10);

while (tempScore<maxScore); {

$(first).on("click", function first () {
    tempScore = tempScore + fst;
    $("div.thing").text(tempScore);
});

$(second).on("click", function second () {
    tempScore = tempScore + sec;
    $("div.thing").text(tempScore);
});

$(third).on("click", function third () {
    tempScore = tempScore + thi;
    $("div.thing").text(tempScore);
});

$(fourth).on("click", function fourth () {
    tempScore = tempScore + fou;
    $("div.thing").text(tempScore);
});

}

if (tempScore > maxScore); {
    compScore = compScore + 1;
    tempScore = 0;
    $("#losses").text("Losses: " + compScore);
}

if (tempScore = maxScore); {
    playerScore = playerScore + 1;
    tempScore = 0;
    $("#wins").text("Wins: " + playerScore)
}

});