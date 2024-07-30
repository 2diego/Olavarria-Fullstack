const productos = [
  'Arroz', 'Fideos', 'Salsa', 'Queso', 'Sal', 'Pan', 'Facturas', 'Torta', 'Masas Finas', 'Prepizzas', 
  'Lomo', 'Vacio', 'Churrasco', 'Milanesa', 'Pollo', 'Manzana', 'Naranja', 'Banana', 'Tomate', 'Lechuga', 
  'Agua', 'Gaseosa', 'Energizante', 'Cerveza', 'Vino', 'Desodorante', 'Jabon', 'Shampoo', 'Acondicionador', 
  'Dentrifico', 'Detergente', 'Desengrasante', 'Lavandina', 'Escoba', 'Secador', 'Caramelos', 'Alfajores', 
  'Chocolate', 'Snack dulce', 'Snack salado'
];

const precios = [
  400, 450, 350, 700, 320, 750, 800, 1100, 1050, 1200, 1500, 1750, 1500, 1600, 1300, 750, 750, 800, 1100, 
  900, 850, 1200, 1500, 1500, 1700, 1200, 750, 980, 980, 850, 760, 750, 700, 980, 950, 500, 1000, 1200, 750, 
  750
];

const stock = [
  58, 63, 35, 40, 45, 27, 23, 17, 11, 15, 19, 20, 29, 21, 30, 35, 39, 40, 49, 18, 69, 81, 27, 75, 77, 37, 39, 
  43, 47, 49, 71, 83, 91, 23, 28, 124, 55, 31, 21, 23
];

const productosCombinados = productos.map((producto, index) => ({
  name: producto,
  precio: precios[index],
  stock: stock[index]
}));

console.log(productosCombinados);
