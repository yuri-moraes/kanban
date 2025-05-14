import type { Task } from "../entities/Task";

export const tasksService = {
    async fetchTasks(): Promise<Task[]> {
        const responde = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
        const data: Task[] = await responde.json();
        return data;
    },

    async createTask(attributes: Omit<Task, "id">): Promise<Task> {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attributes)
        });
        const newTask = await response.json();
        return newTask;
    },

    async updateTask(id: number, attributes: Partial<Omit<Task, "id">>): Promise<Task> {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attributes)
        });
        const updatedTask = await response.json();
        return updatedTask;
    },

    async deleteTask(id: number): Promise<void> {
        await fetch(`${import.meta.env.VITE_API_URL}/tasks${id}`, {method:"DELETE ",});
    }
}