export type Portfolio = {
  id?: number;
  title: string;
  date?: string;
  description?: string;
  images?: {
    sm: string;
    md: string;
    default: string;
  };
};
