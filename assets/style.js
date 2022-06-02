const questions = [
    {
        question: "In what part of New York does Spider-man live?",
        optionA: "Manhattan",
        optionB: "Brooklyn",
        optionC: "The Bronx",
        optionD: "Queens",
        correctOption: "optionD"
    },

    {
        question: "Which villain killed Uncle Ben in the first Spider-Man movie.?",
        optionA: "Green Goblin",
        optionB: "Sandman",
        optionC: "Venom",
        optionD: "The Lizard",
        correctOption: "optionB"
    },

    {
        question: "Who owns OSCORP Industries?",
        optionA: "Doc Oct",
        optionB: "Harry Osborn",
        optionC: "Ben Parker",
        optionD: "Norman Osborn",
        correctOption: "optionD"
    },

    {
        question: "Who said the famous 'With Great Power Comes Great Responsibility' quote.?",
        optionA: "Mary Jane Watson",
        optionB: "May Parker",
        optionC: "Ben Parker",
        optionD: "Peter Parker",
        correctOption: "optionC"
    },

    {
        question: "In the Spider-Man movies based in the MCU, who makes Spider-Mans suit.?",
        optionA: "Bruce Banner",
        optionB: "Steve Rodgers",
        optionC: "Steven Strange",
        optionD: "Tony Stark",
        correctOption: "optionD"
    },

    {
        question: "In Spider-Man 2 how did Octavius lose his wife?",
        optionA: "glass shards from a sun experiment",
        optionB: "fell off a building during an attack",
        optionC: "Green Goblin murdered her during an attack",
        optionD: "fatal illness",
        correctOption: "optionA"
    },

    {
        question: "who wrote the original Spider-Man comics?",
        optionA: "Walt Disney",
        optionB: "Jaqueline Wilson",
        optionC: "Stan Lee",
        optionD: "JK Rowling",
        correctOption: "optionC"
    },

    {
        question: "Who played Spider-Man in the Amazing Spider-man movies?",
        optionA: "Andrew Garfield",
        optionB: "Tom Holland",
        optionC: "Tobey Maguire",
        optionD: "Chris Evans",
        correctOption: "optionA"
    },

    {
        question: "Which of these numbers is an odd number ?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Eleven",
        correctOption: "optionD"
    },

    {
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of Nigeria ?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }

]

// empty array to hold shuffled questions
let shuffledQuestions = []

// function to ensure 10 shuffled questions are picked each time
function handleQuestions() { 

    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}
// what question user is on
let questionNumber = 1 
// what the users score is
let playerScore = 0  
// how many questions have they gotten wrong
let wrongAttempt = 0
// display next question
let indexNumber = 0

// display the next question 
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("displayed-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}

// checks answer 
function checkForAnswer() {
    //retrieves current question
    const currentQuestion = shuffledQuestions[indexNumber] 
    //retrieves current answer
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

        //checking user chose answer or show required pop up
        if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
            document.getElementById('option-required').style.display = "flex"
        }

        //checking if selected answer is same as correct answer
        options.forEach((option) => {
            if (option.checked === true && option.value === currentQuestionAnswer) {
                document.getElementById(correctOption).style.backgroundColor = "green"
                playerScore++ 
                indexNumber++
                //set to delay question number till when next question loads
                setTimeout(() => {
                    questionNumber++
                }, 1000)
            }
    
            else if (option.checked && option.value !== currentQuestionAnswer) {
                const wrongLabelId = option.labels[0].id
                document.getElementById(wrongLabelId).style.backgroundColor = "red"
                document.getElementById(correctOption).style.backgroundColor = "green"
                wrongAttempt++  
                indexNumber++
                //set to delay question number till when next question loads
                setTimeout(() => {
                    questionNumber++
                }, 1000)
            }
        })
    }

    //sets answers background back to default after showing the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

