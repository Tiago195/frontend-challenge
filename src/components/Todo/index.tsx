import React from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { Container, TaskList, AddTask, Task } from './style'

type Props = {
  text: string
}

export const Todo = ({ text }: Props) => {
  const isSearchFor = text.length === 0;

  return (
    <Container>

      {isSearchFor && (
        <AddTask>
          <label htmlFor="">
            <input type="text" placeholder='Add new item...' />
          </label>
          <div className='plus'>
            <AddCircleOutlinedIcon fontSize='medium' />
          </div>
        </AddTask>
      )}

      <TaskList>
        <Task>
          <span>task #1</span>
        </Task>
      </TaskList>
    </Container>
  )
}
