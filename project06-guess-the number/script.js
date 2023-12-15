/*
** Jogo da advinhação **

Apresente a mensagem ao usuário:
"Advinhe o número que estou pensando? Está entre 0 e 10"

Crie um lógica para gerar um número aleatório 
e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem:
"Erro, tente novamente:"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você advinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas
*/


/* Algumas propriedades de Math... (Pacote com funcionalidades matemáticas)
    Math.ceil() passando um número dentro dos parênteses ele arredonda pra cima
    Match.floor() passando um número pra dentro dos parênteses ele arredonda pra baixo
    Math.round() passando um número dentro dos parênteses ele vai arredondar pro que estiver mais próximo. 
    Exemplo: 
        (1.4) ele vai arrendondar para 1
        (1.6) ele vai arrendondar para 2
*/

const randomNumber = Math.round(Math.random() * 10);

let result = prompt("Adivinhe o número que estou pensando. Está entre 0 a 10...");

let xAttempts = 1;

while(Number(result) != randomNumber) {
    result = prompt("Você errou, tente novamente...");
    xAttempts++;
};

if(xAttempts < 2) {
    alert(`Você acertou! O número que eu pensei foi ${randomNumber}... Você acertou em ${xAttempts} tentativa.`);
} else {
    alert(`Você acertou! O número que eu pensei foi ${randomNumber}... Você acertou em ${xAttempts} tentativas.`);
};
