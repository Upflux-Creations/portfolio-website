import { Button, Heading, Text } from "@/components";
import { ArrowRight } from "lucide-react";
import { CursorPointer } from "./cursor-pointer";

export const About = () => {
  return (
    <div
      style={{
        padding: "128px 100px",
      }}
      className="w-full h-max gap-12 flex py-32"
    >
      <div className="flex flex-col gap-10">
        <Heading
          font={"sora"}
          weight={"bold"}
          size={"h2"}
          className="whitespace-nowrap"
        >
          What defines us
        </Heading>
        <CursorPointer />
      </div>
      <div className="flex flex-col gap-10 w-[70%] px-12">
        <Heading size={"h3"} font={"sora"} weight={"bold"}>
          We&apos;re brand builders at heart, creators by design, tech
          enthusiasts in practice, and integrated at our core.
        </Heading>
        <Text
          size={"md"}
          font={"sora"}
          weight={"semibold"}
          className="text-muted-foreground"
        >
          We&apos;re on a mission to take the very best of Indian creative
          talent to the world. Driven by a ferocious hunger to create tangible
          impact for your business, we work with in-house specialists, industry
          partners and technology leaders to push the boundaries of creativity
          and put your brand on the global stage.
        </Text>
        <Button
          variant={"fancy"}
          size={"lg"}
          radius={"sides"}
          className="w-max px-20"
        >
          Dive into our culture <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
