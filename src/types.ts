export interface VideoItem {
  id: string;
  title: string;
  category: string;
  creator: string;
  location: string;
  duration: string;
  aspectRatio: string;
  platform: string;
  imageUrl: string;
  metrics?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
}
