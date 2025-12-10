/**
 * Ejemplos de uso de TanStack Query con Server Actions
 * 
 * Este archivo contiene ejemplos de cómo usar los hooks personalizados
 * con server actions. No es código funcional, solo ejemplos de referencia.
 */

/* 
// ============================================
// EJEMPLO 1: Usar server action como query
// ============================================

// 1. Crear tu server action
// app/actions/users.ts
"use server";

export async function getUserAction(userId: string) {
  // Tu lógica aquí
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user;
}

// 2. Usar en un componente cliente
"use client";

import { useServerAction } from "@/lib/query-utils";
import { getUserAction } from "@/app/actions/users";

export function UserProfile({ userId }: { userId: string }) {
  const { data: user, isLoading, error } = useServerAction(
    ["users", userId],
    () => getUserAction(userId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>User not found</div>;

  return <div>{user.name}</div>;
}

// ============================================
// EJEMPLO 2: Usar server action como mutation
// ============================================

// 1. Crear tu server action
// app/actions/users.ts
"use server";

export async function createUserAction(data: { name: string; email: string }) {
  // Tu lógica aquí
  const user = await prisma.user.create({ data });
  return user;
}

// 2. Usar en un componente cliente
"use client";

import { useServerMutation } from "@/lib/query-utils";
import { createUserAction } from "@/app/actions/users";
import { useQueryClient } from "@tanstack/react-query";

export function CreateUserForm() {
  const queryClient = useQueryClient();
  const mutation = useServerMutation(
    ["users"],
    createUserAction,
    {
      onSuccess: () => {
        // Invalidar queries relacionadas
        queryClient.invalidateQueries({ queryKey: ["users"] });
      }
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input name="email" />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Creating..." : "Create User"}
      </button>
    </form>
  );
}

// ============================================
// EJEMPLO 3: Usar directamente useQuery con server actions
// ============================================

"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserAction } from "@/app/actions/users";

export function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUserAction(userId),
  });

  // ... resto del componente
}

// ============================================
// EJEMPLO 4: Usar directamente useMutation con server actions
// ============================================

"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAction } from "@/app/actions/users";

export function CreateUserForm() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: createUserAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  // ... resto del componente
}
*/

