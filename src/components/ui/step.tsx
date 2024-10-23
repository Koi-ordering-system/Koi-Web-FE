"use client";

import type { ReactNode } from "react";

const StaticStep = ({
  step,
  title,
}: {
  step: number;
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center justify-between w-auto gap-3 px-3 ">
        <div className="grid border rounded-full shadow-md bg-muted size-10 place-content-center border-muted-foreground ">
          <span className="text-lg text-muted-foreground">{step}</span>
        </div>
        <span className="font-semibold text-nowrap text-muted-foreground">
          {title}
        </span>
      </div>
    </div>
  );
};

export default StaticStep;
