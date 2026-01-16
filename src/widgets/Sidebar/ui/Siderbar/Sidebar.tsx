import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import CloseSidebarIcon from "shared/assets/icons/panel-left-close.svg";
import OpenSidebarIcon from "shared/assets/icons/panel-left-open.svg";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/person.svg";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div>
        <div className={cls.links}>
          <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            <HomeIcon />
            <span>
              {t("Главная страница")}
            </span>
          </AppLink>
          <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            <AboutIcon />
            <span>
              {t("О нас")}
            </span>
          </AppLink>
        </div>
      </div>

      <div className={classNames(cls.SidebarToggle)} onClick={onToggle}>
        {collapsed ? <OpenSidebarIcon /> : <CloseSidebarIcon />}
      </div>

      <div className={cls.switchers}>
        <LangSwitcher collapsed={collapsed} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
