import { Badge, Flex, Grid } from "@radix-ui/themes"
import type { Task } from "../entities/Task"

export const TaskBoard: React.FC = ()=> {

    const tasksTodo: Task[] = [
        {
            "id": 2,
            "title": "Reunião com a equipe",
            "description": "Reunião para discutir o progresso do projeto e próximos passos.",
            "status": "todo",
            "priority": "high"
        },
    ]
    const taksInProgress: Task[] = [
        {
            "id": 1,
            "title": "Enviar relatório",
            "description": "Enviar o relatório mensal para o departamento financeiro.",
            "status": "doing",
            "priority": "high"
        },
    ]
    const tasksDone: Task[] = [
        {
            "id": 3,
            "title": "Atualizar o site",
            "description": "Fazer atualizações no site da empresa com novas informações.",
            "status": "done",
            "priority": "medium"
        },
    ]



    return (
        <Grid columns={"3"} gap={"4"} minWidth={"64rem"}>
            <Flex direction={"column"} gap={"4"}>
                <Badge size={"3"} color="gray">
                    Para Fazer (2)
                </Badge>
            </Flex>

            <Flex direction={"column"} gap={"4"}>
                <Badge size={"3"} color="brown">
                    Em progresso (2)
                </Badge>
            </Flex>

            <Flex direction={"column"} gap={"4"}>
                <Badge size={"3"} color="green">
                    Concluídas (2)
                </Badge>
            </Flex>
        </Grid>
    )
}