let Kahoot = require("kahoot.js-updated");
let kahoots = [];
let pin = "2327933";
let name = "KahootBot";
const bot_count = 230;
for (let i = 0; i < bot_count; i++) {
    kahoots.push(new Kahoot);
    kahoots[i].join(pin, name+" "+String(i)).catch(error => {
        console.log("join failed " + error.description + " " + error.status)
    });
    kahoots[i].on("Joined", () => {
        console.log("successfully joined game")
    });
    kahoots[i].on("QuestionStart", (question) => {
        question.quizQuestionAnswers = undefined;
        question.questionIndex = undefined;
        question.answer = function (number) {

        }
        question.answer(
            Math.floor(
                Math.random() * question.quizQuestionAnswers[question.questionIndex]
            )
        );
    });
    kahoots[i].on("Disconnect", (reason) => {
        console.log("disconnected because " + reason);
    });
}
