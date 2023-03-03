import React, { useRef } from 'react'
import { ITask } from '../../interfaces/ITask'

import { Container } from './style'

type Props = {
  tasks: ITask[]
}

export const ProgressBar = ({ tasks }: Props) => {
  const bar = useRef<HTMLDivElement>(null);

  const percentage = (100 / tasks.length) / 100;
  const value = bar.current?.clientWidth ? bar.current?.clientWidth * percentage : 0;
  const progress = tasks.filter(task => task.status.includes("done")).length;

  return (
    <Container ref={bar} progress={value * progress || 0} />
  )
}
