import { useTranslation } from "react-i18next";
import { Button, ButtonVariants } from "shared/ui/Button";
import React from "react";
interface LangSwitcherProps extends React.HTMLAttributes<HTMLButtonElement> {
  collapsed?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const { collapsed = false, ...otherProps } = props;

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <Button variant={ButtonVariants.GHOST} onClick={toggle} {...otherProps}>
        <span>{collapsed ? t("Яз") : t("Язык")}</span>
      </Button>
    </div>
  );
};
