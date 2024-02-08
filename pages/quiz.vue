<template>
    <div v-if="flag1" class="button-container">
      <button class="start-test-button" @click="opentest">Start Test</button>  
    </div>
    <div v-if="flag2" class="body flex justify-center mt-36">
        <div class="app ">
            <h1 class="ml-50">Simple quiz</h1>
            <div class="quiz">
                <div id="questions">{{ showQuestion }}</div>

                <div id="answer-buttons">
                    <button
                        v-for="(answer, index) in answersarray" :key="index"
                        @click="selectAnswer(answer)"
                        :class="{ 'btn': true, 'selected-answer': answer.selected }"
                        :disabled="answer.disabled"
                    >
                        {{ answer.text }}
                    </button>
                </div>

                <button id="next-btn" @click="takeQuestion">Next</button>
            </div>
        </div>
    </div>

    <div v-if="flag3" class="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
  <div class="bg-white p-8 rounded-lg max-w-md">
    
      <p class="text-center">You have completed all the Questions and your score is {{ showscore() }}/10</p>
      <button @click="closetest()" class="mt-4 block w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Ok</button>
  
  </div>
</div>

</template>

<script setup>

const flag1=ref(true)
const flag2=ref(false)
const flag3=ref(false)
const opentest=()=>{
flag1.value=false
    flag2.value=true
}

const closetest=()=>{
flag1.value=true
    flag2.value=false
    flag3.value=false
}

definePageMeta({
  layout: "navbar"
})

const questions = [
    {
        question: "which is your Nation flower",
        answers: [
            { text: "Sunflower", correct: false },
            { text: "Lotus", correct: true },
            { text: "Rose", correct: false },
            { text: "Lily", correct: false },
        ]
    },
    {
        question: "which is your Nation Animal",
        answers: [
            { text: "Tiger", correct: true },
            { text: "Monkey", correct: false },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
        ]
    },
    {
        question: "which is your Nation Game",
        answers: [
            { text: "Kabaddi", correct: false },
            { text: "Chess", correct: false },
            { text: "Cricket", correct: false },
            { text: "Hockey", correct: true },
        ]
    },
    {
        question: "which is your Nation Language",
        answers: [
            { text: "Kannada", correct: false },
            { text: "Hindi", correct: true },
            { text: "English", correct: false },
            { text: "Telugu", correct: false },
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;
const showQuestion = ref();
const answersarray = ref([]);

// const checkAnswer = (answer) => {
//     if (answer.correct) {
//         score = score + 1;
//     }
// };


const selectAnswer = (selectedAnswer) => {
    answersarray.value.forEach((answer) => {
        answer.selected = false;
    });
    selectedAnswer.selected = true;

    if (selectedAnswer.correct) {
        score++;
    }
};

const takeQuestion = () => {
    if (questions.length === currentQuestionIndex) {
        alert('All questions are done');
        flag2.value=false
    flag3.value=true
        showscore();
       
    }

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    showQuestion.value = questionNo + "." + currentQuestion.question;

    answersarray.value = currentQuestion.answers.map(answer => ({
        ...answer, //spread operation
        selected: false,
        disabled: false
    }));

    currentQuestionIndex += 1;
};

const showscore = () => {
    return score
};

takeQuestion();
</script>

<style>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* This makes the container take up the full viewport height */
}

.start-test-button {
  font-size: 24px; /* Adjust the font size as needed */
  background-color: #e5361b; /* Green */
  color: white;
  padding: 20px 40px; /* Adjust padding as needed */
  
  border-radius: 10px;
  /* Smooth transition for hover effect */

}

.start-test-button:hover {
  background-color: #179620; /* Darker green on hover */
}



* {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
    box-sizing: border-box;
}

/* body{
     background: #001e4d;
} */
.app {
    background: #fff;
    width: 90%;
    max-width: 600px;
    /* margin: 100px auto 0; */
    border-radius: 10px;
    padding: 30px;
}

.app h1 {
    font-size: 25px;
    color: #001e4d;
    font-weight: 600;
    border-bottom: 1px solid #333;
    padding-bottom: 30px;
}

.quiz {
    padding: 20px 0;
    color: #001e4d;
    font-weight: 600;
}

.btn {
    background: #fff;
    color: #222;
    font-weight: 500;
    width: 100%;
    border: 1px solid #222;
    padding: 10px;
    margin: 10px 0;
    text-align: left;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn:hover {
    background: #222;
    color: #fff;
}

#next-btn {
    background: #001e4d;
    color: #fff;
    font-weight: 500;
    width: 150px;
    border: 0;
    padding: 10px;
    margin: 20px auto 0;
    border-radius: 4px;
    cursor: pointer;
    display: block;
}

.selected-answer {
  background-color: green;
  color: white;
  transition: background-color 0.3s;

}
</style>