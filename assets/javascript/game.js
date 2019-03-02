

// on document load run function to start game

$(document).ready(function () {

    // get random number for user to match
    var randomNumber = Math.floor(Math.random() * 101 + 19);


    $('#randomNumber').text(randomNumber);

    // get random point values for crystals
    var crystOne = Math.floor(Math.random() * 11 + 1);
    var crystTwo = Math.floor(Math.random() * 11 + 1);
    var crystThree = Math.floor(Math.random() * 11 + 1);
    var crystFour = Math.floor(Math.random() * 11 + 1);



    var userScore = 0;
    var wins = 0;
    var losses = 0;

    console.log("wins " + wins);

    $('#userscore').text(userScore);
    $('#win-counter').text(wins);
    $('#lose-counter').text(losses);



    // --------reset the game ------------
    function reset() {

        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber)

        $('#randomNumber').text(randomNumber);

        var crystOne = Math.floor(Math.random() * 11 + 1);
        var crystTwo = Math.floor(Math.random() * 11 + 1);
        var crystThree = Math.floor(Math.random() * 11 + 1);
        var crystFour = Math.floor(Math.random() * 11 + 1);

        userScore = 0;
        $('#userscore').text(userScore);
    }




    // ---- Functions to capture score from clicking on crystals------
    $('#one').on('click', function () {
        userScore = userScore + crystOne;
        displayScore()
        winCheck()
    })


    $('#two').on('click', function () {
        userScore = userScore + crystTwo;
        displayScore()
        winCheck()
    })


    $('#three').on('click', function () {
        userScore = userScore + crystThree;
        displayScore()
        winCheck()
    })


    $('#four').on('click', function () {
        userScore = userScore + crystFour;
        displayScore()
        winCheck()
    });




    // ----------Definfing Win Loss cases---------
    function winner() {
        alert("You won!");
        wins++;
        $('#win-counter').text(wins);
        console.log("wins " + wins);
        reset();
    }
    //addes the losses to the userScore
    function loser() {
        alert("You lose!");
        losses++;
        $('#lose-counter').text( losses);
        console.log("loses " + losses);

        reset()
    }

    // -------Display score-------------------

    function displayScore() {
        console.log("New userScore= " + userScore);
        $('#userscore').text("Total: " + userScore);
    }

    // ---------Check for Winner---------------
    function winCheck() {
        if (userScore == randomNumber) {
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }
    }


}); 