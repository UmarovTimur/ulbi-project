import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  DARK = "dark",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme, ...otherProps } = props;

    return (
        <button
            className={classNames(
                cls.Button,
                {[cls[theme]]: !!theme},
                [className, theme])}
            {...otherProps}>
            {children}
        </button>
    );
};
