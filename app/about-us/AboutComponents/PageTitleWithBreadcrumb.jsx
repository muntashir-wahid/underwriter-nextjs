import Link from "next/link";

import { AiFillHome } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

export default function PageTitleWithBreadcrumb() {
  return (
    <header className="flex flex-col items-center gap-2">
      <h1 className="font-medium text-gray-900 text-4xl text-center">
        About Us
      </h1>
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-1 text-gray-700">
          <AiFillHome size="12" /> <span className="text-sm">Home</span>
        </Link>
        <span>
          <BsChevronRight className="text-gray-500" size="11" />
        </span>
        <span className="text-sm text-gray-500">About Us</span>
      </div>
    </header>
  );
}
