var replaceall = require("replaceall");

var correto = 'var wx = 0; wx = wx + 1; wx++; if(wx==2) { console.log("CERTO > ",wx); } else { console.log("ERRO"); }';

eval(correto);

console.log('INICIO POC');

var obj_prp_memo = 'private wx=0; wx=wx + 1; wx++; IF wx = 2 chr(10) msgInfo(wx) ELSE msgInfo("ERRO") ENDIF';
console.log("CLIPPER",obj_prp_memo);

obj_prp_memo = ' ' + obj_prp_memo + ' ';
obj_prp_memo = obj_prp_memo.replace('private', 'var');

obj_prp_memo = obj_prp_memo.replace(' IF ', ' if( ');

obj_prp_memo = obj_prp_memo.replace(' = ', ' == ');   // numa lógica complexa, é necessário veriricar se o "=" é de atribuição ou de comparação lógica. Para o exemplo, atribucao deixei sem expaço

obj_prp_memo = replaceall(' msgInfo(', ' console.log(', obj_prp_memo);

obj_prp_memo = obj_prp_memo.replace(' chr(10) ', ' ) { ');

obj_prp_memo = obj_prp_memo.replace(' ELSE ', ' ;} else { ');

obj_prp_memo = obj_prp_memo.replace(' ENDIF ', ' ;} ');

console.log("JAVASCRIPT", obj_prp_memo);
console.log("Exec ...");
eval(obj_prp_memo);
console.log("Fim ...");
