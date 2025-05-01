export interface Task {
  id: string
  text: string
  assignedTo: string
  description: string
  dueDate: string
  priority: string
  status: Status
}

export type Status = 'todo' | 'inProgress' | 'blocked' | 'done'

export type ColumnData = {
  [column: string]: Task[];
};
