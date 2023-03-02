import React from 'react'
import { Filters } from './components/Filters';

import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { Todo } from './components/Todo';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <ProgressBar />
      <Filters />
      <Todo />
    </Container>
  )
}

export default App
