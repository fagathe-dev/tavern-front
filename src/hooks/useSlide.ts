import { useState } from "react";
import { Step } from "../type/slide.type";

const useSlide = (steps: Step[] = []) => {
  const [currentStep, setCurrentStep] = useState<Step>(steps[0]);

  const first = steps[0].id === currentStep.id;

  const last = steps.slice(-1)[0].id === currentStep.id;

  const goNext = () => {
    const stepIndex = steps.findIndex((step) => step.id === currentStep.id);

    if (stepIndex === steps.length - 1) return;

    setCurrentStep(steps[stepIndex + 1]);
  };

  const goPrev = () => {
    const stepIndex = steps.findIndex((step) => step.id === currentStep.id);

    if (stepIndex === 0) return;

    setCurrentStep(steps[stepIndex - 1]);
  };

  return {
    currentStep,
    goNext,
    goPrev,
    first,
    last,
  };
};

export default useSlide;
