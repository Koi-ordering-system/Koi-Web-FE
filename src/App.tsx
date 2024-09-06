import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router-dom";
import routes from "@/router";
import ErrorBoundary from "@/components/error-boundary";
import { Toaster } from "@/components/ui";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ErrorBoundary>
        <RouterProvider router={routes} />
        <Toaster />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
