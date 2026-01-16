import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import LangIcon from "shared/assets/icons/languages.svg";
import React from "react";

interface LangSwitcherProps extends React.HTMLAttributes<HTMLButtonElement>  {
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
      <Button onClick={toggle} {...otherProps}>
        {collapsed ?
          <LangIcon stroke="var(--inverse-bg-color)" width="20" height="20" />
          : t("Перевод")
        }
      </Button>
    </div>
  );
};
