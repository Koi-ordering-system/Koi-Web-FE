import {
  StepContent,
  StepProps,
  StepTrigger,
} from "@/components/ui/step-by-step";
import React from "react";

interface FarmStepProps {
  steps: StepProps[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const FarmStep: React.FC<FarmStepProps> = ({
  steps,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div>
      {/* Step Triggers */}
      <div className="flex items-center justify-between gap-4">
        {steps.map((step, index) => (
          <>
            <StepTrigger
              step={step.step}
              title={step.title}
              isActive={currentStep === index}
              onClick={() => setCurrentStep(index)}
            />
            {index !== steps.length - 1 && (
              <div className="flex-grow h-px mx-2 bg-muted-foreground"></div>
            )}
          </>
        ))}
      </div>

      {/* Step Content */}
      {steps.map((step, index) => (
        <StepContent key={index} isVisible={currentStep === index}>
          {step.children}
        </StepContent>
      ))}
    </div>
  );
};

export default FarmStep;
