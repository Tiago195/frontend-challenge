import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { ITask } from '../../interfaces/ITask'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { Button, Buttons, Container, Editing } from './style'

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
    task.status = "done ";
    setTasks(old => [...old]);
  }

  const editing = ({ target }: any) => {
    setTasks(old => {
      const index = old.findIndex(x => x.id === task.id);
      old[index].content = target.value;

      return [...old];
    })
  }

  return (
    <Container onMouseEnter={() => setIsViewButtons(true)} onMouseLeave={() => setIsViewButtons(false)}>
      <div className='text'>
        {isViewButtons ? (
          <label htmlFor="edit">
            <input type="text" id='edit' name='edit' value={task.content} onChange={editing} />
          </label>
        ) : (
          <span>{task.content}</span>
        )}
      </div>

      {isViewButtons && (
        <Editing>
          <div className='triangle' />
          <div className='text'>
            <span>Edit task</span>
          </div>
        </Editing>
      )}

      {isViewButtons && (
        <Buttons>
          <Button onClick={handleRemovedTask} background='#E34F4F'><RemoveCircleIcon fontSize='small' /></Button>
          <Button onClick={handleFinishedTask} background='#5DE290'><CheckCircleIcon fontSize='small' /></Button>
        </Buttons>
      )}

    </Container>
  )
}
