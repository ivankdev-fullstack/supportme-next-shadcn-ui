"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type Props = {
  className?: string;
};

const LightDarkToggle = ({ className }: Props) => {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleColorMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className} onClick={toggleColorMode}>
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Enable light mode" : "Enable dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LightDarkToggle;
