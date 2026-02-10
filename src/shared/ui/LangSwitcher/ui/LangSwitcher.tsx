import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonVariants } from "shared/ui/Button";
import React from "react";
interface LangSwitcherProps extends React.HTMLAttributes<HTMLButtonElement> {
  collapsed: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const { collapsed, ...otherProps } = props;

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <Button size={ButtonSize.ICON} variant={ButtonVariants.OUTLINED} onClick={toggle} {...otherProps}>
        <span>{collapsed ? t("Яз") : t("!Язык")}</span>
      </Button>
    </div>
  );
};
