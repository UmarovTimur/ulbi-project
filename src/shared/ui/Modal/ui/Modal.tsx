import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
        setIsMounted(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler],
  );

  const onClickContent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (!isOpen && !isMounted) return null;

  const mods: Record<string, boolean> = { [cls.opened]: isOpen, [cls.closing]: isClosing };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className ?? ""])}>
        <div onClick={closeHandler} className={cls.overlay}>
          <div onClick={onClickContent} className={cls.content}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
            words etc.
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
