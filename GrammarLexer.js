// Generated from Grammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,37,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,4,3,27,8,
3,11,3,12,3,28,1,4,4,4,32,8,4,11,4,12,4,33,1,4,1,4,0,0,5,1,1,3,2,5,3,7,4,
9,5,1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,38,0,1,1,0,0,0,0,3,1,0,0,0,0,5,
1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,3,13,1,0,0,0,5,18,1,0,0,0,7,
26,1,0,0,0,9,31,1,0,0,0,11,12,5,59,0,0,12,2,1,0,0,0,13,14,5,114,0,0,14,15,
5,101,0,0,15,16,5,99,0,0,16,17,5,116,0,0,17,4,1,0,0,0,18,19,5,99,0,0,19,
20,5,105,0,0,20,21,5,114,0,0,21,22,5,99,0,0,22,23,5,108,0,0,23,24,5,101,
0,0,24,6,1,0,0,0,25,27,7,0,0,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,
28,29,1,0,0,0,29,8,1,0,0,0,30,32,7,1,0,0,31,30,1,0,0,0,32,33,1,0,0,0,33,
31,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,36,6,4,0,0,36,10,1,0,0,0,3,0,28,
33,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GrammarLexer extends antlr4.Lexer {

    static grammarFileName = "Grammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "'rect'", "'circle'" ];
	static symbolicNames = [ null, null, null, null, "INT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "INT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

GrammarLexer.EOF = antlr4.Token.EOF;
GrammarLexer.T__0 = 1;
GrammarLexer.T__1 = 2;
GrammarLexer.T__2 = 3;
GrammarLexer.INT = 4;
GrammarLexer.WS = 5;



