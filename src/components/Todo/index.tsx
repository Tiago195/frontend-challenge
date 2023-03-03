import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { Container, TaskList, AddTask, Task } from './style'
import { ITask } from '../../interfaces/ITask';

type Props = {
  text: string
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const Todo = ({ text, tasks, setTasks }: Props) => {
  const isSearchFor = text.length === 0;
  const [content, setContent] = useState("");

  const handleTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks(old => [...old, { content, finished: false }]);
    setContent("");
  }

  const handleContent = ({ target }: any) => {
    setContent(target.value);
  }

  return (
    <Container>

      {isSearchFor && (
        <AddTask onSubmit={handleTask}>
          <label htmlFor="">
            <input type="text" placeholder='Add new item...' value={content} onChange={handleContent} />
          </label>
          <button type='submit' className='plus'>
            <AddCircleOutlinedIcon fontSize='medium' />
          </button>
        </AddTask>
      )}

      <TaskList>
        {tasks.map((task, i) => (
          <Task>
            <span key={`${task} ${i}`}>{task.content}</span>
          </Task>
        ))}
      </TaskList>
    </Container>
  )
}
