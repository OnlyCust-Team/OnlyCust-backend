const Review = require("../models/Review");

async function seed() {
  const review1 = new Review({
    product: "iPhone 14 Pro",
    description: "Increíble teléfono con rendimiento de primer nivel, la calidad de la cámara es impresionante.",
    store: "Apple Store",
    price: 999.99,
    stars: 5,
    tags: "tecnología",
    images: ""
  });
  
  const review2 = new Review({
    product: "Dell XPS 13",
    description: "Excelente laptop tanto para el trabajo como para uso personal. Ligera y potente.",
    store: "Tienda en línea de Dell",
    price: 1249.99,
    stars: 4,
    tags: "tecnología",
    images: ""
  });

  const review3 = new Review({
    product: "Sony WH-1000XM4",
    description: "Auriculares con cancelación de ruido fantástica y gran calidad de sonido.",
    store: "Best Buy",
    price: 349.99,
    stars: 5,
    tags: "tecnología",
    images: ""
  });

  const review4 = new Review({
    product: "Samsung Galaxy Tab S8",
    description: "Excelente tableta para entretenimiento y productividad, pantalla vibrante.",
    store: "Tienda de Samsung",
    price: 699.99,
    stars: 4,
    tags: "tecnología",
    images: ""
  });

  const review5 = new Review({
    product: "Fitbit Charge 5",
    description: "Rastreador de actividad preciso con una variedad de funciones de salud.",
    store: "Amazon",
    price: 129.99,
    stars: 3,
    tags: "fitness",
    images: ""
  });

  const review6 = new Review({
    product: "Nike Air Max 270",
    description: "Zapatos cómodos, perfectos para el uso diario y entrenamientos ligeros.",
    store: "Tienda de Nike",
    price: 150.00,
    stars: 4,
    tags: "calzado",
    images: ""
  });

  await review1.save();
  await review2.save();
  await review3.save();
  await review4.save();
  await review5.save();
  await review6.save();
}

module.exports = seed;