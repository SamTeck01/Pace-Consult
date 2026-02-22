export type PropertyType =
  | "land"
  | "house"
  | "apartment"
  | "townhouse"
  | "commercial";

export type TransactionType = "buy" | "sell" | "rent";

export interface Property {
  id: string;
  slug: string;
  type: PropertyType;
  transaction: TransactionType;
  title: string;
  description: string;
  price_ngn: number;
  location: string;
  city?: string;
  state?: string;
  bedrooms: number | null;
  bathrooms: number | null;
  area_sqm: number | null;
  plot_size_sqm: number | null;
  images: string[];
  floor_plan_url: string | null;
  map_lat: number | null;
  map_lng: number | null;
  contact_phone: string | null;
  contact_whatsapp: string | null;
  agency_name: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Location {
  id: string;
  name: string;
  state: string;
  slug: string;
}
