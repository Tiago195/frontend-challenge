import styled from 'styled-components'

export const Container = styled.main`
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 500px) {
    padding: 48px 16px;
  }
`
