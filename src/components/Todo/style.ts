import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px; 
`

export const AddTask = styled.form`
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
    min-width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
  }

  .plus:disabled {
    opacity: .5;
  }
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 220px;
  overflow-y: auto;
  
  ::-webkit-scrollbar-track {
    background: #E4E4E4;
  }

  ::-webkit-scrollbar-thumb {
    background: #848484; 
  }
  
`

export const NotFound = styled.p`
  color: #848484;
  font-size: 14px;

  span {
    text-decoration-line: underline;
    cursor: pointer;
  }
`