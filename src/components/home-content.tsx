"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/LocaleContext";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";

export function HomeContent() {
  const { t } = useTranslation();
  const router = useRouter();
  const session = useSession();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <LocaleSwitcher />
      <h1 className="text-2xl">{t.common.welcome}</h1>
      <pre>{JSON.stringify(session?.data?.user, null, 2)}</pre>
      <Button variant="destructive" onClick={handleLogout}>{t.common.logout}</Button>
    </div>
  );
}

