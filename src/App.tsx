import { Box, Flex, Heading } from '@radix-ui/themes'
import { CreateTaskForm } from './components/CreateTaskForm'

function App() {

  return (
    <Box maxWidth="80rem" mx="auto">

      <Box height={"4rem"}>
        <Flex align={"center"} gap={"4"} height={"100%"}>
          <Heading size={"8"} weight={"light"}>Kanban</Heading>
          <CreateTaskForm/>
        </Flex>
      </Box>

      <Box>
        <Heading as='h2'>Quadro de tarefas</Heading>
      </Box>
    </Box>
  )
}

export default App
