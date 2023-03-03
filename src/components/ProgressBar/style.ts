import styled  from "styled-components";

interface Props {
  progress: number;
}

export const Container = styled.div<Props>`
 height: 24px;
 background-color: #E4E4E4;
 border-radius: 4px;
 overflow: hidden;

  &::before {
    content: "";
    background-color: #5DE290;
    height: 24px;
    width: ${props => props.progress}px;
    display: block;
    transition: width 0.4s ease-in;
 }
`