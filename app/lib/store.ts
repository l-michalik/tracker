// store.ts
import { create } from 'zustand'

export interface Task {
  id: string
  text: string
  assignedTo: string
  description: string
  dueDate: string
  priority: string
}

export interface ColumnData {
  todo: Task[]
  inProgress: Task[]
  blocked: Task[]
  done: Task[]
}

interface StoreState {
  data: ColumnData
}

const initialData: ColumnData = {
  todo: [
    {
      id: "1",
      text: "Zaprojektować stronę główną",
      assignedTo: "Ty",
      description: "Stworzyć layout i główny układ strony",
      dueDate: "2025-05-10",
      priority: "wysoki",
    },
    {
      id: "2",
      text: "Zintegrować API pogodowe",
      assignedTo: "Kasia",
      description: "Dodać dane pogodowe do dashboardu",
      dueDate: "2025-05-12",
      priority: "średni",
    },
    {
      id: "3",
      text: "Przygotować bazę danych",
      assignedTo: "Marek",
      description: "Utworzyć schemat bazy dla użytkowników",
      dueDate: "2025-05-08",
      priority: "wysoki",
    },
    {
      id: "4",
      text: "Dodać formularz kontaktowy",
      assignedTo: "Ty",
      description: "Prosty formularz z walidacją",
      dueDate: "2025-05-15",
      priority: "niski",
    },
  ],
  inProgress: [],
  blocked: [
    {
      id: "5",
      text: "Stylowanie komponentów",
      assignedTo: "Kasia",
      description: "Użycie Tailwind CSS lub podobnego frameworka",
      dueDate: "2025-05-11",
      priority: "średni",
    },
  ],
  done: [
    {
      id: "6",
      text: "Konfiguracja CI/CD",
      assignedTo: "Marek",
      description: "Automatyczne wdrażanie aplikacji",
      dueDate: "2025-05-20",
      priority: "wysoki",
    },
  ],
}

const useStore = create<StoreState>((set) => ({
  data: initialData
}))

export default useStore
