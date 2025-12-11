import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Theme } from "app/providers/ThemeProvider";

export enum ThemeButton {
  CLEAR = "clear",
  DARK = "primary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: Theme;
}
export const Button: FC<ButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <button className={classNames(cls.Button, {}, [className])} {...otherProps}>
      {children}
    </button>
  );
};
