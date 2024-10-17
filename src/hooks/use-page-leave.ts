import { useEffect, useCallback } from "react";

const usePageLeave = (onLeave: () => void) => {
  const handleBeforeUnload = useCallback(() => {
    onLeave();
  }, [onLeave]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      onLeave();
    };
  }, [handleBeforeUnload, onLeave]);
};

export default usePageLeave;
