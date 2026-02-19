import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/Container";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Container>{t("Главная страница")}
        <Counter/>
      </Container>
    </div>
  );
}
