import { create } from 'zustand'
import { Project, Task, User } from '../types/types'
import { Dispatch, SetStateAction } from 'react'

interface StoreState {
  tasks: Task[]
  users: User[]
  projects: Project[],
  currentUser: User
  updateTask: (updatedTask: Task) => void
  setTasks: Dispatch<SetStateAction<Task[]>>
  moveTaskToColumn: (taskId: string, newColumn: string) => void
  addTask: (task: Task) => void
  updateTaskTime: (taskId: string, time: number) => void;
  setCurrentUser: (user: User) => void 
}

const initialTasks: Task[] = [
  {
    id: "1",
    projectId: "1",
    text: "Zaprojektować stronę główną",
    assignedTo: {
      id: "1",
      name: "Kasia",
    },
    description: "Stworzyć layout i główny układ strony",
    dueDate: "2025-05-10",
    priority: "wysoki",
    status: "todo",
    elapsedTime: 0,
  },
  {
    id: "2",
    projectId: "1",
    text: "Zintegrować API pogodowe",
    assignedTo: {
      id: "2",
      name: "Mateusz",
    },
    description: "Dodać dane pogodowe do dashboardu",
    dueDate: "2025-05-12",
    priority: "średni",
    status: "todo",
    elapsedTime: 0,
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
  currentUser: initialUsers[0],
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
  updateTaskTime: (taskId: string, time: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, elapsedTime: time } : task
      ),
    })),
  setCurrentUser: (user: User) => set(() => ({
    currentUser: user,
  })),
}))

export default useStore
