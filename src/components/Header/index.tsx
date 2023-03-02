import React from 'react'


import { Container, Date } from './style';
import { day, month, year, weekDay } from './Header';

export const Header = () => {
  return (
    <Container>
      <Date>
        <span className='day'>{String(day).padStart(2, "0")}</span>
        <div>
          <span className='month'>{month}</span>
          <span className='year'>{year}</span>
        </div>
      </Date>
      <div><span>{weekDay}</span></div>
    </Container>
  )
}
