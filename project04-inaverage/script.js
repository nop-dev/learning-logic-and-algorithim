/*
  Solicitar o nome do aluno e as 4 notas do ano calcular a média daquele aluno.

  A média positiva de cada bimestre deverá ser maior que 6

  Se o aluno passou de ano, dar os 
  parabéns.

  Se o aluno não passou de ano, motivar o aluno a dar seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

alert("Vamos ver se você passou de ano na escola... A média deve ser maior que 7");

// Nome
let nome = prompt("Digite seu nome:");

// Notas
let firstGrade = prompt("Digite a sua nota do primeiro bimestre:");
let secondGrade = prompt("Digite a sua nota do segundo bimestre:");
let thirdGrade = prompt("Digite a sua nota do terceiro bimestre:");
let fourthGrade = prompt("Digite a sua nota do quarto bimestre:");

// Convertendo tudo
firstGrade = Number(firstGrade);
secondGrade = Number(secondGrade);
thirdGrade = Number(thirdGrade);
fourthGrade = Number(fourthGrade);

// Formando uma média
let average = (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4;
let result = average > 6;
average = average.toFixed(2)

if(result) {
    alert(`Parabéns, você passou de ano! A sua média foi de ${average}`)
} else if(average <= 3) {
    alert(`Você foi reprovado...`)
} else {
    alert(`Você infelizmente não passou de ano, se esforçe na recuperação... A sua média foi de ${average}`)
};

alert(`Dados recolhidos: Nome: ${nome}. Primeira nota: ${firstGrade}. Segunda nota: ${secondGrade}. Terceira nota: ${thirdGrade}. Quarta nota: ${fourthGrade}.`);