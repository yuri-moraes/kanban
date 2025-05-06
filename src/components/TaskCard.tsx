import { Card } from "@radix-ui/themes"
import type { Task } from "../entities/Task"

interface TaskCardProps {
    tasks: Task
}

export const TaskCard: React.FC<TaskCardProps> = (task) => {

    return (
        <Card>
            {task.tasks.description}
        </Card>
    )
}