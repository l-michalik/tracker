"use client";
import { useEffect, useState } from "react";
import { Label, Select, TextInput, Button } from "flowbite-react";
import Board from "../components/Board";
import { Task } from "../types/types";
import useStore from "../lib/store";

let taskIdCounter = 7;

export default function Home() {
  const [project, setProject] = useState("Projekt A");
  const [newTaskText, setNewTaskText] = useState("");

  const { tasks, projects ,setTasks } = useStore();

  const handleNewTask = () => {
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: String(taskIdCounter++),
      projectId: project,
      text: newTaskText,
      assignedTo: "Ty",
      description: "",
      dueDate: "",
      priority: "",
      status: "todo",
    };

    setTasks((prev: Task[]) => [...prev, newTask]);
    setNewTaskText("");
  };

  useEffect(() => {
    // @TODO
  }, [project]);

  return (
    <div className="p-5 flex flex-col gap-5 bg-gray-900 h-screen">
      <div className="max-w-[200px] flex flex-col gap-2">
        <Label htmlFor="projects">Wybierz projekt</Label>
        <Select id="projects" value={project} onChange={(e) => setProject(e.target.value)}>
          {projects.map((project) => (
            <option key={project.id} value={project.name}>
              {project.name}
            </option>
          ))}
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
