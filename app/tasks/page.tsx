"use client";
import { useEffect, useState } from "react";
import { Label, Select, TextInput, Button } from "flowbite-react";
import Board from "../components/Board";
import { Task } from "../types/types";
import useStore from "../lib/store";

let taskIdCounter = 7; // startujemy od 7, bo w store jest 6 zadań

export default function Home() {
  const [project, setProject] = useState("Projekt A");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  const { tasks: storeTasks } = useStore();

  useEffect(() => {
    setTasks(storeTasks);
  }, []);

  const handleNewTask = () => {
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: String(taskIdCounter++),
      text: newTaskText,
      assignedTo: "Ty",
      description: "",
      dueDate: "",
      priority: "",
      status: "todo",
    };

    setTasks((prev) => [...prev, newTask]);
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

      <Board tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
