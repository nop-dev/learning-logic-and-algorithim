/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let option;
if(option == String) {
    alert("Você digitou um caractere inválido...")
}

let items = [];
let itemNum = 0;

while(option != 3) {

    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `));

switch(option) {
    case 1: 
        items.push(prompt("Digite o nome do Item"));
    break;

    case 2: 
        if(items.length == 0) {
            alert("Você ainda não cadastrou nenhum item...");
        } else {
            alert(`Esses são os itens cadastrados: ${items}`);
        };
    break;
    
    case 3:
        alert("Adeus!")
    break;

    default: 
        alert("Opção inválida. Tente novamente...");
    }
}