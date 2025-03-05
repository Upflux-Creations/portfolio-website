"use client";

import { z } from "zod";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";

interface IFieldConfig {
  id: string;
  label: string;
  placeholder?: string;
  description?: string;
}

const fieldConfig: IFieldConfig = {
  id: "email",
  label: "Your email",
};

const fieldValidations = {
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address"),
} as const;

const EmailField = () => {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name={fieldConfig.id}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{fieldConfig.label}</FormLabel>
            <FormControl>
              <Input placeholder={fieldConfig.placeholder} {...field} />
            </FormControl>
            <FormDescription>{fieldConfig.placeholder}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export { EmailField, fieldValidations as emailFieldValidations };
