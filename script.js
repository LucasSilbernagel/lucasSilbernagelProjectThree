const speedyClick = {};
let score = 0;

speedyClick.init = function () {
}

// On click, reset score and start timer
// When timer runs out, display score
$("#start").on("click", function(){
    score = 0;
    $("#results").html(``)
    setTimeout(
        function() {
            $("#results").html(`Score: ${score}`)
        }, 10000
    )
});

// Log number of clicks to score
$("#clicker").on("click", function () {
    score = score+1;
});

// Document ready
$(function () {
    speedyClick.init();
});