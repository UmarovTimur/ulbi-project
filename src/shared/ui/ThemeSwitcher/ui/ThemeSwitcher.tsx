import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import NormalIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/moon.svg";
import { Button } from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={theme} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <NormalIcon width="20px" height="20px" /> : <DarkIcon width="20px" height="20px" />}
        </Button>
    );
};
