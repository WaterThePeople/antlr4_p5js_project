import antlr4 from "antlr4";
import GrammarLexer from "./GrammarLexer.js";
import GrammarParser from "./GrammarParser.js";

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
    let shapes = [];


    tree.children.forEach((statement) => {
      const shape = statement.children[0];

      const args = shape.children.slice(1).map((c) => parseInt(c.getText()));

      if (shape.ruleIndex === GrammarParser.RULE_rect) {
        shapes.push({
          type: "rect",
          x: args[0],
          y: args[1],
          width: args[2],
          height: args[3],
        });
      }
      if (shape.ruleIndex === GrammarParser.RULE_circle) {
        shapes.push({
          type: "circle",
          x: args[0],
          y: args[1],
          radius: args[2],
        });
      }
    });

    return shapes;
  }
}

export default Interpreter;
