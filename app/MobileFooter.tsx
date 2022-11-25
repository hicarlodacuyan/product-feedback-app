import Link from "next/link";
import React from "react";
import { HiHome, HiGlobeAlt, HiBookmark } from "react-icons/hi2";

function MobileFooter() {
  return (
    <div className="container fixed bottom-0 bg-white flex md:hidden text-2xl">
      <Link
        href="/"
        className="flex-1 flex justify-center hover:bg-gray-200 p-4"
      >
        <HiHome />
      </Link>

      <Link
        href="/explore"
        className="flex-1 flex justify-center hover:bg-gray-200 p-4"
      >
        <HiGlobeAlt />
      </Link>

      <Link
        href="/bookmarks"
        className="flex-1 flex justify-center hover:bg-gray-200 p-4"
      >
        <HiBookmark />
      </Link>
    </div>
  );
}

export default MobileFooter;
