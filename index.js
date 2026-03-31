const alunos = ["Arthur", "Carolina", "Mathias", "Miguel", "Patricia"];
const readlineSync = require("readline-sync");

let matriz = [];

for (let i = 0; i < alunos.length; i++) {

    let nota1 = readlineSync.questionInt("Informe a Nota 1 do aluno " + alunos[i] + ": ");
    let nota2 = readlineSync.questionInt("Informe a Nota 2 do aluno " + alunos[i] + ": ");

    let media = (nota1 + nota2) / 2;

    matriz.push([alunos[i], nota1, nota2, media]);
}

console.log(matriz);