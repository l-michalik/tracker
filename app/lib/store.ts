import { create } from 'zustand'
import { Project, Task, User } from '../types/types'
import { Dispatch, SetStateAction } from 'react'

interface StoreState {
  tasks: Task[]
  users: User[]
  projects: Project[]
  updateTask: (updatedTask: Task) => void
  setTasks: Dispatch<SetStateAction<Task[]>>
  moveTaskToColumn: (taskId: string, newColumn: string) => void
  addTask: (task: Task) => void
}

const initialTasks: Task[] = [
  {
    id: "1",
    projectId: "1",
    text: "Zaprojektować stronę główną",
    assignedTo: "Łukasz",
    description: "Stworzyć layout i główny układ strony",
    dueDate: "2025-05-10",
    priority: "wysoki",
    status: "todo",
  },
  {
    id: "2",
    projectId: "1",
    text: "Zintegrować API pogodowe",
    assignedTo: "Marta",
    description: "Dodać dane pogodowe do dashboardu",
    dueDate: "2025-05-12",
    priority: "średni",
    status: "todo",
  },
]

const initialUsers: User[] = [
  {
    id: "1",
    name: "Kasia",
    email: "ty@example.com",
    role: "admin",
  },
  {
    id: "2",
    name: "Mateusz",
    email: "kasia@example.com",
    role: "user",
  },
  {
    id: "3",
    name: "Admin",
    email: "marek@example.com",
    role: "user",
  },
]

const initialProjects: Project[] = [
  {
    id: "1",
    name: "Projekt A",
  },
  {
    id: "2",
    name: "Projekt B",
  },
  {
    id: "3",
    name: "Projekt C",
  },
]

const useStore = create<StoreState>((set) => ({
  tasks: initialTasks,
  users: initialUsers,
  projects: initialProjects,
  updateTask: (updatedTask: Task) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    })),
  setTasks: (action: SetStateAction<Task[]>) =>
    set((state) => ({
      tasks: typeof action === 'function' ? (action as (prevState: Task[]) => Task[])(state.tasks) : action,
    })),
  moveTaskToColumn: (taskId: string, newColumn: any) =>
    set((state) => ({
      tasks: state.tasks.map((task) => task.id === taskId ? { ...task, status: newColumn } : task),
    })),
  addTask: (task: Task) => set((state) => ({
    tasks: [...state.tasks, task],
  })),
}))

export default useStore
