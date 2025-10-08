// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {
  // Global variables withen the main function after loading
    const usernameInput = document.getElementById("username");
    const startBtn = document.getElementById("start");
    const nextBtn = document.getElementById("next-btn");
    const resetBtn = document.getElementById("reset-btn")
    const playAgainBtn = document.getElementById("restart-btn");
    let userName = '';

    // listen to statr btn click !
    startBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    userName = username;
    // making sure that the field is not empty or have only spaces !
    if (username === "") {
        alert("Please enter your name!");
        return;
    }
    // get the current level from the radio input 
    const selectedLevel = document.querySelector('input[name="level"]:checked').value;
    
    // hide the intro section
    document.getElementById("intro-section").classList.add("hidden");
    // display the quiz section by removing the "hidden" class
    document.getElementById("quiz-section").classList.remove("hidden");

    // passes the selected level to runGame function
    runGame(selectedLevel);
    });












});