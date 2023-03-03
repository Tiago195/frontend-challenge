import styled  from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 55px;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`

export const Filter = styled.section`
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: #848484;
  align-items: center;

  label {
    border: 1px solid #DBDBDB;
    border-radius: 17px;
    padding: 9px 16px;
  }

  .select {
    color: #4DA6B3;
    border: 1px solid #4DA6B3;
  }

  input {
    display: none;
  }

  @media (max-width: 500px) {
    justify-content: flex-end
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