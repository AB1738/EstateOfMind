export interface Property {
  id: number;
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqFt: number;
  imageUrl: string;
}

export type Properties = Property[];
