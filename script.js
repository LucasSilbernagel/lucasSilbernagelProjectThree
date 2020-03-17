const speedyClick = {};
let score = 0;
let average = 0;

speedyClick.init = function () {
}

// On click, reset score
$("#start").on("click", function () {
    score = 0;
    average = 0;
    $("#results").html(``)

    // Hide start button when clicked
    $("#start").attr("style", "visibility:hidden");

    // Update instructions
    $("#instructions").html(`Click anywhere!`)
    $("#instructions").attr("style", "animation: blinkingText 1s infinite;");

    // Turn cursor into pointer
    $("#clicker").attr("style", "cursor:pointer");

    // Start timer
    let timeleft = 10;
    let timer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(timer);
            $("#start").attr("style", "visibility:visible");
            $("#start").html(`Start!`)
            $("#countdown").html(``)

            // Display score
            $("#results").html(`You got ${score} clicks, an average of ${average} clicks per second!`)
            $("#results").attr("style", "background-color: #87CEFA;");

            // Reset instructions
            $("#instructions").html(`Click the Start button, and you will have 10 seconds to click your screen as many times as possible. Good luck!`)
            $("#instructions").attr("style", "animation: none;");

            // Change cursor back to arrow
            $("#clicker").attr("style", "cursor:arrow");

        } else {
            $("#results").html(`${timeleft} seconds remaining`)
            $("#results").attr("style", "background-color: none;");
        }

        timeleft -= 1;
    }, 1000);

});

function increaseScore() {
    score = score + 1;
    average = score / 10;
}

// Log number of clicks to score
$("#clicker").on("click", function () {
    increaseScore();
});

// Document ready
$(function () {
    speedyClick.init();
});