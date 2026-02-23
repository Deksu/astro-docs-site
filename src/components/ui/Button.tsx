import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import styles from './Button.module.css';

interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <AriaButton
      {...props}
      className={({ isHovered, isPressed, isFocused }) => `
        ${styles.button}
        ${styles[variant]}
        ${isHovered ? styles.hovered : ''}
        ${isPressed ? styles.pressed : ''}
        ${isFocused ? styles.focused : ''}
      `}
    >
      {children}
    </AriaButton>
  );
}
