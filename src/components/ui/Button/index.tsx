import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...rest }: IButtonProps) {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
}
