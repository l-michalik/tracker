// store.ts
import { create } from 'zustand'
import { Task } from '../types/types'


interface StoreState {
  tasks: Task[]
}

const initialTasks: Task[] = [
  {
    id: "1",
    text: "Zaprojektować stronę główną",
    assignedTo: "Ty",
    description: "Stworzyć layout i główny układ strony",
    dueDate: "2025-05-10",
    priority: "wysoki",
    status: "todo",
  },
  {
    id: "2",
    text: "Zintegrować API pogodowe",
    assignedTo: "Kasia",
    description: "Dodać dane pogodowe do dashboardu",
    dueDate: "2025-05-12",
    priority: "średni",
    status: "todo",
  },
  {
    id: "3",
    text: "Przygotować bazę danych",
    assignedTo: "Marek",
    description: "Utworzyć schemat bazy dla użytkowników",
    dueDate: "2025-05-08",
    priority: "wysoki",
    status: "todo",
  },
  {
    id: "4",
    text: "Dodać formularz kontaktowy",
    assignedTo: "Ty",
    description: "Prosty formularz z walidacją",
    dueDate: "2025-05-15",
    priority: "niski",
    status: "todo",
  },
  {
    id: "5",
    text: "Stylowanie komponentów",
    assignedTo: "Kasia",
    description: "Użycie Tailwind CSS lub podobnego frameworka",
    dueDate: "2025-05-11",
    priority: "średni",
    status: "blocked",
  },
  {
    id: "6",
    text: "Konfiguracja CI/CD",
    assignedTo: "Marek",
    description: "Automatyczne wdrażanie aplikacji",
    dueDate: "2025-05-20",
    priority: "wysoki",
    status: "done",
  },
]

const useStore = create<StoreState>((set) => ({
  tasks: initialTasks
}))

export default useStore
