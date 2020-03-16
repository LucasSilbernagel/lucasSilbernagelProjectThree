const speedyClick = {};
let score = 0;
let average = 0;

speedyClick.init = function () {
}

// On click, reset score and start timer
// When timer runs out, display score
$("#start").on("click", function(){
    score = 0;
    average = 0;
    $("#results").html(``)
    setTimeout(
        function() {
            $("#results").html(`<p>Score: ${score}</p> <p>Average: ${average}</p>`)
            $("#results").html(`<p>You clicked ${score} times in 10 seconds, an average rate of ${average} clicks per second!</p>`)
        }, 10000
    )
});

// Log number of clicks to score
$("#clicker").on("click", function () {
    score = score+1;
    average = score/10;
});

// Document ready
$(function () {
    speedyClick.init();
});