import styled from "styled-components";
interface ITableTaskStyled {
  check: boolean;
}

export const TrTaskStyled = styled.tr<ITableTaskStyled>`
  .isCheck {
    text-decoration: ${({ check }) => (check ? "line-through" : "none")};
  }

  td {
    padding: 0.8rem;
    border: 1px solid #ddd;
    text-align: center;
  }

  .buttonEdit {
    padding: 0.4rem 1rem;
    border-radius: 0.6rem;
    border: none;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
    background-color: #d5ffe2;
    color: #00962e;
    border: 1px solid #00962e;
   
    &:disabled {
      background-color: #ededed;
      color: #7b7b7b;
      border: 1px solid #7b7b7b;
    }
  }
`;
export const TableStyled = styled.table`
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
`;
