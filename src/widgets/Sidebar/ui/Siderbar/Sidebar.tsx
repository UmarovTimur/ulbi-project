import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import CloseSidebarIcon from "shared/assets/icons/panel-left-close.svg";
import OpenSidebarIcon from "shared/assets/icons/panel-left-open.svg";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "app/providers/router";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/person.svg";
import { Button, ButtonVariants } from "shared/ui/Button";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const onSidebarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!collapsed) return;
    const target = e.target as HTMLElement;
    if (target.closest("a, button")) return;
    if (target.closest(`.${cls.SidebarToggle}`)) return;
    setCollapsed(false);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
      onClick={onSidebarClick}
    >
      <>
        <div className={cls.header}>
          <Button className={cls.logo} variant={ButtonVariants.GHOST}>
            U<span>lbi Project</span>
          </Button>{" "}
          <Button
            variant={ButtonVariants.GHOST}
            className={classNames(cls.SidebarToggle)}
            onClick={onToggle}
          >
            {collapsed ? <OpenSidebarIcon /> : <CloseSidebarIcon />}
          </Button>
        </div>

        <div className={cls.links}>
          <Button variant={ButtonVariants.GHOST} asChild>
            <AppLink
              className={cls.link}
              theme={AppLinkTheme.SECONDARY}
              to={RoutePath.main}
            >
              <HomeIcon />
              <span>{t("Главная страница")}</span>
            </AppLink>
          </Button>
          <Button variant={ButtonVariants.GHOST} asChild>
            <AppLink
              className={cls.link}
              theme={AppLinkTheme.SECONDARY}
              to={RoutePath.about}
            >
              <AboutIcon />
              <span>{t("О нас")}</span>
            </AppLink>
          </Button>
        </div>
      </>

      <div className={cls.switchers}>
        <LangSwitcher collapsed={collapsed} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
