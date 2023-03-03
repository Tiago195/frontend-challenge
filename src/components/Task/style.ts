import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #DBDBDB;
  background-color: #F4F4F4;
  font-size: 14px;
  color: #848484;
  letter-spacing: 0px;
  display: flex;
  justify-content: space-between;
  
  .text {
    padding: 15px;
  }
`

export const Buttons = styled.div`
  display: flex;
`

type backgroundColor = {
  background: string
}

export const Button = styled.button<backgroundColor>`
  width: 44px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.background};
  color: white;
`