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
  id: "name",
  label: "Your name",
};

const fieldValidations = {
  name: z.string().trim(),
};

const NameField = () => {
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

export { NameField, fieldValidations as nameFieldValidations };
