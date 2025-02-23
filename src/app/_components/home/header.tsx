import { Heading, Text } from "@/components";

export const Header = () => {
  return (
    <div className="flex bg-background flex-col gap-12 z-10 sticky top-0 py-32">
      <Heading font={"sora"}>
        Your Creative, Media & Technology Transformation Partner
      </Heading>
      <Text>
        We&apos;re a team of 1000+ Specialists delivering award-winning work for
        300+ brands worldwide, 8 years and counting!
      </Text>
    </div>
  );
};
