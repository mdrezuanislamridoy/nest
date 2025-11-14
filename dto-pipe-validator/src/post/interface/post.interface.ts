export interface IPost {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: Date;
  updatedAt?: Date;
}
