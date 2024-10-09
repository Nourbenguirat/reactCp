
const Prod = [
  {
    name: "Dell XPS 13",
    price: 999.99,
    description: "Ultra-thin, lightweight, and powerful laptop with a stunning display.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dk4dQs3Umo6Gigm-3c2thhiSeUYjMh9HWg&s" 
  },
  {
    name: "MacBook Air",
    price: 1199.00,
    description: "Apple's lightweight laptop with M1 chip and retina display.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qfqWKf-Q4NXXBBnC4_RTe-hqQYielMJt9Q&s"
  },
  {
    name: "HP Spectre x360",
    price: 1399.99,
    description: "Versatile 2-in-1 laptop with a sleek design and excellent performance.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhdt2xwMDhvio2XUTw4TL711jnj0dfwzy0A&s"
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1450.00,
    description: "Durable and high-performance laptop, ideal for business use.",
    imageUrl: "data:image/jpeg;base64,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"
  },
  {
    name: "Asus ZenBook 14",
    price: 899.99,
    description: "Compact and stylish laptop with solid performance and battery life.",
    imageUrl: "data:image/jpeg;base64,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"
  },
  {
    name: "Acer Swift 3",
    price: 699.99,
    description: "Affordable laptop with good performance and battery life.",
    imageUrl: "data:image/jpeg;base64,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"
  }
];

export default Prod;
