"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "./input";

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        {...props}
        ref={ref}
        className={cn("pr-10", className)}
      />
      <span className="absolute top-[7px] right-1 cursor-pointer select-none">
        {showPassword ? (
          <EyeIcon onClick={() => setShowPassword(false)} />
        ) : (
          <EyeOffIcon onClick={() => setShowPassword(true)} />
        )}
      </span>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";
