export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  price?: string;
}

export interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  role?: string;
}