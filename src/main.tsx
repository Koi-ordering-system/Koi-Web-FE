import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { env } from "@/lib/env.ts";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={env.VITE_DOMAIN_AUTH0}
      clientId={env.VITE_CLIENT_ID_AUTH0}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0Provider>
  </StrictMode>
);
