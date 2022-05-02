import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface IButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  size: "small" | "medium" | "large";
  icon?: ComponentType<IconBaseProps>;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ 
  text, 
  type, 
  icon: Icon, 
  disabled = false, 
  onClick 
}: IButtonProps) {
  return (
    <Container type={type} onClick={onClick} disabled={disabled}>
      {Icon && <Icon />}
      {text}
    </Container>
  )
}