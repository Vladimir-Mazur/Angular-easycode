export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  isInvisible: boolean;
  showCompletedItem?: number;
  showUncompletedItem?: number;
  body?: string;
}