import Interpreter from "./interpreter.js";

import { customRectangle, customCircle } from "./shapes.js";

let interpreter;
let userInput, button;
let shapes = [];
let texts = [];
let input = "";

function activateInterpreter() {
  let tree = interpreter.parse(input);

  shapes = interpreter.interpret(tree);
  console.log(shapes);
}

function addText() {
  let newText = userInput.value();
  if (newText.trim() !== "") {
    texts.push(newText);
    userInput.value("");
  }
  input = texts.join("");
  activateInterpreter();
}

function setup() {
  createCanvas(1000, 600);
  background(220);

  interpreter = new Interpreter(this);

  userInput = createInput();
  userInput.position(10, 10);
  userInput.size(400, 32);

  button = createButton("Add");
  button.position(userInput.x + userInput.width + 10, 10);
  button.size(75, 38);
  button.mousePressed(addText);

}

function draw() {
  background(220);

  textSize(16);
  for (let i = 0; i < shapes.length; i++) {
    stroke(shapes[i].red, shapes[i].green, shapes[i].blue);
    fill(shapes[i].red, shapes[i].green, shapes[i].blue);
    text(shapes[i].name, 10, userInput.height * 1.5 + 10 + i * 20);
  }

  shapes?.forEach((shape) => {
    if (shape.type === "rect") {
      customRectangle(
        shape.x,
        shape.y,
        shape.width,
        shape.height,
        shape.red,
        shape.green,
        shape.blue
      );
    }
    if (shape.type === "circle") {
      customCircle(
        shape.x,
        shape.y,
        shape.radius,
        shape.red,
        shape.green,
        shape.blue
      );
    }
  });
}

window.setup = setup;
window.draw = draw;
