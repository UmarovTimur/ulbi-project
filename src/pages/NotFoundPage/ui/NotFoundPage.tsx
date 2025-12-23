import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Container } from "shared/ui/Container";
import cls from "./NotFoundPage.module.scss"

export default function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage)} >
            <Container>
                <h1 className={classNames(cls.title)} >
                    {t("Ничего не найден")}
                </h1>
            </Container>
        </div>
    );
}
