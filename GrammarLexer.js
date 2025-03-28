// Generated from Grammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,45,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,5,4,5,35,8,5,11,5,12,5,36,1,6,4,6,40,8,6,11,6,12,6,
41,1,6,1,6,0,0,7,1,1,3,2,5,3,7,4,9,5,11,6,13,7,1,0,2,1,0,48,57,3,0,9,10,
13,13,32,32,46,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
0,0,11,1,0,0,0,0,13,1,0,0,0,1,15,1,0,0,0,3,17,1,0,0,0,5,22,1,0,0,0,7,24,
1,0,0,0,9,26,1,0,0,0,11,34,1,0,0,0,13,39,1,0,0,0,15,16,5,59,0,0,16,2,1,0,
0,0,17,18,5,114,0,0,18,19,5,101,0,0,19,20,5,99,0,0,20,21,5,116,0,0,21,4,
1,0,0,0,22,23,5,40,0,0,23,6,1,0,0,0,24,25,5,41,0,0,25,8,1,0,0,0,26,27,5,
99,0,0,27,28,5,105,0,0,28,29,5,114,0,0,29,30,5,99,0,0,30,31,5,108,0,0,31,
32,5,101,0,0,32,10,1,0,0,0,33,35,7,0,0,0,34,33,1,0,0,0,35,36,1,0,0,0,36,
34,1,0,0,0,36,37,1,0,0,0,37,12,1,0,0,0,38,40,7,1,0,0,39,38,1,0,0,0,40,41,
1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,6,6,0,0,44,14,1,
0,0,0,3,0,36,41,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GrammarLexer extends antlr4.Lexer {

    static grammarFileName = "Grammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "'rect'", "'('", "')'", "'circle'" ];
	static symbolicNames = [ null, null, null, null, null, null, "INT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "INT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

GrammarLexer.EOF = antlr4.Token.EOF;
GrammarLexer.T__0 = 1;
GrammarLexer.T__1 = 2;
GrammarLexer.T__2 = 3;
GrammarLexer.T__3 = 4;
GrammarLexer.T__4 = 5;
GrammarLexer.INT = 6;
GrammarLexer.WS = 7;



