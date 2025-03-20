import Interpreter from './interpreter.js';

let interpreter;
let shapes = [];

function setup() {
    createCanvas(600, 400); 
    background(220);
    interpreter = new Interpreter(this);

    let input = `
        rect 50 50 100 100;
        circle 250 250 125;
    `;
    
    let tree = interpreter.parse(input);

    shapes = interpreter.interpret(tree);
}

function draw() {
    background(220);
    shapes.forEach(shape => {
        if (shape.type === 'rect') {
            rect(shape.x, shape.y, shape.width, shape.height);
        }
        if (shape.type === 'circle') {
            circle(shape.x, shape.y, shape.radius);
        }
    });
}

window.setup = setup;
window.draw = draw;
