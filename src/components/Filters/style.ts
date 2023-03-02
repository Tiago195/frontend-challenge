import styled  from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 55px;

`

export const Filter = styled.section`
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: #848484;
  align-items: center;
  
  div {
    border: 1px solid #DBDBDB;
    border-radius: 17px;
    padding: 9px 16px;
  }
`

export const Search = styled.section`
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  color: #848484;
  flex: 1;
  display: flex;
  padding: 9px 16px;

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
  }

  input {
    color: #848484;
    border: none;
    width: 100%;
    outline: none;
    
    ::placeholder {
      color: #848484;
    }
  }
`