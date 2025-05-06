import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes"

export const CreateTaskForm: React.FC = ()=> {
    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>
                    <PlusIcon/> Nova tarefa
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth={"32rem"}>
                <Dialog.Title>Nova tarefa</Dialog.Title>
                <Dialog.Description size={"2"} mb={"4"}>Adicione novas tarefas ao quadro.</Dialog.Description>
                <form>
                    <Flex direction={"column"} gap={"4"}>
                        <Box>
                            <Text as="label" htmlFor="title">Título</Text>
                            <TextField.Root placeholder="Defina um título" name="title" id="title" autoFocus required/>
                        </Box>

                        <Box>
                            <Text as="label" htmlFor="description">Descrição</Text>
                            <TextArea placeholder="Descreva a terega" name="description" id="description" required/>
                        </Box>

                        <Flex gap={"8"}>
                            <Box>
                                <Text as="div" mb={"2"}>Situação</Text>
                                <RadioGroup.Root name="status" defaultValue="todo">
                                    <RadioGroup.Item value="todo">
                                        Para fazer
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="doing">
                                        Fazendo
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="done">
                                        Concluída
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>

                            <Box>
                                <Text as="div" mb={"2"}>Prioridade</Text>
                                <RadioGroup.Root name="status" defaultValue="low">
                                    <RadioGroup.Item value="low">
                                        Para fazer
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="medium">
                                        Fazendo
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="high">
                                        Concluída
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>
                        </Flex>

                        <Flex gap={"2"} justify={"end"}>
                            <Dialog.Close>
                                <Button color="gray" variant="soft">Cancelar</Button>
                            </Dialog.Close>
                            <Button type="submit">Criar tarefa</Button>
                        </Flex>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}