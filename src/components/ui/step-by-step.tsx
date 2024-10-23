"use client";

import type { ReactNode } from "react";

export interface StepProps {
  step: number;
  title: string;
  children?: ReactNode;
}

interface StepTriggerProps {
  step: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

interface StepContentProps {
  children: ReactNode;
  isVisible: boolean;
}

const StepTrigger = ({ step, title, isActive, onClick }: StepTriggerProps) => {
  return (
    <div
      className={`flex items-center cursor-pointer ${
        isActive ? "font-bold text-primary" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      <div
        className={`grid border rounded-full shadow-md  size-10 place-content-center border-muted-foreground`}
      >
        <span className="text-lg text-muted-foreground">{step}</span>
      </div>
      <span className="ml-3 text-lg">{title}</span>
    </div>
  );
};

const StepContent = ({ children, isVisible }: StepContentProps) => {
  return isVisible ? <div className="mt-4">{children}</div> : null;
};

export { StepTrigger, StepContent };
