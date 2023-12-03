import { ReactNode } from "react";
import { ContainerStyled } from "./Container.Styled";

interface IContainer {
  children: ReactNode;
}
 const Container = ({children}:IContainer)=>{
  return <ContainerStyled>{children}</ContainerStyled>
 }
export default Container;