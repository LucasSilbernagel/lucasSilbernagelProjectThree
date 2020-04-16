const speedyClick = {};

speedyClick.startGame = function () {
    
    // On Start button click
    $("#start").on("click", function () {
        
        // Reset score
        let score = 0;
        let average = 0;
        $("#results").html(``);

        // Function to increase score and calculate average click speed
        function increaseScore() {
            score = score + 1;
            average = score / 10;
        }

        // Log number of clicks to increase score
        $("#clicker").on("click", increaseScore);

        // Can use spacebar instead of mouse to log "clicks" and increase score
        $("body").keydown(function(event) {
            if (event.keyCode === 32) {
            increaseScore();
            }
        });

        // Hide Start button while playing the game
        $("#start").attr("style", "display: none");

        // Update instructions
        $("#instructions").html(`Click anywhere!`);
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
            $("#countdown").html(``);

            // Hide countdown bar animation
            $(".countdownBar").attr("style", "display: none;");

            // Load Twitter button
            $("#twitter").html(
                `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just got a new high score on Speedy Click! Think you can beat my score?" data-url="https://lucassilbernagel.github.io/lucasSilbernagelProjectThree/" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
            );

            // Display score
            $("#results").html(
                `You got ${score} clicks, an average of ${average} clicks per second!`
            );
            $("#results").attr("style", "background-color: #87CEFA;");

            // Display Try Again button
            $(".again").attr("style", "display: inline-block;");

            // Reset instructions
            $("#instructions").html(``);
            $("#instructions").attr("style", "animation: none;");

            // Change cursor back to arrow
            $("#clicker").attr("style", "cursor:arrow");

            alert("Time's up!");

        // While countdown is still running
        } else {
        // Display seconds remaining
        $("#results").html(`${timeleft} seconds remaining`);
        $("#results").attr("style", "background-color: none;");
        }

        timeleft -= 1;
        }, 1000);
    });
};

speedyClick.tryAgain = function () {
    // When Try Again button is clicked
    $("#again").on("click", function () {
        // Reload the page
        location.reload();
    });
};

speedyClick.init = function() {
    speedyClick.startGame();
    speedyClick.tryAgain();
};

// Document ready
$(function() {
    speedyClick.init();
});