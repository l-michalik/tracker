import { Task } from "../types/types";
import { handleDragStart } from "../utils";

type Props = {
  task: Task;
  columnName: string;
};

export default function TaskCard({ task, columnName }: Props) {
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, task.id, columnName)}
      className="bg-white shadow rounded p-2 cursor-move"
    >
      <div className="font-bold">{task.text}</div>
      <div className="text-sm text-gray-600">
        📌 {task.priority || "brak"} | 📅 {task.dueDate || "brak"}
      </div>
      <div className="text-xs text-gray-500">👤 {task.assignedTo}</div>
    </div>
  );
}
