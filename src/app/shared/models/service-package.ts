export interface ServicePackage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  targetUsers: string;
  features: string[];
  duration: string;
  calendlyParam: string;
  enabled: boolean;
  featured: boolean;
  category: 'web' | 'gastro' | 'delivery';
}
