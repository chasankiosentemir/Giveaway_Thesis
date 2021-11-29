import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Chasan",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Chasan A.E.",
        logo: "/images/logo-1.jpg",
        description: "best seller",
        rating: 4.5,
        numReviews: 120,
      },
    },

    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "White T-Shirt",
      category: "T-Shirt",
      image: "/images/product-1.png",
      price: 0,
      countInStock: 1,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "100% Cotton",
    },
    {
      name: "Blue Trouser",
      category: "Trouser",
      image: "/images/product-2.jpg",
      price: 0,
      countInStock: 1,
      brand: "Non Brand",
      rating: 4.5,
      numReviews: 10,
      description: "100% Cotton",
    },
    {
      name: "Brown Shoes",
      category: "Shoes",
      image: "/images/product-3.jpg",
      price: 10,
      countInStock: 0,
      brand: "Dolce and Gabbana",
      rating: 4.5,
      numReviews: 10,
      description: "100% Leather",
    },
  ],
};

export default data;
