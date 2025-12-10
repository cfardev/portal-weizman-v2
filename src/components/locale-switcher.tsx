"use client";

import { useTranslation } from "@/contexts/LocaleContext";
import { Button } from "@/components/ui/button";

export function LocaleSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex gap-2">
      <Button
        variant={locale === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLocale("es")}
      >
        ES
      </Button>
      <Button
        variant={locale === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLocale("en")}
      >
        EN
      </Button>
    </div>
  );
}

