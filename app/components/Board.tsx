import { Task } from "../types/types";
import { Dispatch, SetStateAction } from "react";
import Column from "./Column";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export default function Board({ tasks, setTasks }: Props) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, toStatus: string) => {
    e.preventDefault();
    const { itemId, fromStatus }: { itemId: string; fromStatus: string } = JSON.parse(
      e.dataTransfer.getData("text/plain")
    );

    if (fromStatus === toStatus) return;

    const item = tasks.find((task) => task.id === itemId);
    if (!item) return;

    setTasks((prev: any) => {
      const updatedTasks = prev.map((task:any) =>
        task.id === itemId ? { ...task, status: toStatus } : task
      );
      return updatedTasks;
    });
  };

  // Grupowanie zadań według statusu
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.status]) acc[task.status] = [];
    acc[task.status].push(task);
    return acc;
  }, {} as { [key: string]: Task[] });

  return (
    <div className="flex gap-5 bg-gray-600 p-3 rounded-lg overflow-x-auto" style={{ whiteSpace: "nowrap" }}>
      {["todo", "inProgress", "blocked", "done"].map((status) => (
        <Column
          key={status}
          name={status}
          tasks={groupedTasks[status] || []}
          onDrop={(e) => handleDrop(e, status)}
        />
      ))}
    </div>
  );
}
