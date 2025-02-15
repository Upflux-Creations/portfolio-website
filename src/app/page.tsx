import { Heading, Text } from "@/components";

export default function Home() {
  console.log(process.env.NODE_ENV);

  return (
    <section className="font-sora">
      <div className="flex flex-col gap-12">
        <Heading font={"sora"}>
          Your Creative, Media & Technology Transformation Partner
        </Heading>
        <Text>
          We're a team of 1000+ Specialists delivering award-winning work for
          300+ brands worldwide, 8 years and counting!
        </Text>
      </div>
    </section>
  );
}
