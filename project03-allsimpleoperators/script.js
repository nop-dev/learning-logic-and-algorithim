alert("Me diga dois números, e vou fazer a soma, subtração, multiplicação, divisão e resto da divisão entre esse números...");

// Capturando dados...
let number1 = prompt("Me informe o primeiro número...");
let number2 = prompt("Agora me informe o segundo número...");

number1 = Number(number1);
number2 = Number(number2);

// Soma
let sum = number1 + number2;
alert(`A soma entre ${number1} e ${number2} é ${sum}`);

// Subtração
let sub = number1 - number2;
alert(`A subtração entre ${number1} e ${number2} é ${sub}`);

// Multiplicação
let mult = number1 * number2;
alert(`A multiplicação entre ${number1} e ${number2} é ${mult}`);

// Divisão
let div = number1 / number2;
alert(`A divisão entre ${number1} e ${number2} é ${div}`);

// Resto da Divisão
let remainder = number1 % number2;
alert(`O resto da divisão entre ${number1} e ${number2} é ${remainder}`);