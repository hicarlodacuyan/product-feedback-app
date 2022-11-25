import Link from "next/link";
import Image from "next/image";
import { HiUserCircle } from "react-icons/hi2";

function Header() {
  return (
    <nav className="container mx-auto bg-white flex justify-between items-center p-4 md:p-8">
      <div>
        <Link href="/" className="flex items-center text-gray-700">
          <Image src="/favicon.ico" width={40} height={40} alt="App logo" />
          <h1 className="text-sm md:text-xl font-bold md:ml-2">Tweeter</h1>
        </Link>
      </div>
      <div className="gap-8 text-gray-500 hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/bookmarks">Bookmarks</Link>
      </div>
      <div>
        <Link href="/profile" className="flex items-center text-gray-700">
          <HiUserCircle size={32} />
          <h1 className="font-bold ml-2 text-xs md:text-lg">John Doe</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
