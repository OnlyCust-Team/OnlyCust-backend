const Review = require("../models/Review");

async function seed() {
  const rate1 = new Review({
    product: "iPhone 14 Pro",
    review: "Increíble teléfono con rendimiento de primer nivel, la calidad de la cámara es impresionante.",
    store: "Apple Store",
    price: 999.99,
    stars: 5,
    images: ""
  });

  const rate4 = new Review({
    product: "Samsung Galaxy Tab S8",
    review: "Excelente tableta para entretenimiento y productividad, pantalla vibrante.",
    store: "Tienda de Samsung",
    price: 699.99,
    stars: 4,
    images: ""
  });


  await rate1.save();
  await rate4.save();
}

module.exports = seed;