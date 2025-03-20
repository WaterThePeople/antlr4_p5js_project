import Interpreter from "./interpreter.js";

let interpreter;
let userInput, button;
let shapes = [];
let texts = [];
let input = "";

function activateInterpreter() {
  let tree = interpreter.parse(input);

  shapes = interpreter.interpret(tree);
}

function addText() {
  let newText = userInput.value();
  if (newText.trim() !== "") {
    texts.push(newText);
    userInput.value("");
  }
  console.log(texts);
  input = texts.join("");
  console.log(input);
  activateInterpreter();
}

function setup() {
  createCanvas(1000, 600);
  background(220);

  interpreter = new Interpreter(this);

  userInput = createInput();
  userInput.position(10, 10);
  userInput.size(200, 32);

  button = createButton("Add");
  button.position(userInput.x + userInput.width + 10, 10);
  button.size(75, 38);
  button.mousePressed(addText);

  //   let input = `
  //       rect 50 50 100 100;
  //       circle 250 250 125;
  //   `;
}

function draw() {
  background(220);

  fill(0);
  textSize(16);
  for (let i = 0; i < texts.length; i++) {
    text(texts[i], 10, userInput.height * 1.5 + 10 + i * 20);
  }

  shapes?.forEach((shape) => {
    if (shape.type === "rect") {
      rect(shape.x, shape.y, shape.width, shape.height);
    }
    if (shape.type === "circle") {
      circle(shape.x, shape.y, shape.radius);
    }
  });
}

window.setup = setup;
window.draw = draw;
