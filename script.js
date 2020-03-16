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

    // Start timer
    let timeleft = 10;
    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $("#start").html(`Start!`)

            // Display score
            $("#results").html(`You got ${score} clicks, an average of ${average} clicks per second!`)
            
        } else {
            document.getElementById("start").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);

});

// Log number of clicks to score
$("#clicker").on("click", function () {
    score = score + 1;
    average = score / 10;
});

// Document ready
$(function () {
    speedyClick.init();
});