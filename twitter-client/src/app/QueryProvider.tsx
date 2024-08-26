"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

const queryClient = new QueryClient();  // outside to avoid recreation on every render

export default function QueryProvider({ children }: { children: ReactNode }) {
    // const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools  />
    </QueryClientProvider>
  );
}
