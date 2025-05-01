export type Task = {
  id: string;
  text: string;
  assignedTo: string;
  description?: string;
  dueDate?: string;
  priority?: string;
};

export type ColumnData = {
  [column: string]: Task[];
};
