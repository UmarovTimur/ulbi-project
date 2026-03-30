import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Container } from "shared/ui/Container";
import { Button, ButtonVariants } from "shared/ui/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Container className={cls.NavbarContainer}>
        <Button onClick={onOpenModal} variant={ButtonVariants.CLEAR}>
          {t('Войти')}
        </Button>
        <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
      </Container>
    </header>
  );
};
