export interface Furniture {
  id: number;
  title: string;
  category: string;
  price: number; // Updated to number
  image: string;
  description: string;
}

export const furnitures: Furniture[] = [
  {
    id: 1,
    image: "/living/liv1.jpg",
    title: "Living Product 1",
    price: 35000,
    category: "Living",
    description: "Traditionally beautiful",
  },
  {
    id: 2,
    image: "/living/liv2.jpg",
    title: "Living Product 2",
    price: 45000,
    category: "Living",
    description: "Lovely design and texture for you",
  },
  {
    id: 3,
    image: "/living/liv2.jpg",
    title: "Living Product 3",
    price: 95000,
    category: "Living",
    description: "Exquisite design",
  },
  {
    id: 4,
    image: "/living/liv4.jpg",
    title: "Living Product 4",
    price: 205000,
    category: "Living",
    description: "Stylish and modern",
  },
  {
    id: 5,
    image: "/living/liv1.jpg",
    title: "Living Product 5",
    price: 35000,
    category: "Living",
    description: "Traditionally beautiful",
  },
  {
    id: 6,
    image: "/living/liv6.jpg",
    title: "Living Product 6",
    price: 45000,
    category: "Living",
    description: "Lovely design and texture for you",
  },
  {
    id: 7,
    image: "/living/liv7.jpg",
    title: "Living Product 7",
    price: 95000,
    category: "Living",
    description: "Exquisite design",
  },
  {
    id: 8,
    image: "/living/liv8.jpg",
    title: "living Product 8",
    price: 205000,
    category: "Living",
    description: "Stylish and modern",
  },
  {
    id: 9,
    image: "/living/liv9.jpg",
    title: "Living Product 9",
    price: 35000,
    category: "Living",
    description: "Traditionally beautiful",
  },
  {
    id: 10,
    image: "/living/liv10.jpg",
    title: "Living Product 10",
    price: 45000,
    category: "Living",
    description: "Lovely design and texture for you",
  },
  {
    id: 11,
    image: "/living/liv8.jpg",
    title: "Living Product 11",
    price: 95000,
    category: "Living",
    description: "Exquisite design",
  },
  {
    id: 12,
    image: "/living/liv12.jpg",
    title: "living Product 12",
    price: 205000,
    category: "Living",
    description: "Stylish and modern",
  },
  {
    id: 13,
    image: "/living/liv13.jpg",
    title: "Living Product 13",
    price: 35000,
    category: "Living",
    description: "Traditionally beautiful",
  },
  {
    id: 14,
    image: "/bedroom/bed1.jpg",
    title: "Bedroom Product 1",
    price: 45000,
    category: "Bedroom",
    description: "Lovely design and texture for you",
  },
  {
    id: 15,
    image: "/dining/din1.jpg",
    title: "Dining Product 1",
    price: 95000,
    category: "Dining",
    description: "Exquisite design",
  },
  {
    id: 16,
    image: "/office/off1.jpg",
    title: "Office Product 1",
    price: 205000,
    category: "Office",
    description: "Stylish and modern",
  },
  // Add the rest of the furniture data here
];
