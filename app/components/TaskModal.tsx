import { Task } from "../types/types";
import { Button, Select, TextInput, Textarea } from "flowbite-react";

type Props = {
    task: Task;
    formState: {
        description: string;
        dueDate: string;
        priority: string;
    };
    setFormState: React.Dispatch<
        React.SetStateAction<{
            description: string;
            dueDate: string;
            priority: string;
        }>
    >;
    onClose: () => void;
    onSave: () => void;
};

export default function TaskModal({ task, formState, setFormState, onClose, onSave }: Props) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow w-[400px] space-y-4">
                <h2 className="text-lg font-bold">Edytuj zadanie</h2>
                <Textarea
                    placeholder="Opis"
                    value={formState.description}
                    onChange={(e) =>
                        setFormState((prev) => ({ ...prev, description: e.target.value }))
                    }
                />
                <TextInput
                    placeholder="Termin"
                    type="date"
                    value={formState.dueDate}
                    onChange={(e) =>
                        setFormState((prev) => ({ ...prev, dueDate: e.target.value }))
                    }
                />
                <Select
                    value={formState.priority}
                    onChange={(e) =>
                        setFormState((prev) => ({ ...prev, priority: e.target.value }))
                    }
                >
                    <option value="">Priorytet</option>
                    <option value="Niski">Niski</option>
                    <option value="Średni">Średni</option>
                    <option value="Wysoki">Wysoki</option>
                </Select>
                <div className="flex justify-end gap-2">
                    <Button color="gray" onClick={onClose}>
                        Anuluj
                    </Button>
                    <Button onClick={onSave}>Zapisz</Button>
                </div>
            </div>
        </div>
    );
}
