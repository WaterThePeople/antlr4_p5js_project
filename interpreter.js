import antlr4 from "antlr4";
import GrammarLexer from "./GrammarLexer.js";
import GrammarParser from "./GrammarParser.js";
import GrammarVisitor from "./GrammarVisitor.js";

class ShapeVisitor extends GrammarVisitor {
  constructor() {
    super();
    this.shapes = [];
    this.shapeCounter = 0;
  }

  visitProg(ctx) {
    return ctx.statement().map((stmt) => this.visit(stmt));
  }

  visitRectangle_shape(ctx) {
    this.shapeCounter++;

    const args = ctx.INT().map((node) => parseInt(node.getText()));
    return {
      name: "shape" + this.shapeCounter,
      type: "rect",
      x: args[0],
      y: args[1],
      width: args[2],
      height: args[3],
      red: args[4] ?? 125,
      green: args[5] ?? 125,
      blue: args[6] ?? 125,
    };
  }

  visitCircle_shape(ctx) {
    this.shapeCounter++;

    const args = ctx.INT().map((node) => parseInt(node.getText()));
    return {
      name: "shape" + this.shapeCounter,
      type: "circle",
      x: args[0],
      y: args[1],
      radius: args[2],
      red: args[3] ?? 125,
      green: args[4] ?? 125,
      blue: args[5] ?? 125,
    };
  }

  visitStatement(ctx) {
    return this.visit(ctx.getChild(0));
  }
}

class Interpreter {
  constructor(p5Instance) {
    this.p5 = p5Instance;
  }

  parse(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new GrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new GrammarParser(tokens);
    parser.buildParseTrees = true;
    return parser.prog();
  }

  interpret(tree) {
    const visitor = new ShapeVisitor();
    return visitor.visit(tree);
  }
}

export default Interpreter;
