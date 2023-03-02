import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #848484;

  span {
    font-size: 24px;
    letter-spacing: 0px;
  }

`

export const Date = styled.section`
  display: flex;
  align-items: center;

  .day {
    font-size: 60px;
    font-weight: 600;
  }

  .month::first-letter {
    text-transform: uppercase;
  }

  .year {
    font-weight: lighter;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`