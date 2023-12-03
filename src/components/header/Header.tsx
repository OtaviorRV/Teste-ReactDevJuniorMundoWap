import React from "react";
import { HeaderStyled } from "./Header.Styled";
import { useTaskContext } from "../../providers/TaskProvider";
import Button from "../button/Button";

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  const { countTasksChecked, openModal } = useTaskContext();
  return (
    <HeaderStyled
      variant={
        (countTasksChecked() <= 3 && "green") ||
        (countTasksChecked() < 10 && "blue") ||
        "red"
      }
    >
      <div className="title-box">
        <h2>{`${title}: `}</h2>
        <h2>{countTasksChecked()}</h2>
      </div>
      <Button onClick={() => openModal()} title="Adicionar Task" />
    </HeaderStyled>
  );
};
export default Header;
