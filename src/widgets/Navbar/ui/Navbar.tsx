import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Container } from "shared/ui/Container";
import { AppLinkTheme, AppLink } from "shared/ui/AppLink/";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Container className={cls.NavbarContainer}>
        <ThemeSwitcher />
        <div className={cls.links}>
          <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={"/"}>
            Главная
          </AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
            О сайте
          </AppLink>
        </div>
      </Container>
    </header>
  );
};
