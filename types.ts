
export interface Product {
  id: string;
  name: string;
  pricePerM2: number;
  image: string;
  category: string;
  subcategory?: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}

export interface QuizStep {
  id: number;
  question: string;
  options: string[];
}

export interface MenuItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}
