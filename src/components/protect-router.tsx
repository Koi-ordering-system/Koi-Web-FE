import Forbidden from "@/components/forbidden";
import * as React from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
  roles?: string[];
}

const ProtectRouter: React.FC<PrivateRouteProps> = ({
  children,
  roles = [],
}) => {
  const userRole: string = "admin";

  if (roles.length > 0 && !roles.includes(userRole)) {
    return <Forbidden />;
  }

  return children;
};

export default ProtectRouter;
