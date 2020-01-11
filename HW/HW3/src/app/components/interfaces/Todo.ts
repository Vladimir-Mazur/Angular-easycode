export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  isInvisible: boolean;
  body?: string;
}