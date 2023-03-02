import React, { useState } from 'react'
import { Filters } from './components/Filters';

import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { Todo } from './components/Todo';

import { Container } from './styles';

function App() {
  const [text, setText] = useState("");

  return (
    <Container>
      <Header />
      <ProgressBar />
      <Filters text={text} setText={setText} />
      <Todo text={text} />
    </Container>
  )
}

export default App
