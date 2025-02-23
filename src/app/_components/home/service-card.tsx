import { Button, Heading, Text } from "@/components";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

const bgClass = {
  purple: "hover:bg-purple-500",
  blue: "hover:bg-blue-500",
  orange: "hover:bg-orange-500",
  red: "hover:bg-red-500",
  green: "hover:bg-green-500",
  pink: "hover:bg-pink-500",
  cyan: "hover:bg-cyan-500",
  yellow: "hover:bg-yellow-500",
};

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  bgColor: keyof typeof bgClass;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  bgColor,
  description,
  title,
}) => {
  return (
    <div
      style={{ width: "30vw" }}
      className={cn(
        "h-full  flex flex-col justify-center items-center gap-24 bg-white  overflow-hidden transition-colors duration-300 fade-in-50 group border-x flex-shrink-0",
        bgClass[bgColor]
      )}
    >
      <Heading
        size={"h1"}
        font={"sora"}
        weight={"bold"}
        className="w-3/4 text-center leading-loose text-muted-foreground/30 group-hover:text-white transition-colors duration-300 fade-in-50"
      >
        {title}
      </Heading>
      <div className="flex flex-col gap-28 items-center justify-between h-max w-3/4 -translate-x-[125%] group-hover:translate-x-0 duration-300 delay-100 transition-transform">
        <Text size={"md"} font={"sora"} className="text-background text-center">
          {description}
        </Text>
        <Button
          variant={"outline"}
          radius={"circle"}
          iconSize={"xl"}
          className="size-20"
        >
          <MoveRight />
        </Button>
      </div>
    </div>
  );
};
