const Product = require("../models/Product");

async function seed() {
  const product1 = new Product({
    name: "iPhone 15 Pro",
    brand: "Apple",
    gama: "Alta",
    price: 999.99,
    image: "https://pe.tiendasishop.com/cdn/shop/files/IMG-10942095_1b5ed0b6-03e2-4a2c-b831-6620904e8ac5_550x.jpg?v=1722625100",
    created_at: new Date(),
    reviews: [
      {
        username: "user1@example.com",
        review: "Increíble teléfono con rendimiento de primer nivel, la calidad de la cámara es impresionante.",
        stars: 5,
        created_at: new Date()
      },
      {
        username: "user3@example.com",
        review: "El diseño es elegante y el rendimiento es excepcional, definitivamente vale la pena.",
        stars: 5,
        created_at: new Date()
      }
    ]
  });

  const product2 = new Product({
    name: "Samsung Galaxy Tab S8",
    brand: "Samsung",
    gama: "Alta",
    price: 699.99,
    image: "https://images.samsung.com/is/image/samsung/assets/pe/tablets/S8-654x654_4.png?imwidth=480",
    created_at: new Date(),
    reviews: [
      {
        username: "user2@example.com",
        review: "Excelente tableta para entretenimiento y productividad, pantalla vibrante.",
        stars: 4,
        created_at: new Date()
      },
      {
        username: "user4@example.com",
        review: "La batería dura mucho y la calidad de construcción es sólida. Recomendada.",
        stars: 4,
        created_at: new Date()
      }
    ]
  });

  await product1.save();
  await product2.save();
}

module.exports = seed;
