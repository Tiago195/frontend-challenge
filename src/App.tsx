import React from 'react'

import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <ProgressBar />
    </Container>
  )
}

export default App
