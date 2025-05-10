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
        setTasks((currentState) => {
            const updatedTasks = [...currentState, newTask]
            return updatedTasks
        })
    }

    const updateTask = async (id: number, attributes: Partial<Omit<Task, "id">>) => {

    }

    const deleteTask = async (id: number) => {
        
    }

    
    return (
        <TasksContext value={{ tasks, createTask, updateTask, deleteTask }}>
            {children}
        </TasksContext>
    )
}

export { TasksContext };
