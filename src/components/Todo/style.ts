import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px; 
`

export const AddTask = styled.div`
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  /* height: 46px; */
  background-color: #F7F7F7;
  display: flex;
  justify-content: space-between;

  label {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
  }

  input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 14px;

    ::placeholder {
      color: #848484;
      opacity: 0.5;
    }
  }

  .plus {
    background-color: #4DA6B3;
    opacity: 1;
    min-width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
  }
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Task = styled.div`
  border: 1px solid #DBDBDB;
  background-color: #F4F4F4;
  font-size: 14px;
  color: #848484;
  letter-spacing: 0px;
  padding: 15px;
`