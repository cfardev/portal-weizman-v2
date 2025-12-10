"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "@/contexts/LocaleContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

type LoginFormData = {
  email: string;
  password: string;
};

interface LoginFormProps {
  handleSubmit: (data: LoginFormData) => void | Promise<void>;
  isPending: boolean;
  initialValues?: LoginFormData;
  error?: string | null;
}

export function LoginForm({
  handleSubmit,
  isPending,
  initialValues,
  error,
}: LoginFormProps) {
  const { t } = useTranslation();

  const formSchema = z.object({
    email: z
      .string()
      .min(1, {
        message: t.login.emailRequired,
      })
      .email(t.login.emailInvalid),
    password: z
      .string()
      .min(1, {
        message: t.login.passwordRequired,
      })
      .min(8, {
        message: t.login.passwordMinLength,
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: initialValues?.email ?? "",
      password: initialValues?.password ?? "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    handleSubmit(values);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex flex-col items-center justify-center gap-4 text-primary">
          <Image src="/brand/logo.svg" alt="Weizman Logo" width={200} height={200} className="mx-auto" />
          <CardTitle className="text-center text-xl">{t.login.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {error && (
                <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                  {error}
                </div>
              )}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.login.email}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.login.password}</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? t.login.loading : t.login.submit}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

