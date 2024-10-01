import { formatNumberWithSingleQuotes } from "@/utils/formats";
import { Heart } from "lucide-react";
import Image from "next/image";

type ProductDetailCard = {
  imgUrl: string;
  productName: string;
  originalPrice: number;
  discountPercentage: number;
  finalPrice: number;
  saved: boolean;
};

export const ProductDetailCard = (props: ProductDetailCard) => {
  const {
    imgUrl = "/image (7).png",
    productName = "Wildflower Hoodie",
    originalPrice = 120000,
    discountPercentage = 10,
    finalPrice = 100000,
    saved = false,
  } = props;

  const isDiscounted = discountPercentage !== 0;
  const formattedOriginalPrice = formatNumberWithSingleQuotes(originalPrice);
  const formattedFinalPrice = formatNumberWithSingleQuotes(finalPrice);

  return (
    <div className="w-245px space-y-2">
      <div className="w-245px relative">
        <Image
          src={imgUrl}
          width={245}
          height={331}
          alt={productName}
          className="rounded-2xl"
        />
        <Heart
          className="absolute top-4 right-4"
          strokeWidth={1}
          fill={saved ? "black" : "none"}
        />
      </div>

      <div className="space-y-1">
        <p className="">{productName}</p>
        {isDiscounted ? (
          <div className="flex gap-2 items-center">
            <p className="font-bold ">{formattedFinalPrice}₮</p>
            <p className="text-[#71717A] line-through text-xs">
              {formattedOriginalPrice}₮
            </p>
            <p className="text-[#EF4444] font-bold">{discountPercentage}%</p>
          </div>
        ) : (
          <div className="font-bold ">{formattedFinalPrice}₮</div>
        )}
      </div>
    </div>
  );
};
