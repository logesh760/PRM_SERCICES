export interface ServiceItem {
  id: string;
  title: string;
  titleTa?: string;
  category: 'agriculture' | 'decoration';
  description: string;
  descriptionTa?: string;
  features: string[];
  featuresTa?: string[];
  iconName: string;
  tag?: string;
  tagTa?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleTa?: string;
  category: 'agriculture' | 'decoration';
  imageUrl: string;
  description: string;
  descriptionTa?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameTa?: string;
  role: string;
  roleTa?: string;
  location: string;
  locationTa?: string;
  comment: string;
  commentTa?: string;
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
