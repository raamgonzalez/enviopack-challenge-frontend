import styled from 'styled-components'

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: #383838;
  color: #fffffe;
  cursor: pointer;
  max-width: 10rem;

  font-size: 1em;
  padding: 0.25em 1em;
  border: 1px solid rgba(99, 99, 99, 0.2);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 3px;

  &:hover{
    color: #383838;
    background-color: #fffffe;
    transition: all 0.4s ease-in-out ;
    border: 1px solid #383838;
  }
`
