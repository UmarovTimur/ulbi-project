import { useTranslation } from "react-i18next";

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <div>
            <button onClick={toggle}>{t("Перевод")}</button>
        </div>
    );
};
