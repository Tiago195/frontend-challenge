import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { Container, TaskList, AddTask, NotFound } from './style'
import { ITask, TStatus } from '../../interfaces/ITask';
import { Task } from '../Task';

type Props = {
  text: string
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
  status: TStatus
  clickToClearText: () => void
}

export const Todo = ({ text, tasks, setTasks, status, clickToClearText }: Props) => {
  const [content, setContent] = useState("");
  const tasksFiltered = tasks.filter(task => task.content.toUpperCase().includes(text.toUpperCase()) && task.status.includes(status));

  const isSearchFor = text.length === 0 && status === " ";

  const handleTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content.length) {
      const newTask: ITask = {
        id: Math.random().toString().substring(3, 8),
        content,
        status: "pending "
      };

      setTasks(old => [...old, newTask]);
      setContent("");
    }
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
        {tasksFiltered.map((task) => (
          <Task task={task} setTasks={setTasks} key={task.id} />
        ))}

        {(!tasksFiltered.length && !isSearchFor) && (
          <NotFound>Your search found no results. <span onClick={clickToClearText}>Clean the search here</span> to see all items.</NotFound>
        )}

      </TaskList>
    </Container>
  )
}
