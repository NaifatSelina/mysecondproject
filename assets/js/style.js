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
        question: "Which villain killed Uncle Ben in the first Spider-Man movie?",
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
        question: "Who said 'With Great Power Comes Great Responsibility'?",
        optionA: "Mary Jane Watson",
        optionB: "May Parker",
        optionC: "Ben Parker",
        optionD: "Peter Parker",
        correctOption: "optionC"
    },

    {
        question: "In Spider-Man movies in the MCU, who makes Peters suit?",
        optionA: "Bruce Banner",
        optionB: "Steve Rodgers",
        optionC: "Steven Strange",
        optionD: "Tony Stark",
        correctOption: "optionD"
    },

    {
        question: "How did Octavius lose his wife?",
        optionA: "glass shards",
        optionB: "falling from a building",
        optionC: "Green Goblin",
        optionD: "fatal illness",
        correctOption: "optionA"
    },

    {
        question: "Who wrote the original Spider-Man comics?",
        optionA: "Walt Disney",
        optionB: "Jaqueline Wilson",
        optionC: "Stan Lee",
        optionD: "JK Rowling",
        correctOption: "optionC"
    },

    {
        question: "Who plays Peter in the Amazing Spider-man movies?",
        optionA: "Andrew Garfield",
        optionB: "Tom Holland",
        optionC: "Tobey Maguire",
        optionD: "Chris Evans",
        correctOption: "optionA"
    },

    {
        question: "In the caged fighting match in 'Spider-Man', who was fought?",
        optionA: "Ultron",
        optionB: "Thanos",
        optionC: "Venom",
        optionD: "Bonesaw",
        correctOption: "optionD"
    },

    {
        question: `Which level of school was Peter in when he got bitten by the genetically altered spider?`,
        optionA: "Post-Grad",
        optionB: "College",
        optionC: "Middle School",
        optionD: "High School",
        correctOption: "optionD"
    },

    {
        question: "In Homecoming, what did Peter name the artificial intelligence in his suit?",
        optionA: "Annie",
        optionB: "Cali",
        optionC: "Karen",
        optionD: "Liz",
        correctOption: "optionC"
    },

    {
        question: "Where does Spider-Man shoot his webs from?",
        optionA: "Wrists",
        optionB: "Head",
        optionC: "Feet",
        optionD: "Eyes",
        correctOption: "optionA"
    },


    {
        question: "Which newspaper did Peter Parker work for in the 2002 film Spider-Man? ",
        optionA: "Daily Planet",
        optionB: "Daily Bugle",
        optionC: "Sunday Post",
        optionD: "New York Daily",
        correctOption: "optionB"
    },

    {
        question: "What were the names of Peter Parker's parents?",
        optionA: "Ben + May",
        optionB: "Peter + Martha",
        optionC: "Leo + Kate",
        optionD: "Richard + Mary",
        correctOption: "optionD"
    },

    {
        question: "What is Peter Parker's favourite hobby?",
        optionA: "Photography",
        optionB: "Acting",
        optionC: "Soccer",
        optionD: "Music",
        correctOption: "optionA"
    },

    {
        question: "What does Peter Parker's spider-sense do?",
        optionA: "Beeps",
        optionB: "Shivers",
        optionC: "Tingles",
        optionD: "Wobbles",
        correctOption: "optionC"
    },

    {
        question: "With great power comes great...?",
        optionA: "Responsibility",
        optionB: "Fun",
        optionC: "Sadness",
        optionD: "Money",
        correctOption: "optionA"
    },

    {
        question: "In 2011, Marvel introduced character to become the new Spider-Man. Who?",
        optionA: "Tony Stark",
        optionB: "Bruce Wayne",
        optionC: "Miles Morales",
        optionD: "Eric Twinge",
        correctOption: "optionC"
    },

    {
        question: "At which school did Peter Parker study?",
        optionA: "Grange Hill",
        optionB: "Hogwarts",
        optionC: "Midland High School",
        optionD: "Midtown High School",
        correctOption: "optionD"
    },

    {
        question: "What actress plays Mary Jane opposite Tobey Maguire in Spider-Man?",
        optionA: "Kirsten Dunst",
        optionB: "Emma Stone",
        optionC: "Zendaya",
        optionD: "Zoe Kravitz",
        correctOption: "optionA"
    },

    {
        question: "Peter Parkers aunt who always offers sage advice is named after... ?",
        optionA: "Autumn",
        optionB: "April",
        optionC: "Summer",
        optionD: "May",
        correctOption: "optionD"
    },

    {
        question: "Who created the main art for Spider-Man?",
        optionA: "Jared Lee",
        optionB: "Steve Ditko",
        optionC: "Michael Janssen",
        optionD: "Edward Halton",
        correctOption: "optionB"
    },

    {
        question: "What female character becomes Spider-Woman?",
        optionA: "MJ",
        optionB: "Jessica Drew",
        optionC: "Gwen Stacy",
        optionD: "Aunt May",
        correctOption: "optionB"
    },

    {
        question: "Peter's parents, died tragically in what way?",
        optionA: "Illness",
        optionB: "Explosion",
        optionC: "Plane Crash",
        optionD: "Car Crash",
        correctOption: "optionC"
    },

    {
        question: "Andrew Garfields Spider-Man battles against what reptilian supervillain?",
        optionA: "The Alligator",
        optionB: "The Crocodile",
        optionC: "The Lizard",
        optionD: "The Reptile",
        correctOption: "optionC"
    }

]



let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            var audio = new Audio('assets/audio/rightanswer.ogg');
            audio.play();
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            var audio = new Audio('assets/audio/wronganswer.ogg');
            audio.play();
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Are your Spidey senses running low today? Better luck next time!"
        remarkColor = "red"
        var audio = new Audio('assets/audio/fail.ogg');
            audio.play();
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Not bad! But I know you can do better!"
        remarkColor = "orange"
        var audio = new Audio('assets/audio/welldone.ogg');
            audio.play();
    }
    else if (playerScore >= 7) {
        remark = "Excellent! Peter needs to recruit you!"
        remarkColor = "green"
        var audio = new Audio('assets/audio/welldone.ogg');
            audio.play();
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

// to play super hero audio
const audio = new Audio("assets/audio/superhero.ogg");

document.getElementById('button-audio').onclick = function() {
    audio.play();
}

if (typeof audio.loop == 'boolean')
{
    audio.loop = true;
}
else
{
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}



