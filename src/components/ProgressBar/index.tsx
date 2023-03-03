import React, { useRef } from 'react'
import { ITask } from '../../interfaces/ITask'
import Confetti from 'react-confetti';

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
    <Container ref={bar} progress={value * progress || 0} >
      <div style={{
        position: 'absolute',
        right: '0px',
        top: '40px',
        transform: 'translateX(-200px)'
      }}>
        {value * progress === bar.current?.clientWidth && (
          <Confetti
            width={200}
            height={150}
            numberOfPieces={50}
            recycle={false}
            confettiSource={{ x: 50, y: 50, w: 50, h: 50 }}
          />
        )}
      </div>
    </Container>
  )
}
