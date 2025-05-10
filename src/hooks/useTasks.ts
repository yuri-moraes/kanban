import { useContext } from "react"
import { TasksContext } from "../contexts/TasksContextProvider"

export const useTasks = ()=> {
    return useContext(TasksContext)
}