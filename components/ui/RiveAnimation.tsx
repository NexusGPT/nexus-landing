"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

interface RiveAnimationProps {
  src: string;
  className?: string;
  artboard?: string;
  stateMachineName?: string;
  inputName?: string;
  inputValue?: boolean | number;
}

export default function RiveAnimation({ 
  src, 
  className = "",
  artboard,
  stateMachineName,
  inputName,
  inputValue
}: RiveAnimationProps) {
  const { rive, RiveComponent } = useRive({
    src,
    autoplay: true,
    artboard: artboard,
    stateMachines: stateMachineName ? [stateMachineName] : undefined,
  });

  const input = useStateMachineInput(
    rive,
    stateMachineName || "",
    inputName || "",
    inputValue
  );

  // Update input value when it changes
  useEffect(() => {
    if (input && inputValue !== undefined) {
      if (typeof inputValue === "boolean") {
        input.value = inputValue;
      } else {
        input.value = inputValue;
      }
    }
  }, [input, inputValue]);

  return <RiveComponent className={className} />;
}
