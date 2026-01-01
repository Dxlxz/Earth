
export interface Ecosystem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface EarthInsight {
  title: string;
  content: string;
  source?: string;
}

export interface GlobalVital {
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}
