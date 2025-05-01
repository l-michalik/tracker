import { Task } from "../types/types";
import { handleDragStart } from "../utils";
import { Badge } from "flowbite-react";

type Props = {
  task: Task;
  columnName: string;
};

export default function TaskCard({ task, columnName }: Props) {
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, task.id, columnName)}
      className="task-card bg-gray-600 shadow-lg rounded p-3 cursor-move flex flex-col"
    >
      {/* Task title */}
      <div className="task-title text-lg font-semibold">{task.text}</div>

      <hr className="my-2" />

      {/* Task details */}
      <div className="flex text-sm">
        {[
          { icon: "📌", color: task.priority === "wysoki" ? "red" : task.priority === "średni" ? "yellow" : "green", text: task.priority || "niski" },
          { icon: "📅", text: task.dueDate || "Brak daty" },
          { icon: "👤", text: task.assignedTo || "Brak przypisania" },
        ].map(({ icon, color, text }, index) => (
          <div key={index} className={`flex items-center justify-left gap-2 flex-1`}>
            <span role="img" aria-label="icon">{icon}</span>
            <Badge className="w-20" color={color}>{text}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
