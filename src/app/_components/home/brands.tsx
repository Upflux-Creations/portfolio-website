import { InfiniteCarousel } from "@/components";
import carouselItems from "@/data/test";

export const Brands = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      <InfiniteCarousel
        containerWidth={"100%"}
        speed={30}
        items={carouselItems}
        reverse={false}
      />
      <InfiniteCarousel
        containerWidth={"100%"}
        speed={30}
        items={carouselItems}
        reverse={true}
      />
    </div>
  );
};
