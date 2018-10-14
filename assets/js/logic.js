// Wait until document is loaded "ready.""
$(document).ready(function() {

    // VARIBLES
    // Declare var win, loose, total, numberToGet.
    var win = 0;
    var loose = 0;
    var total = 0;
    var numberToGet = 0;

    resetRound()    
    

    // RESETROUND
    // resetRound sets total to 0, picks new values for each crystal, picks new value for numberToGet, updates display.
    function resetRound() {
        total = 0;
        clearCrystals()
        createCrystals()
        numberToGet = Math.floor(Math.random() * 102) + 19;
        updateDisplay();
    };
    
    // FUNCTIONS
    // Create function for numberToGet with a random value 19-120, at the start of each round, display on screen.
    // function numberToGet() {
    //     return Math.floor(Math.random() * 102) + 19;
    // };
    
    // UPDATE DISPLAY
    // updateDisply will update win_Display, lose_Display, total_Display. 
    function updateDisplay() {
        $('#win_Display').text(win)
        $('#lose_Display').text(loose)
        $('#numberToGet_Display').text(numberToGet)
        $('#total_Display').text(total)
    };   
 
    function clearCrystals() {

    }

    // Create img for each crystal.attr i,use function randomGemNumber to assign gem values to each crsytal.
    function createCrystals() {    
        for (var i = 0; i < 4; i++) { // Loop 4 times, once per crystal.
            if ($("gemHolder").attr("<img>"))
            $("<img>").remove("<img>")
            
            var crystalImg = $("<img>");            
            crystalImg.addClass("gem")
            crystalImg.attr("src", "assets/images/crystal" + i + ".jpg"); // assign source image value of assets/images/crystal/ i .jpg.
            crystalImg.attr("gemValue", gemValue());// add randomnumber to attr between 1-12.
            $("#gemHolder").append(crystalImg); // Selecting gemHolder append above
        }
    }

    // Value of each gem created in createCrystal
    function gemValue() {
        return Math.floor(Math.random() * 12) + 1;
    };
    
    // On button click select this gemValue, add gemValue to gemValue. 
    $(".gem").on("click", function() {
        var gemValue = ($(this).attr("gemValue"));
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

    
    // function total {}
    
// });


// $("button").click(function(){
//     $("p").append("<b>Appended text</b>");
// });


})// Close of function line 55.


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
    // Else total < numberToGet, loose++, alert you loose, resetRound.
    
    */