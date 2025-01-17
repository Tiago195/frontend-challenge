import React, { useState } from 'react'
import { Filters } from './components/Filters';

import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { Todo } from './components/Todo';
import { ITask, TStatus } from './interfaces/ITask';

import { Container } from './styles';

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [status, setStatus] = useState<TStatus>(' ');


  const clickToClearText = () => {
    setText('');
  }

  return (
    <Container>
      <Header />
      <ProgressBar tasks={tasks} />
      <Filters clickToClearText={clickToClearText} status={status} setStatus={setStatus} text={text} setText={setText} />
      <Todo clickToClearText={clickToClearText} status={status} text={text} tasks={tasks} setTasks={setTasks} />
    </Container>
  )
}

export default App
