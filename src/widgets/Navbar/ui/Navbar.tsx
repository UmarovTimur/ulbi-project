import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Container } from "shared/ui/Container";
import { Button, ButtonVariants } from "shared/ui/Button";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onAuthToggle = useCallback(() => {
    setIsAuthOpen((prev) => !prev);
  }, []);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Container className={cls.NavbarContainer}>
        <Button onClick={onAuthToggle} variant={ButtonVariants.CLEAR}>
          Login
        </Button>
        <Modal isOpen={isAuthOpen} onClose={onAuthToggle} />
      </Container>
    </header>
  );
};
