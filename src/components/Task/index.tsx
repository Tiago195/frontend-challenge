import React, { useState } from 'react'
import { ITask } from '../../interfaces/ITask'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { Button, Buttons, Container } from './style'

type Props = {
  i: number
  task: ITask
}

export const Task = ({ task, i }: Props) => {
  const [isViewButtons, setIsViewButtons] = useState(false);

  return (
    <Container key={`${task} ${i}`} onMouseEnter={() => setIsViewButtons(true)} onMouseLeave={() => setIsViewButtons(false)}>
      <div className='text'>
        <span>{task.content}</span>
      </div>

      {isViewButtons && (
        <Buttons>
          <Button background='#E34F4F'><RemoveCircleIcon fontSize='small' /></Button>
          <Button background='#5DE290'><CheckCircleIcon fontSize='small' /></Button>
        </Buttons>
      )}

    </Container>
  )
}
