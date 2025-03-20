// Generated from Grammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by GrammarParser.

export default class GrammarVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by GrammarParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GrammarParser#statement.
	visitStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GrammarParser#Rectangle_shape.
	visitRectangle_shape(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GrammarParser#Circle_shape.
	visitCircle_shape(ctx) {
	  return this.visitChildren(ctx);
	}



}