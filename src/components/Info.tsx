import Link from "next/link";
import { memo } from "react";

interface InfoProps {
  title: string;
  value: string;
  isLinkValue?: boolean;
  link?: string;
}

const Info = ({ title, value, isLinkValue = false, link }: InfoProps) => {
  return (
    <li className="block sm:grid sm:grid-cols-3 grid-cols-1 items-start sm:py-8 pb-6 px-1">
      <p className="text-black">{title}:</p>
      <p className="sm:col-span-2">
        {!isLinkValue && <span className="text-gray-500">{value}</span>}
        {isLinkValue && link && (
          <Link href={link} className="text-red underline underline-offset-4">
            {value}
          </Link>
        )}
      </p>
    </li>
  );
};

export default memo(Info);
