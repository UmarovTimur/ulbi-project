import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Container } from "shared/ui/Container";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Container className={cls.NavbarContainer}>
        Navbar
      </Container>
    </header>
  );
};
