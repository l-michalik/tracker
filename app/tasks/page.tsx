"use client";
import { useState } from "react";
import { Label, Select, TextInput, Button } from "flowbite-react";
import Board from "../components/Board";
import { ColumnData, Task } from "../types/types";

const initialData: ColumnData = {
  todo: [
    {
      id: "1",
      text: "Task 1",
      assignedTo: "Ty",
      description: "",
      dueDate: "",
      priority: "",
    },
  ],
  inProgress: [],
  done: [],
};

let taskIdCounter = 2;

export default function Home() {
  const [project, setProject] = useState("Projekt A");
  const [columns, setColumns] = useState<ColumnData>(initialData);
  const [newTaskText, setNewTaskText] = useState("");

  const handleNewTask = () => {
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: String(taskIdCounter++),
      text: newTaskText,
      assignedTo: "Ty",
      description: "",
      dueDate: "",
      priority: "",
    };

    setColumns((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }));

    setNewTaskText("");
  };

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="max-w-[200px]">
        <Label htmlFor="projects">Wybierz projekt</Label>
        <Select id="projects" value={project} onChange={(e) => setProject(e.target.value)}>
          <option>Projekt A</option>
          <option>Projekt B</option>
          <option>Projekt C</option>
        </Select>
      </div>

      <div className="flex gap-2 max-w-md items-end">
        <TextInput
          placeholder="Nowe zadanie"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <Button onClick={handleNewTask}>Dodaj zadanie</Button>
      </div>

      <Board columns={columns} setColumns={setColumns} />
    </div>
  );
}
