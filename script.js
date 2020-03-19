const speedyClick = {};
let score = 0;
let average = 0;

speedyClick.init = function () {
}

// On Start button click
$("#start").on("click", function () {

    // Reset score
    score = 0;
    average = 0;
    $("#results").html(``)

    // Hide Start button 
    $("#start").attr("style", "display: none");

    // Update instructions
    $("#instructions").html(`Click anywhere!`)
    $("#instructions").attr("style", "animation: blinkingText 1s infinite;");

    // Turn cursor into pointer
    $("#clicker").attr("style", "cursor:pointer");

    // Start timer
    let timeleft = 10;
    let timer = setInterval(function () {

        // Start countdown bar animation
        $(".countdownBar").attr("style", "display: inline-block;");

        // When time runs out
        if (timeleft <= 0) {

            // Stop countdown
            clearInterval(timer);
            $("#countdown").html(``)

            // Hide countdown bar animation
            $(".countdownBar").attr("style", "display: none;");

            // Display score
            $("#results").html(`You got ${score} clicks, an average of ${average} clicks per second!`)
            $("#results").attr("style", "background-color: #87CEFA;");

            // Load Twitter button
            $("#twitter").html(`<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just got a new high score on Speedy Click! Think you can beat my score?" data-url="https://lucassilbernagel.github.io/lucasSilbernagelProjectThree/" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`);

            // Display Try Again button
            $(".again").attr("style", "display: inline-block;");

            // Reset instructions
            $("#instructions").html(``)
            $("#instructions").attr("style", "animation: none;");

            // Change cursor back to arrow
            $("#clicker").attr("style", "cursor:arrow");

            alert("Time's up!")

            // While countdown is running
        } else {
            // Display seconds remaining
            $("#results").html(`${timeleft} seconds remaining`)
            $("#results").attr("style", "background-color: none;");
        }

        timeleft -= 1;
    }, 1000);

});

// When Try Again button is clicked
$("#again").on("click", function () {

    // Hide Try Again button
    $(".again").attr("style", "display: none;");

    // Display Start button
    $("#start").attr("style", "display: inline-block;");

    // Reset results
    $("#results").html(``)

    // Hide Twitter button
    $("#twitter").html(``);

    // Reset instructions
    $("#instructions").html(`Click the Start button, and you will have 10 seconds to click your screen as many times as possible. You can use your mouse, spacebar, or touch screen. Good luck!`)
});

function increaseScore() {
    score = score + 1;
    average = score / 10;
}

// Log number of clicks to increase score
$("#clicker").on("click", increaseScore);

// Can use spacebar instead of mouse to log "clicks" and increase score
$("body").keydown (function (event) {
    if (event.keyCode === 32) {
        increaseScore();
    }
});

// Document ready
$(function () {
    speedyClick.init();
});