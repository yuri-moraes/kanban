import { Badge, Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes"
import type { FormEventHandler } from "react"
import { z } from "zod"
import { useTasks } from "../hooks/useTasks"
import type { Task } from "../entities/Task"

const UpdateTaskSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["todo", "doing", "done"]),
    priority: z.enum(["low", "medium", "high"])
})

export const UpdateTaskForm = ({task}: {task: Task})=> {    
    const { updateTask } = useTasks();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev)=> {
        ev.preventDefault();
        
        const formData = new FormData(ev.currentTarget);
        
        const title = formData.get("title");
        const description = formData.get("description");
        const status = formData.get("status");
        const priority = formData.get("priority")
        
        ev.currentTarget.reset();
        
        const taskData = UpdateTaskSchema.parse({title, description, status, priority})
        await updateTask(task.id, taskData);       
    }   

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <Button color="purple">
                Editar
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth={"32rem"}>
                <Dialog.Title>Editar tarefa</Dialog.Title>
                <Dialog.Description size={"2"} mb={"4"}>Edite a tarefa abaixo.</Dialog.Description>
                <form onSubmit={handleSubmit}>
                    <Flex direction={"column"} gap={"4"}>
                        <Box>
                            <Text as="label" htmlFor="title">Título</Text>
                            <TextField.Root placeholder="Defina um título" name="title" autoFocus required defaultValue={task.title}/>
                        </Box>

                        <Box>
                            <Text as="label" htmlFor="description">Descrição</Text>
                            <TextArea placeholder="Descreva a terega" name="description" required defaultValue={task.description}/>
                        </Box>

                        <Flex gap={"8"}>
                            <Box>
                                <Text as="div" mb={"2"}>Situação</Text>
                                <RadioGroup.Root name="status" defaultValue={task.status}>
                                    <RadioGroup.Item value="todo">
                                        <Badge color="gray">
                                            Para fazer
                                        </Badge>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="doing">
                                        <Badge color="brown">
                                            Fazendo
                                        </Badge>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="done">
                                        <Badge color="green">
                                            Concluída
                                        </Badge>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>

                            <Box>
                                <Text as="div" mb={"2"}>Prioridade</Text>
                                <RadioGroup.Root name="priority" defaultValue={task.priority}>
                                    <RadioGroup.Item value="low">
                                        <Badge color="sky">
                                            Baixa
                                        </Badge>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="medium">
                                        <Badge color="amber">
                                            Média
                                        </Badge>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="high">
                                        <Badge color="tomato">
                                            Alta
                                        </Badge>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>
                        </Flex>

                        <Flex gap={"2"} justify={"end"}>
                            <Dialog.Close>
                                <Button color="gray" variant="soft">Cancelar</Button>
                            </Dialog.Close>
                            <Button type="submit">Atualizar tarefa</Button>
                        </Flex>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}