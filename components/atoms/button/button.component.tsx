import { FC } from "react";
import { ButtonProps, StyledButton } from "~/components/atoms/button/button.styles";

export const Button: FC<ButtonProps> = (props) => {
  return <StyledButton { ...props } />;
}
