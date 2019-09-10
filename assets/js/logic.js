// Wait until document is loaded "ready.""
$(document).ready(function() {

// VARIBLES
    // Declare var win, loose, total, numberToGet.
    var win = 0;
    var loose = 0;
    var total = 0;
    var numberToGet = 0;
    
// FUNCTIONS
    // Create function for numberToGet with a random value 19-120, at the start of each round, display on screen.

    // UPDATE DISPLAY
    // updateDisply will update win_Display, lose_Display, total_Display. 
    function updateDisplay() {
        $('#win_Display').text(win)
        $('#lose_Display').text(loose)
        $('#numberToGet_Display').text(numberToGet)
        $('#total_Display').text(total)
    };   

    // Value of each gem created in createCrystal
    function gemValue() {
        return Math.floor(Math.random() * 12) + 1;
    };


    function createCrystals() {
        // Select id gemHolder and clear it.
        $('#gemHolder').html('');

        // Loop through and create four crystals <img class='gem' gemValue='gemValue'
        for (var i = 0; i < 4; i++) { 
            var crystalImg = $("<img>");            
            crystalImg.addClass("gem")
            crystalImg.attr("data-name", gemValue)
            crystalImg.attr("src", "assets/images/crystal" + i + ".jpg"); // assign source image value of assets/images/crystal/ i .jpg.
            $("#gemHolder").append(crystalImg); // Selecting gemHolder append above
        }
    }


    // RESETROUND
    // resetRound sets total to 0, picks new values for each crystal, picks new value for numberToGet, updates display.
    function resetRound() {
        total = 0;
        numberToGet = Math.floor(Math.random() * 102) + 19;
        createCrystals();
        updateDisplay();

        // On button click select this data-name, += gemValue. 
        $(".gem").on("click", function() {
            
            var gemValue = ($(this).attr("data-name"));
            gemValue = parseInt(gemValue);
            total += gemValue;
            updateDisplay();
            
                if(numberToGet === total) {
                    win++;
                    alert("Winner winner chicken dinner!");
                    resetRound();
                }

                else if (total >= numberToGet) {
                    loose++;
                    alert("Better luck next round.");
                    resetRound();
                }
        });
    };

    // Start game
    resetRound()    

})// Close of function line 2.


    /* PseudoCode
    
    // Write in jQuery:
    // Wait until document is ready.
    // Declare var win, loose, total, numberToGet.
    // Create 4 crystals dynamically, for loop? Use function randomGemNumber to assign values to each gemValue.
    // Create function for numberToGet with a random value 19-120, at the start of each round, display on screen.
    // Create function randomGemNumber for each gem to assign each a random value between 1-12, at the start of each round.
    // Use total++ to add each crystal click to the total, display on screen.
    // If the total > numberToGet then proceed.
    // Else if total = numberToGet, win++, alert you win, resetRound.
    // Else total < numberToGet, lose++, alert you loose, resetRound.
    
    */