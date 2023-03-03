import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #DBDBDB;
  background-color: #F4F4F4;
  font-size: 14px;
  color: #848484;
  letter-spacing: 0px;
  display: flex;
  justify-content: space-between;
  position: relative;

  .text {
    padding: 15px;
    width: 100%;
  }

  &:hover {
    background-color: #FFF;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    color: #848484;
  }
`

export const Buttons = styled.div`
  display: flex;
`

type backgroundColorProps = {
  background: string
}

export const Button = styled.button<backgroundColorProps>`
  width: 44px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.background};
  color: white;
`

export const Editing = styled.div`
  width: 86px;
  height: 45px;
  background-color: #848484;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: -40px;
  z-index: 1;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .triangle {
    clip-path: polygon(50% 0%, 0 100%, 100% 100%);
    width: 10px;
    height: 12px;
    background-color: #848484;
    position: absolute;
    transform: translateY(-7px);
  }

  .text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 11px 16px;
  }
`
