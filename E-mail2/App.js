const products_list = [
  {
    id: '35',
    name: 'Miniatura Homem de Ferro',
    price: 'R$ 50,25',
  },
  {
    id: '25',
    name: 'Miniatura Super Homem',
    price: 'R$ 37,51',
  },
  {
    id: '71',
    name: 'Miniatura Bernard',
    price: 'R$ 71,10',
  },
  {
    id: '56',
    name: 'Miniatura Batman',
    price: 'R$ 23,00',
  },
  {
    id: '56',
    name: 'Miniatura Darth Vader',
    price: 'R$ 89,00',
  },
  {
    id: '102',
    name: 'Miniatura Mestre Miyagi',
    price: 'R$ 1.234,56',
  },
];

const new_products_list = products_list.map((product) => {
  var newValue = product.price
    .replace('R$', '')
    .trim()
    .replace(/\./g, '')
    .replace(/\,/g, '.');

  const newItem = {
    ...product,
    item_price: parseFloat(newValue),
  };

  delete newItem.price;

  return newItem;
});

console.log(new_products_list);
