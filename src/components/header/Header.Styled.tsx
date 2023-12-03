import styled, { css } from "styled-components";

interface IHeaderStyled {
  variant: "green" | "red" | "blue";
}

export const HeaderStyled = styled("header")<IHeaderStyled>`
  display: flex;
  justify-content: space-between;
  padding: 2rem 8rem;
  align-items: center;
  background-color: #b0b0b0;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  .title-box {
    align-items: center;
    display: flex;
    gap: 1rem;

    h2 {
      text-transform: capitalize;
      &:nth-child(even) {
        padding: 0.4rem 1rem;
        border-radius: 0.6rem;

        ${(props) =>
          props.variant === "green" &&
          css`
            background-color: #d5ffe2;
            color: #00962e;
            border: 1px solid #00962e;
          `}
        ${(props) =>
          props.variant === "red" &&
          css`
            background-color: ##ffdddd;
            color: #d70300;
            border: 1px solid #d70300;

          `}
          ${(props) =>
          props.variant === "blue" &&
          css`
            background-color: #d5e7ff;
            color: #0010f5;
            border: 1px solid #0010f5;
          `}
      }
    }
  }
`;
