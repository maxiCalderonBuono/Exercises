//SECUENCIA DE FIBONACCI
// Calcular la secuencia de fibonacci hasta un límite dado.

let limite= 16;
let a= 0;
let n= 1;
let num= 0;
for (let i = 0; i < limite ; i++) {
if (i === 0) {console.log (a);}
else if (i === 1) { console.log(n);}
else {
 num = a + n
 a= n
 n= num
 console.log(num)}
}