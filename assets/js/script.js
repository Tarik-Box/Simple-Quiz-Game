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

    // Restart game << will be displayed after the game
    playAgainBtn.addEventListener("click", () => {
        // if clicked * page will be reloaded 
        window.location.reload();
    });

    function runGame(level) {
        let questions = []; //* empty list to fill with questions,options and answers depends on selected level !
        switch (level) {
            case "easy":
            // easy level questions
            questions = [
                { question: "From which continent is China?", options: ["Asia", "Europe", "Africa"], answer: "Asia" },
                { question: "What color is the sky on a clear day?", options: ["Blue", "Green", "Yellow"], answer: "Blue" },
                { question: "How many legs does a cat have?", options: ["2", "4", "6"], answer: "4" },
                { question: "Which one is a fruit?", options: ["Carrot", "Apple", "Potato"], answer: "Apple" },
                { question: "Which sport uses a ball and a goal?", options: ["Football", "Tennis", "Boxing"], answer: "Football" },
                { question: "How many days are there in a week?", options: ["5", "7", "10"], answer: "7" },
                { question: "What’s the capital of France?", options: ["Berlin", "Paris", "Rome"], answer: "Paris" },
                { question: "Which one is a Football Player?", options: ["Ronaldo", "Tom Hanks", "Trump"], answer: "Ronaldo" },
                { question: "What animal says 'meow'?", options: ["Dog", "Cat", "Cow"], answer: "Cat" },
                { question: "Which planet is closest to the Sun?", options: ["Mercury", "Earth", "Mars"], answer: "Mercury" },
            ];
            break;

            case "med":
            // medium level questions
            questions = [
                { question: "Who won the World Cup 1998?", options: ["Brazil", "Germany", "France"], answer: "France" },
                { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific"], answer: "Pacific" },
                { question: "Which country invented pizza?", options: ["Italy", "France", "USA"], answer: "Italy" },
                { question: "What is the currency of Japan?", options: ["Dollar", "Yen", "Won"], answer: "Yen" },
                { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso"], answer: "Da Vinci" },
                { question: "How many players are on a football team on the field?", options: ["9", "10", "11"], answer: "11" },
                { question: "What year did man first walk on the moon?", options: ["1969", "1975", "1982"], answer: "1969" },
                { question: "Which city hosted the 2012 Olympics?", options: ["Beijing", "London", "Rio"], answer: "London" },
                { question: "What’s the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune"], answer: "Jupiter" },
                { question: "In which sport is 'Love' a score?", options: ["Tennis", "Basketball", "Hockey"], answer: "Tennis" },
            ];
            break;

        default:
            // hard level questions
            questions = [
                { question: "Which club won the first UEFA Champions League in 1993?", options: ["AC Milan", "Marseille", "Real Madrid"], answer: "Marseille" },
                { question: "What’s the chemical symbol for gold?", options: ["G", "Au", "Ag"], answer: "Au" },
                { question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Tesla"], answer: "Einstein" },
                { question: "Which country has the longest coastline?", options: ["Australia", "Canada", "Russia"], answer: "Canada" },
                { question: "What is the capital of New Zealand?", options: ["Wellington", "Auckland", "Christchurch"], answer: "Wellington" },
                { question: "Which footballer has the most Ballon d’Or awards (as of 2024)?", options: ["Messi", "Ronaldo", "Modrić"], answer: "Messi" },
                { question: "What is the smallest prime number?", options: ["1", "2", "3"], answer: "2" },
                { question: "Which element has the atomic number 1?", options: ["Oxygen", "Hydrogen", "Helium"], answer: "Hydrogen" },
                { question: "Who wrote the play 'Hamlet'?", options: ["Shakespeare", "Dickens", "Homer"], answer: "Shakespeare" },
                { question: "Which country hosted the 1982 FIFA World Cup?", options: ["Spain", "Italy", "Mexico"], answer: "Spain" },
            ];
        }

    // shuffle the questions
    questions = questions.sort(() => Math.random() - 0.5);

    let currentIndex = 0;
    let score = 0;

    displayQuestion(); // calling to display the questions withen quiz section 

    function displayQuestion() {
        const q = questions[currentIndex];
        // getting the question from the list above , and place it in the paragraph element "<p id="question"
        document.getElementById("question").textContent = q.question;

        // getting the unordered list from html to create li elements inside it 
        const optionsList = document.getElementById("options-list");
        optionsList.innerHTML = "";
        // shuffles the options
        let answers = q.options.sort(() => Math.random() - 0.5);

        // loop throgh the options 
        answers.forEach((option) => {
            const li = document.createElement("li");
            li.textContent = option;

            // listen to click on the list item
            li.addEventListener("click", () => {
            // passing the clicked option and the right answer to checkAnswer function
            checkAnswer(option, q.answer);
            });

            optionsList.appendChild(li);
        });
    }

    function checkAnswer(selected, correct) {
        const optionsList = document.getElementById("options-list");
        // we taking an arry from the options list 
        // Array.from ! >> new method ES6
        [...optionsList.children].forEach((li) => {
            if (li.textContent === correct) {
            // heighlight the correct answer no matter the selected answer is!
            li.classList.add("correct");
            // heighlight the selected answer also if its wrong
            } else if (li.textContent === selected) {
            li.classList.add("wrong");
            }
            li.style.pointerEvents = "none"; // disable multi clicks
        });

        // if the selected answer is the right answer , then add 1 to score 
        if (selected === correct) score++;
        // display next or restart btns
        nextBtn.classList.remove("hidden");
        resetBtn.classList.remove("hidden");
    }










    }
});