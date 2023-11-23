import Link from "next/link";

interface InfoProps {
  title: string;
  value: string;
  isLinkValue?: boolean;
  link?: string;
}

const Info = ({ title, value, isLinkValue = false, link }: InfoProps) => {
  return (
    <li className="flex gap-x-3">
      <span className="text-white">{title}: </span>
      {!isLinkValue && <span className="text-red-600">{value}</span>}
      {isLinkValue && link && (
        <Link href={link} className="text-red underline underline-offset-4">
          {value}
        </Link>
      )}
    </li>
  );
};

export default Info;
