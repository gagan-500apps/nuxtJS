<template>
<div class="body">
    <div class="app">
        <h1>Simple quiz</h1>
        <div class="quiz">
            <div id="questions">{{showQuestion}}</div>
            <div id="answer-button">
                <!-- <button v-for="(answer, index) in currentQuestion.answers" :key="index" class="btn">
            {{ answer.text }}
          </button> -->
                <button class="btn">op1</button>
                <button class="btn">op2</button>
                <!-- <button class="btn">op3</button>
                <button class="btn">op4</button> -->
            </div>
            <button id="next-btn">next</button>
        </div>
    </div>
</div>   
</template>

<script setup>
const questions=[
    {
        question: "your age",
        answers:[
            {text:"21", correct: false},
            {text:"22", correct: true},
        ]
    },
    {
        question: "your name",
        answers:[
            {text:"man", correct: false},
            {text:"mantra", correct: true},
        ]
    }
];

const currentQuestionIndex=0
const showQuestion=ref()
let score=0;

// const currentQuestion=ref()

const takeQuestion=()=>{
     let currentQuestion=questions[currentQuestionIndex]
     console.log('currentQuestion',currentQuestion);
    let questionNo=currentQuestionIndex+1;
    showQuestion.value=questionNo+"."+currentQuestion.question
    console.log(showQuestion.value);

    currentQuestion.answers.forEach(ans=>{
        const option=ans.text
        console.log('option',option);
    })

}
takeQuestion();
</script>

<style>

*{
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
    box-sizing: border-box;
}

body{
     background: #001e4d;
}
.app{
background: #fff;
width: 90%;
max-width: 600px;
margin: 100px auto 0;
border-radius: 10px;
padding: 30px;
}

.app h1{
    font-size: 25px;
    color: #001e4d;
    font-weight: 600;
    border-bottom: 1px solid #333;
    padding-bottom: 30px;
}
.quiz{
    padding: 20px 0;
    color: #001e4d;
    font-weight: 600;
}
.btn{
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
.btn:hover{
    background: #222;
    color: #fff;
}

#next-btn{
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
</style>