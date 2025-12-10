"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

/**
 * Hook helper para usar server actions como mutations con TanStack Query
 * Automáticamente invalida las queries relacionadas después de una mutación exitosa
 * 
 * @example
 * ```ts
 * const mutation = useServerMutation(
 *   ["users"],
 *   createUserAction,
 *   {
 *     onSuccess: (data) => {
 *       console.log("User created:", data);
 *     }
 *   }
 * );
 * 
 * mutation.mutate({ name: "John", email: "john@example.com" });
 * ```
 */
export function useServerMutation<TData, TVariables, TError = Error>(
  queryKey: unknown[],
  action: (variables: TVariables) => Promise<TData>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, unknown>,
    "mutationFn"
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: action,
    onSuccess: (data, variables, context, mutation) => {
      // Invalidar queries relacionadas automáticamente
      queryClient.invalidateQueries({ queryKey });
      options?.onSuccess?.(data, variables, context, mutation);
    },
    ...options,
  });
}

