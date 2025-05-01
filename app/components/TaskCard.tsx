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
      className="bg-gray-600 shadow rounded p-2 cursor-move justify-between"
    >
      <div className="font-bold">{task.text}</div>
      <hr />
      <div className="flex gap-2">
        <div>📌 {task.priority || "brak"}</div>
        <div>📅 {task.dueDate || "brak"}</div>
        <div>👤 {task.assignedTo || "brak"}</div>
      </div>
    </div>
  );
}
