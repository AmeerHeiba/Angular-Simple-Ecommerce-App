export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    rating: number;
    category: string;
    brand?: string; // Make optional
    images: string[];
  }
  