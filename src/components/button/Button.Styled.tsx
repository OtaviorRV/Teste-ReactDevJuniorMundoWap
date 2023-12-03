import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 0.6rem;
  border: none;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  background-color: #e0e7f9;
  color: #3845bd;
  border: 1px solid #3845bd;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background-color: #f1f4fd;
  }
`;
