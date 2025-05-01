export interface Task {
  id: string
  text: string
  assignedTo: string
  description: string
  dueDate: string
  priority: string
  status: Status
}

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

export type Status = 'todo' | 'inProgress' | 'blocked' | 'done'

export type ColumnData = {
  [column: string]: Task[];
};
