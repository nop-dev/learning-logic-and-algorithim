let items = [];

for(let item = 0; item < 10; item++) { // A cada vez que isso rodar, o item vai valer +1 
  let itemName = prompt("Digite o item " + (item + 1))

  items[item] = itemName // Como item vai ganhando mais valor, ele vai ocupando posições diferentes dentro de um array
}

alert(`Esses são os itens que você incluiu a essa lista: ${items}`)