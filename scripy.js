//this is a one line coment


//variablat dhe datatypes:
// let emri = "mirjeta" // string
// let notaMatematike = 4; //number
// let x; // undefined
// let isAdult = false; //ture //boolean
// let nullVariable = null;

//deklarimi i variable = krijojme nje variabel
let testVar = "m";

//deklarim + incializmi ne te njejtin rresht
const PI = 3.14;

//plus
let nr1 = 4;
let nr2 = 3;

let shuma = nr1+nr2; //7
let ndryshimi = nr1-nr2; //1
let rezultatishumezimit = nr1 * nr2 ; //12
let rezultatiipjesetimit = nr1 / nr2; //1.3333333

console.log("Shuma e " + nr1 + " dhe " + nr2 + " eshte  " + shuma)
console.log("Zbritja e " + nr1 + " dhe " + nr2 + " eshte " + ndryshimi)
console.log("shumezimi mes e " + nr1 + " dhe " + nr2 + " eshte " +  rezultatishumezimit)
console.log("pjestimi mes e " + nr1 + " dhe " + nr2 + " eshte " + rezultatiipjesetimit)


let ngritjaNefuqi = 4 ** 2;
let modulo = 16 % 3;

let numri1 = +prompt("shkruaj numrin e pare");
let numri2 = +prompt("shkruaj numrin e dyte");

console.log(numri1 + numri2);


// case sensitive:
alert("shfaq nje mesazh");
let eshtembi = confirm("A i ki mbi 16 vjet");
console.log(eshtembi);

let emri = prompt("shkruaj emrin");
alert("hello" + emri);