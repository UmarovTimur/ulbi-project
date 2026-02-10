import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode } from "react";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
}

export const Modal = (params: ModalProps) => {
  const { className, children } = params;
  return (
    <div className={classNames(cls.modal, {}, [className])}>
      <div className={cls.overlay}>
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
