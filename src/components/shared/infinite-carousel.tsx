import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type CarouselItemBase<T extends string, P = object> = {
  id: string | number;
  type: T;
} & P;

type ImageCarouselItem = CarouselItemBase<
  "image",
  {
    imageUrl: string;
    altText?: string;
    className?: string;
  }
>;

type NodeCarouselItem = CarouselItemBase<
  "node",
  {
    content: ReactNode;
  }
>;

export type CarouselItem = ImageCarouselItem | NodeCarouselItem;

interface InfiniteCarouselProps {
  items: CarouselItem[];
  itemWidth?: number;
  itemHeight?: number;
  speed?: number;
  containerWidth?: number | string;
  showGradientOverlay?: boolean;
  reverse?: boolean;
}

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  itemWidth = 250,
  itemHeight = 100,
  speed = 40,
  containerWidth = 960,
  showGradientOverlay = true,
  reverse = false,
}) => {
  const duplicatedItems = [...items, ...items];
  const totalWidth = itemWidth * duplicatedItems.length;
  const distance = itemWidth * items.length;

  // Create unique animation names for each direction
  const forwardAnimation = `scroll-forward-${speed}`;
  const reverseAnimation = `scroll-reverse-${speed}`;

  // Define both animations
  const scrollAnimations = `
    @keyframes ${forwardAnimation} {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${distance}px); }
    }
    @keyframes ${reverseAnimation} {
      0% { transform: translateX(-${distance}px); }
      100% { transform: translateX(0); }
    }
  `;

  const renderCarouselItem = (item: CarouselItem) => {
    switch (item.type) {
      case "image":
        return (
          <img
            src={item.imageUrl}
            alt={item.altText || ""}
            className={cn("object-contain w-full h-full ", item.className)}
            style={{ width: itemWidth, height: itemHeight }}
          />
        );
      case "node":
        return (
          <div className="flex items-center justify-center w-full h-full">
            {item.content}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style>{scrollAnimations}</style>
      <div
        className="relative mx-auto overflow-hidden bg-white rounded-lg"
        style={{ width: containerWidth, height: itemHeight }}
      >
        {showGradientOverlay && (
          <>
            <div className="absolute top-0 left-0 z-10 w-48 h-full bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 right-0 z-10 w-48 h-full bg-gradient-to-l from-white to-transparent" />
          </>
        )}

        <div
          className="flex"
          style={{
            width: totalWidth,
            animation: `${
              reverse ? reverseAnimation : forwardAnimation
            } ${speed}s linear infinite`,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: itemWidth, height: itemHeight }}
            >
              {renderCarouselItem(item)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
