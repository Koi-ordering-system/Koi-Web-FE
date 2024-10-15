import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { env } from "@/lib/env.ts";
import { ClerkProvider } from "@clerk/clerk-react";

const PUSLISHABLE_KEY = env.VITE_CLERK_PUBLISHABLE_KEY;
const queryClient = new QueryClient();

if (!PUSLISHABLE_KEY) {
  throw new Error("Clerk publishable key not found");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUSLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
