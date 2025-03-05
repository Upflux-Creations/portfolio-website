"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { siteInfo } from "@/data";
import {
  EmailField,
  emailFieldValidations,
  Heading,
  Text,
  Form,
  nameFieldValidations,
  NameField,
} from "@/components";

const ContactFormSchema = z.object({
  ...nameFieldValidations,
  ...emailFieldValidations,
});

type ContactFormModel = z.infer<typeof ContactFormSchema>;

export const ContactForm = () => {
  const form = useForm<ContactFormModel>({
    defaultValues: { email: "" },
    resolver: zodResolver(ContactFormSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<ContactFormModel> = (data) => {
    console.log(data);
  };

  return (
    <section className="flex w-full h-full justify-between">
      <div className="flex flex-col gap-4">
        <Text size={"md"} weight={"normal"} className="capitalize">
          Got an Idea ?
        </Text>
        <Heading size={"h3"} weight={"medium"}>
          Drop us a message
        </Heading>
        <Text size={"sm"} weight={"normal"}>
          We're excited to work with you soon! Please drop an email with your
          details & requirements to {siteInfo.email}.
        </Text>
        <Text size={"sm"}>
          You can also fill this form & we'll get back in 2 business days.
        </Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <NameField />
            <EmailField />
          </form>
        </Form>
      </div>
    </section>
  );
};
