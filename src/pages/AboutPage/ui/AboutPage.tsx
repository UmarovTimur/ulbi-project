import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/Container";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div>
      <Container>{t("О сайте")}
        <Counter />
      </Container>
    </div>
  );
}
