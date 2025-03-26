// Generated from Grammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GrammarListener from './GrammarListener.js';
import GrammarVisitor from './GrammarVisitor.js';

const serializedATN = [4,1,7,57,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,1,1,1,1,1,1,1,1,1,1,1,3,1,20,8,1,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,3,2,29,8,2,1,2,3,2,32,8,2,1,2,3,2,35,8,2,1,2,3,2,38,8,2,1,3,1,
3,1,3,1,3,1,3,1,3,3,3,46,8,3,1,3,3,3,49,8,3,1,3,3,3,52,8,3,1,3,3,3,55,8,
3,1,3,0,0,4,0,2,4,6,0,0,62,0,9,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,39,1,
0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,11,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,
12,1,1,0,0,0,13,14,3,4,2,0,14,15,5,1,0,0,15,20,1,0,0,0,16,17,3,6,3,0,17,
18,5,1,0,0,18,20,1,0,0,0,19,13,1,0,0,0,19,16,1,0,0,0,20,3,1,0,0,0,21,22,
5,2,0,0,22,23,5,6,0,0,23,24,5,6,0,0,24,25,5,6,0,0,25,37,5,6,0,0,26,28,5,
3,0,0,27,29,5,6,0,0,28,27,1,0,0,0,28,29,1,0,0,0,29,31,1,0,0,0,30,32,5,6,
0,0,31,30,1,0,0,0,31,32,1,0,0,0,32,34,1,0,0,0,33,35,5,6,0,0,34,33,1,0,0,
0,34,35,1,0,0,0,35,36,1,0,0,0,36,38,5,4,0,0,37,26,1,0,0,0,37,38,1,0,0,0,
38,5,1,0,0,0,39,40,5,5,0,0,40,41,5,6,0,0,41,42,5,6,0,0,42,54,5,6,0,0,43,
45,5,3,0,0,44,46,5,6,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,49,
5,6,0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,0,50,52,5,6,0,0,51,50,1,
0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,55,5,4,0,0,54,43,1,0,0,0,54,55,1,0,
0,0,55,7,1,0,0,0,10,11,19,28,31,34,37,45,48,51,54];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GrammarParser extends antlr4.Parser {

    static grammarFileName = "Grammar.g4";
    static literalNames = [ null, "';'", "'rect'", "'('", "')'", "'circle'" ];
    static symbolicNames = [ null, null, null, null, null, null, "INT", 
                             "WS" ];
    static ruleNames = [ "prog", "statement", "rect", "circle" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GrammarParser.ruleNames;
        this.literalNames = GrammarParser.literalNames;
        this.symbolicNames = GrammarParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GrammarParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.statement();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2 || _la===5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GrammarParser.RULE_statement);
	    try {
	        this.state = 19;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 13;
	            this.rect();
	            this.state = 14;
	            this.match(GrammarParser.T__0);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.circle();
	            this.state = 17;
	            this.match(GrammarParser.T__0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rect() {
	    let localctx = new RectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GrammarParser.RULE_rect);
	    var _la = 0;
	    try {
	        localctx = new Rectangle_shapeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(GrammarParser.T__1);
	        this.state = 22;
	        this.match(GrammarParser.INT);
	        this.state = 23;
	        this.match(GrammarParser.INT);
	        this.state = 24;
	        this.match(GrammarParser.INT);
	        this.state = 25;
	        this.match(GrammarParser.INT);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 26;
	            this.match(GrammarParser.T__2);
	            this.state = 28;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 27;
	                this.match(GrammarParser.INT);

	            }
	            this.state = 31;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 30;
	                this.match(GrammarParser.INT);

	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6) {
	                this.state = 33;
	                this.match(GrammarParser.INT);
	            }

	            this.state = 36;
	            this.match(GrammarParser.T__3);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	circle() {
	    let localctx = new CircleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GrammarParser.RULE_circle);
	    var _la = 0;
	    try {
	        localctx = new Circle_shapeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(GrammarParser.T__4);
	        this.state = 40;
	        this.match(GrammarParser.INT);
	        this.state = 41;
	        this.match(GrammarParser.INT);
	        this.state = 42;
	        this.match(GrammarParser.INT);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 43;
	            this.match(GrammarParser.T__2);
	            this.state = 45;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 44;
	                this.match(GrammarParser.INT);

	            }
	            this.state = 48;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	            if(la_===1) {
	                this.state = 47;
	                this.match(GrammarParser.INT);

	            }
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6) {
	                this.state = 50;
	                this.match(GrammarParser.INT);
	            }

	            this.state = 53;
	            this.match(GrammarParser.T__3);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.T__2 = 3;
GrammarParser.T__3 = 4;
GrammarParser.T__4 = 5;
GrammarParser.INT = 6;
GrammarParser.WS = 7;

GrammarParser.RULE_prog = 0;
GrammarParser.RULE_statement = 1;
GrammarParser.RULE_rect = 2;
GrammarParser.RULE_circle = 3;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_prog;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_statement;
    }

	rect() {
	    return this.getTypedRuleContext(RectContext,0);
	};

	circle() {
	    return this.getTypedRuleContext(CircleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_rect;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Rectangle_shapeContext extends RectContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GrammarParser.INT);
	    } else {
	        return this.getToken(GrammarParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterRectangle_shape(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitRectangle_shape(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitRectangle_shape(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.Rectangle_shapeContext = Rectangle_shapeContext;

class CircleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_circle;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Circle_shapeContext extends CircleContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GrammarParser.INT);
	    } else {
	        return this.getToken(GrammarParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterCircle_shape(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitCircle_shape(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitCircle_shape(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.Circle_shapeContext = Circle_shapeContext;


GrammarParser.ProgContext = ProgContext; 
GrammarParser.StatementContext = StatementContext; 
GrammarParser.RectContext = RectContext; 
GrammarParser.CircleContext = CircleContext; 
