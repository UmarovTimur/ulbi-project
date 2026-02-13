import { classNames } from "shared/lib/classNames/classNames";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import NormalIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/moon.svg";
import { Button, ButtonVariants } from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant={ButtonVariants.GHOST} onClick={toggleTheme} className={classNames("", {}, [className])}>
      {theme === Theme.DARK ? (
        <NormalIcon stroke="var(--font-color)" width="20px" height="20px" />
      ) : (
        <DarkIcon fill="var(--font-color)" width="20px" height="20px" />
      )}
    </Button>
  );
};
