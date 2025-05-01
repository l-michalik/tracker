import { create } from 'zustand'
import { Task, User } from '../types/types'
import { Dispatch, SetStateAction } from 'react'

interface StoreState {
  tasks: Task[]
  users: User[]
  updateTask: (updatedTask: Task) => void,
  setTasks: Dispatch<SetStateAction<Task[]>>
}

const initialTasks: Task[] = [
  {
    id: "1",
    text: "Zaprojektować stronę główną",
    assignedTo: "Łukasz",
    description: "Stworzyć layout i główny układ strony",
    dueDate: "2025-05-10",
    priority: "wysoki",
    status: "todo",
  },
  {
    id: "2",
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

const useStore = create<StoreState>((set) => ({
  tasks: initialTasks,
  users: initialUsers,
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
}))

export default useStore
