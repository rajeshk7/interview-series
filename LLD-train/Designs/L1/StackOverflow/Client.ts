import StackOverflow from "./StackOverflow";
import ConsoleColors from "../../../ConsoleColors";

const system = new StackOverflow();

const alice = system.createUser("Alice", "abc@xyz")
const bob = system.createUser("Bob", "def@xyz")
const charlie = system.createUser("Charlie", "ghi@xyz")

const javaQuestion = system.askQuestion("Java", "What is Java?", alice, ["Java", "OOP"])
const bonAnswer = system.answerQuestion(javaQuestion, "Java is a programming language", bob)

system.addComment(bonAnswer, "This is a good answer", charlie)
system.addComment(bonAnswer, "This is a bad answer", alice)

system.voteQuestion(bob, javaQuestion, 1)
system.voteAnswer(charlie, bonAnswer, 1)

system.acceptAnswer(bonAnswer)

const javaScriptQuestion = system.askQuestion("JavaScript", "What is JavaScript?", bob, ["JavaScript", "Web"])
const aliveAnswer = system.answerQuestion(javaScriptQuestion, "JavaScript is a programming language", alice)

system.addComment(aliveAnswer, "This is a good answer", charlie)
system.voteAnswer(alice, aliveAnswer, 1)
system.voteQuestion(charlie, javaScriptQuestion, 1)

console.log(ConsoleColors.fgBrightMagenta + "Question " + javaQuestion.getTitle() + ConsoleColors.reset);
console.log(ConsoleColors.fgCyan + "Content " + javaQuestion.getContent() + ConsoleColors.reset);
console.log(ConsoleColors.fgYellow + "Asked by " + javaQuestion.getAuthor().getUsername() + ConsoleColors.reset);
console.log(ConsoleColors.fgGreen + "Votes " + javaQuestion.getVoteCount() + ConsoleColors.reset);
console.log(ConsoleColors.fgBlue + "Comments " + javaQuestion.getComments().length + ConsoleColors.reset);
console.log(ConsoleColors.fgMagenta + "Tags " + javaQuestion.getTags().map(tag => tag.getName()).join(", ") + ConsoleColors.reset);
console.log(ConsoleColors.fgBrightCyan + "Answer " + bonAnswer.getContent() + ConsoleColors.reset);
console.log(ConsoleColors.fgYellow + "Answered by " + bonAnswer.getAuthor().getUsername() + ConsoleColors.reset);
console.log(ConsoleColors.fgGreen + "Votes " + bonAnswer.getVoteCount() + ConsoleColors.reset);
console.log(ConsoleColors.fgBlue + "Comments " + bonAnswer.getComments().length + ConsoleColors.reset);

console.log(ConsoleColors.fgBrightWhite + "User reputation" + ConsoleColors.reset);
console.log(ConsoleColors.fgBrightRed + alice.getUsername() + " " + alice.getReputation() + ConsoleColors.reset);
console.log(ConsoleColors.fgBrightGreen + bob.getUsername() + " " + bob.getReputation() + ConsoleColors.reset);
console.log(ConsoleColors.fgBrightBlue + charlie.getUsername() + " " + charlie.getReputation() + ConsoleColors.reset);

console.log(ConsoleColors.fgBrightMagenta + "Search results for Java" + ConsoleColors.reset);
const results = system.searchQuestions("Java");
results.forEach(question => {
    console.log(ConsoleColors.fgCyan + " => " + question.getContent() + ConsoleColors.reset);
});


