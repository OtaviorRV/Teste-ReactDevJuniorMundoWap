import styled, { css } from "styled-components";

interface IModalStyled {
  variant: "Criar" | "Salvar" | "Sugestao" | "Cancelar";
}

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 100%;

  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    min-width: 480px;
    min-height: 320px;
    background: #fff;
    padding: 20px;
    border-radius: 3rem;
    position: relative;
  }

  form {
    display: grid;
    place-items: center;
    grid-template-rows: 90% 10%;
  }
  .bodyModal {
    display: flex;
    flex-direction: column;
  
  }
  .footerModal{
  display: flex;
  justify-content: flex-end;
  }
  .inputModal{
    width: 100%;
    border-radius: 0.4rem;
    height: 2rem;
    text-align: center;
  }

  .titleModal {
  }
`;

export const ButtonModal = styled.button<IModalStyled>`

  padding: 0.4rem 1rem;
  border-radius: 0.6rem;
  border: none;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  color: #fff;
  ${(props) =>
    props.variant === "Criar" &&
    css`
      background-color: #d5ffe2;
      color: #00962e;
      border: 1px solid #00962e;
      &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        background-color: #edfff2;
      }
    `}
  ${(props) =>
    props.variant === "Salvar" &&
    css`
      background-color: #d5ffe2;
      color: #00962e;
      border: 1px solid #00962e;
      &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        background-color: #edfff2;
      }
    `}
          ${(props) =>
    props.variant === "Sugestao" &&
    css`
      background-color: #fffdc1;
      color: #a66902;
      border: 1px solid #a66902;
      &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        background-color: #fffee7;
      }
    `} 
           ${(props) =>
    props.variant === "Cancelar" &&
    css`
      background-color: #ededed;
      color: #7b7b7b;
      border: 1px solid #7b7b7b;
      &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        background-color: #f7f7f7;
      }
    `}
 & + button {
    margin-left: 1rem;
  }
`;
