export interface ServiceItem {
  id: string;
  title: string;
  category: 'agriculture' | 'decoration';
  description: string;
  features: string[];
  iconName: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'agriculture' | 'decoration';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  date: string;
  location: string;
  message?: string;
  status: 'new' | 'contacted' | 'completed';
  createdAt: string;
}
