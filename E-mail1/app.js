var cart_products = [
  {
    product_id: 'IN2350',
    product_name: 'Teclado Mecânico Rozar K600',
    product_price: '650.00',
    product_cart_quantity: '1',
    product_url: 'http://www.foo.com/p/IN2350',
    product_category: 'peripherals',
    product_stock_quantity: 30,
    product_brand: 'Rozar',
  },
  {
    product_id: 'IN4566',
    product_name: 'Monitor Gamer LED GL UltraWide 25"',
    product_price: '1399.99',
    product_cart_quantity: '1',
    product_url: 'http://www.foo.com/p/IN4566',
    product_category: 'monitor',
    product_stock_quantity: 5,
    product_brand: 'GL',
  },
  {
    product_id: 'ES7112',
    product_name: 'Pacote de Post-it Fenix 50 unidades',
    product_price: '14.95',
    product_cart_quantity: '5',
    product_url: 'http://www.foo.com/p/ES7112',
    product_category: 'office',
    product_stock_quantity: 22,
    product_brand: 'Fenix',
  },
  {
    product_id: 'BR8810',
    product_name: 'Miniatura Yoshi Haras',
    product_price: '6.50',
    product_cart_quantity: '2',
    product_url: 'http://www.foo.com/p/BR8810',
    product_category: 'others',
    product_stock_quantity: 0,
    product_brand: 'Haras',
  },
  {
    product_id: 'IN2350',
    product_name: 'Teclado Mecânico Rozar K600',
    product_cart_quantity: '650.00',
    product_quantity: '1',
    product_url: 'http://www.foo.com/p/IN2350',
    product_category: 'peripherals',
    product_stock_quantity: 30,
    product_brand: 'Rozar',
  },
  {
    product_id: 'ES7112',
    product_name: 'Pacote de Post-it Fenix 50 unidades',
    product_price: '14.95',
    product_quantity: '5',
    product_url: 'http://www.foo.com/p/ES7112',
    product_category: 'office',
    product_stock_quantity: 22,
    product_brand: 'Fenix',
  },
];

const newList = cart_products.filter(
  (product) => product.product_stock_quantity > 0,
);

const cart_products_filtered = newList.reduce((acc, product) => {
  acc[product.product_id] = product;
  return acc;
}, {});

const cart_products_sanitized = Object.keys(cart_products_filtered).map(
  (key) => cart_products_filtered[key],
);

console.log('cart_products_sanitized = ', cart_products_sanitized);
