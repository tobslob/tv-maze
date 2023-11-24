import Star from "@/components/Star";
import Image from "next/image";
import Link from "next/link";
import { Show } from "@/interfaces";
import { sanitizeHtml } from "@/utils";
import { memo } from "react";

const DetailsHeader = ({ rating, image, name, summary }: Show) => {
  const sanitizedHtml = sanitizeHtml(summary as string);
  const average = rating?.average ? rating.average / 2 : 0;

  return (
    <div className="flex flex-col gap-8 pb-8 sm:pb-32 pt-8 sm:pt-[5.625rem] px-8 sm:px-[6.25rem] bg-gray-200">
      <Link href="/" className="cursor-pointer w-[150px]">
        <h1 className="text-2xl font-bold">TV Bland</h1>
      </Link>
      <div className="flex flex-col sm:flex-row gap-10 rounded-md text-gray-500 mb-4">
        <div className="w-full sm:w-[272px] h-[426px] sm:h-[400px] overflow-hidden z-30">
          <Image
            src={image?.original || "/assets/show-cover.jpeg"}
            alt="Show image"
            width={272}
            height={400}
            loading="eager"
            className="object-cover h-[426px] sm:h-[400px] sm:w-[272px] w-full"
            placeholder="blur"
            blurDataURL="/images/movie-placeholder.svg"
          // sizes="(max-width: 639px) 90vw, (min-width: 640px) 300px"
          />
        </div>
        <div className="flex flex-col sm:pt-10 pt-0 w-full sm:w-2/3">
          <div className="flex items-center mb-5 gap-1">
            <Star score={Math.floor(average)} />

            <p className="font-bold text-xs text-black">{(average).toFixed(1)}/5</p>
          </div>
          <h3 className="text-3xl sm:text-5xl text-black mb-4">{name}</h3>
          <div className="text-lg sm:w-2/3 w-full sm:h-[90px]">{sanitizedHtml}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailsHeader);
