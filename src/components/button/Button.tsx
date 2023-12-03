import { ButtonStyled } from "./Button.Styled";

interface IButton {
  title: string;
  onClick?: () => void;
}

const Button = ({ title, onClick }: IButton) => {
  return <ButtonStyled onClick={onClick}>{title}</ButtonStyled>;
};
export default Button;
