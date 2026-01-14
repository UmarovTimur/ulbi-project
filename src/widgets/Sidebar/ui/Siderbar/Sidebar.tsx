import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import CloseSidebarIcon from "shared/assets/icons/panel-left-close.svg";
import OpenSidebarIcon from "shared/assets/icons/panel-left-open.svg";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.SidebarToggle)} onClick={onToggle}>
                {collapsed ? <OpenSidebarIcon /> : <CloseSidebarIcon />}
            </div>
            <div className={cls.switchers}>
                <LangSwitcher collapsed={collapsed}/>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
