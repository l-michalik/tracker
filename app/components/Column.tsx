import { Task } from "../types/types";
import { handleDragOver } from "../utils";
import TaskCard from "./TaskCard";

type Props = {
  name: string;
  tasks: Task[];
  onDrop: (e: React.DragEvent<HTMLDivElement>, toColumn: string) => void;
};

export default function Column({ name, tasks, onDrop }: Props) {
  return (
    <div
      className="bg-gray-800 rounded-md p-3 min-h-[200px] w-[500px]"
      onDrop={(e) => onDrop(e, name)}
      onDragOver={handleDragOver}
    >
      <h3 className="text-lg font-semibold capitalize mb-3">{name}</h3>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} columnName={name} />
        ))}
      </div>
    </div>
  );
}
