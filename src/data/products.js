const products = [
  {
    id: 1,
    title: "Blue Women's Handbag",
    description:
      "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
    category: "womens-bags",
    price: 49.99,
    discountPercentage: 15,
    rating: 2.92,
    stock: 76,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-five.webp",
  },
  {
    id: 2,
    title: "Heshe Women's Leather Bag",
    description:
      "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
    category: "womens-bags",
    price: 129.99,
    discountPercentage: 4,
    rating: 4.92,
    stock: 99,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-six.webp",
  },
  {
    id: 3,
    title: "Prada Women Bag",
    description:
      "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    category: "womens-bags",
    price: 599.99,
    discountPercentage: 14,
    rating: 2.71,
    stock: 75,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-seven.webp",
  },
  {
    id: 4,
    title: "White Faux Leather Backpack",
    description:
      "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
    category: "womens-bags",
    price: 39.99,
    discountPercentage: 15,
    rating: 3.36,
    stock: 39,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-eight.webp",
  },
  {
    id: 5,
    title: "Rolex Cellini Moonphase",
    description:
      "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
    category: "womens-watches",
    price: 15999.99,
    discountPercentage: 4,
    rating: 3.83,
    stock: 52,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-nine.webp",
  },
  {
    id: 6,
    title: "Rolex Datejust Women",
    description:
      "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
    category: "womens-watches",
    price: 10999.99,
    discountPercentage: 15,
    rating: 2.86,
    stock: 4,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-ten.webp",
  },
  {
    id: 7,
    title: "Watch Gold for Women",
    description:
      "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
    category: "womens-watches",
    price: 799.99,
    discountPercentage: 18,
    rating: 4.24,
    stock: 0,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-eleven.webp",
  },
  {
    id: 8,
    title: "Women's Wrist Watch",
    description:
      "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
    category: "womens-watches",
    price: 129.99,
    discountPercentage: 12,
    rating: 3.52,
    stock: 12,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-twelve.webp",
  },
  {
    id: 9,
    title: "Baseball Glove",
    description:
      "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
    category: "sports-accessories",
    price: 24.99,
    discountPercentage: 2.9,
    rating: 3.96,
    stock: 22,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-one.webp",
  },
  {
    id: 10,
    title: "Basketball",
    description:
      "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
    category: "sports-accessories",
    price: 14.99,
    discountPercentage: 7,
    rating: 4.66,
    stock: 75,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-two.webp",
  },
  {
    id: 11,
    title: "Basketball Rim",
    description:
      "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
    category: "sports-accessories",
    price: 39.99,
    discountPercentage: 7,
    rating: 4.6,
    stock: 43,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-three.webp",
  },
  {
    id: 12,
    title: "Cricket Ball",
    description:
      "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
    category: "sports-accessories",
    price: 12.99,
    discountPercentage: 8,
    rating: 3.53,
    stock: 30,
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
    },
    image: "image-four.webp",
  },
];

export function getAllProducts() {
  return products;
}
