"use client";

import useStore from "../lib/store";
import TimerTaskCard from "./TimerTaskCard";

export default function TaskList() {
  const tasks = useStore((state) => state.tasks);

  return (
    <div className="space-y-4 flex gap-4">
      {tasks.map((task) => (
        <TimerTaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
