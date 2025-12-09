"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/LocaleContext";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <LocaleSwitcher />
      <h1 className="text-2xl">{t.common.welcome}</h1>
      <Button>{t.common.login}</Button>
    </div>
  );
}
