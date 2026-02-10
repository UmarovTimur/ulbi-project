import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, ReactElement, ReactNode, cloneElement, isValidElement } from "react";

export enum ButtonVariants {
  CLEAR = "clear",
  PRIMARY = "primary",
  OUTLINED = "outlined",
  GHOST = "ghost",
}

export enum ButtonSize {
  DEFALUT = "default",
  LARGER = "larger",
  ICON = "icon",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariants;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = ButtonVariants.CLEAR,
    size = ButtonSize.DEFALUT,
    asChild,
    ...otherProps
  } = props;

  const classes = classNames("", { [cls[variant]]: !!variant, [cls[size]]: !!size }, [className, variant, cls.Button]);

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    return cloneElement(child, {
      ...otherProps,
      className: classNames("", {}, [child.props.className, classes]),
    });
  }

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
};
