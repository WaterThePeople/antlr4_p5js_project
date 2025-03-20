grammar Grammar;

prog: statement+;

statement: 
    rect ';'
    |circle ';'
    ;

rect:
	'rect' INT INT INT INT	# Rectangle_shape
    ;

circle:
	'circle' INT INT INT	# Circle_shape
    ;

INT: [0-9]+;

WS: [ \t\r\n]+ -> skip;