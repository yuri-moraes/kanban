import { useEffect, useState, type ReactNode } from "react";
import type { Task } from "../entities/Task";
import { tasksService } from "../servicies/api";
import { TasksContext } from "./TasksContext";

interface TasksContextProviderProps {
    children: ReactNode
}

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(()=> {
        tasksService.fetchTasks().then((data) => setTasks(data))
    }, [])

    const createTask = async (attributes: Omit<Task, "id">) => {
        const newTask = await tasksService.createTask(attributes)
        setTasks((currentState) => [...currentState, newTask])
    }

    const updateTask = async (id: string, attributes: Partial<Omit<Task, "id">>) => {
        setTasks((currentState) => {
            const updatedTasks = [...currentState];
            const taskIndex = updatedTasks.findIndex((task)=> task.id === id);
            Object.assign(updatedTasks[taskIndex], attributes)
            return updatedTasks
        })
    }

    const deleteTask = async (id: string) => {
        await tasksService.deleteTask(id);
        setTasks((currentState)=> currentState.filter((task)=> task.id !== id))
    }

    
    return (
        <TasksContext value={{ tasks, createTask, updateTask, deleteTask }}>
            {children}
        </TasksContext>
    )
}

export { TasksContext };
