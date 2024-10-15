import { Loader } from "lucide-react";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 grid place-content-center">
      <Loader className="size-28 animate-spin-slow" />
    </div>
  );
};
