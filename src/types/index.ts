export interface Review {
  id: number;
  rating: number;
  content: string;
  image_filename?: string;
  created_at: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

export interface CraneData {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  imagePlaceholder: string;
}

export interface AdminAuth {
  email: string;
  isAdmin: boolean;
}