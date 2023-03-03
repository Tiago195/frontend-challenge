import React, { useState } from 'react'
import { Filters } from './components/Filters';

import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { Todo } from './components/Todo';
import { ITask } from './interfaces/ITask';

import { Container } from './styles';

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <Container>
      <Header />
      <ProgressBar />
      <Filters text={text} setText={setText} />
      <Todo text={text} tasks={tasks} setTasks={setTasks} />
    </Container>
  )
}

export default App
