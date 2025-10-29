let x = [
  {name: "HTML", options: ["C1", "C2", "C3","C4","C5"], correct: "C1"},
  {name: "CSS", options: ["C1", "C2", "C3","C4","C5"], correct: "C2"},
  {name: "JavaScript", options: ["C1", "C2", "C3","C4","C5"], correct: "C3"},
  {name: "Java", options: ["C1", "C2", "C3","C4","C5"], correct: "C4"},
  {name: "PHP", options: ["C1", "C2", "C3","C4","C5"], correct: "C5"}
];

let score = 0;

for (let i = 0; i < x.length; i++) {
  let question = `Quel est le code de  ${x[i].name}?\n` ;
  for (let j = 0; j < x[i].options.length; j++) {
    question += `${j + 1}. ${x[i].options[j]}\n` ;
  }

  let userreponde = prompt(question)
  if (userreponde === x[i].correct) {
  score++ ;
  }
} console.log("Your Score is " +score + " / 5");