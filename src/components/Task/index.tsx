import React, { Dispatch, SetStateAction, useState } from 'react'
import { ITask } from '../../interfaces/ITask'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { Button, Buttons, Container } from './style'

type Props = {
  task: ITask
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const Task = ({ task, setTasks }: Props) => {
  const [isViewButtons, setIsViewButtons] = useState(false);

  const handleRemovedTask = () => {
    setTasks(old => old.filter(e => e.id !== task.id));
  }
  const handleFinishedTask = () => {
    task.finished = true;
    setTasks(old => [...old]);
  }

  return (
    <Container onMouseEnter={() => setIsViewButtons(true)} onMouseLeave={() => setIsViewButtons(false)}>
      <div className='text'>
        <span>{task.content}</span>
      </div>

      {isViewButtons && (
        <Buttons>
          <Button onClick={handleRemovedTask} background='#E34F4F'><RemoveCircleIcon fontSize='small' /></Button>
          <Button onClick={handleFinishedTask} background='#5DE290'><CheckCircleIcon fontSize='small' /></Button>
        </Buttons>
      )}

    </Container>
  )
}
