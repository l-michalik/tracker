import { ColumnData, Task } from "../types/types";
import { handleDragOver } from "../utils";
import Column from "./Column";
import { Dispatch, SetStateAction } from "react";

type Props = {
  columns: ColumnData;
  setColumns: Dispatch<SetStateAction<ColumnData>>;
};

export default function Board({ columns, setColumns }: Props) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, toColumn: string) => {
    e.preventDefault();
    const { itemId, fromColumn }: { itemId: string; fromColumn: string } = JSON.parse(
      e.dataTransfer.getData("text/plain")
    );

    if (fromColumn === toColumn) return;

    const item = columns[fromColumn].find((task) => task.id === itemId);
    if (!item) return;

    setColumns((prev) => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter((task) => task.id !== itemId),
      [toColumn]: [...prev[toColumn], item],
    }));
  };

  return (
    <div className="flex gap-5 bg-gray-600 p-3">
      {Object.entries(columns).map(([columnName, tasks]) => (
        <Column
          key={columnName}
          name={columnName}
          tasks={tasks}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
}
