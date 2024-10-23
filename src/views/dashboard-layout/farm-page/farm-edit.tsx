import Show from "@/lib/show";

import FarmStep from "@/views/dashboard-layout/farm-page/components/farms-step";
import FarmForm from "@/views/dashboard-layout/farm-page/components/farm-form";
import { Card, CardHeader } from "@/components/ui";
import { useParams } from "react-router-dom";
import { StepProps } from "@/components/ui/step-by-step";
import { useState } from "react";
import FarmAddKoi from "@/views/dashboard-layout/farm-page/components/farm-add-koi";

const FarmEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [returnId, setReturnId] = useState<string>();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const handleStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleReturnID = (id: string) => {
    setReturnId(id);
  };

  const dataSteps: StepProps[] = [
    {
      step: 1,
      title: "Create Farm",
      children: (
        <Card className="mt-10">
          <CardHeader>
            <Show>
              <Show.When isTrue={!!id}>
                <h1 className="text-3xl font-semibold">Edit Farm</h1>
              </Show.When>
              <Show.Else>
                <h1 className="text-3xl font-semibold">Create Farm</h1>
              </Show.Else>
            </Show>
          </CardHeader>
          <FarmForm nextStep={handleStep} getId={handleReturnID} />
        </Card>
      ),
    },
    {
      step: 2,
      title: "Add Kois",
      children: <FarmAddKoi id={id || returnId || ""} />,
    },
  ];

  return (
    <section className="container px-10 my-10">
      <FarmStep
        steps={dataSteps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </section>
  );
};

export default FarmEdit;
