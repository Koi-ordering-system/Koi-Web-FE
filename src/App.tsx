import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router-dom";
import routes from "@/router";
import ErrorBoundary from "@/components/error-boundary";
import { Toaster } from "@/components/ui";
import { useAuth } from "@clerk/clerk-react";
import { useCallback, useEffect } from "react";
import { setItem } from "@/lib";

function App() {
  const auth = useAuth();

  const fetchData = useCallback(async () => {
    await auth.getToken({ template: "Koi" }).then((response) => {
      setItem("token", response!);
    });
  }, [auth]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ErrorBoundary>
        <RouterProvider router={routes} />
        <Toaster />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
