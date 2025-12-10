"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { useTranslation } from "@/contexts/LocaleContext";
import { LoginForm } from "./login-form";

type LoginFormData = {
  email: string;
  password: string;
};

export function LoginFormWrapper() {
  const { t } = useTranslation();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (result.error) {
        throw new Error(result.error.message || t.login.errorOccurred);
      }

      return result;
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const handleSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      isPending={mutation.isPending}
      error={mutation.error?.message || null}
    />
  );
}

