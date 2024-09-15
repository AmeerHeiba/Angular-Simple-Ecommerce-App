export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    rating: number;
    category: string;
    brand?: string; 
    images: string[];
    thumbnail: string;
    availabilityStatus: string;
    discountPercentage: number;
  }
  