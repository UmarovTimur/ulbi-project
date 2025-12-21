import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Container } from "shared/ui/Container";
import { AppLinkTheme, AppLink } from "shared/ui/AppLink/";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Container className={cls.NavbarContainer}>
                <div className={cls.links}>
                    <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={"/"}>
                        {t("Главная страница")}
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                        {t("О сайте")}
                    </AppLink>
                </div>
            </Container>
        </header>
    );
};
