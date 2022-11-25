import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

function Comment() {
  return (
    <div className="flex gap-4">
      <Image
        src="/profile.png"
        width={40}
        height={40}
        alt="App logo"
        className="border border-gray-500 rounded-md self-start"
      />
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex flex-col bg-gray-100 p-4 gap-4 rounded-md">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h2 className="font-bold text-sm">Mikael Stanley</h2>
            <p className="text-xs">24 August at 20:43</p>
          </div>
          <div>
            <p className="text-sm">
              I've seen awe-inspiring things that I thought I'd never be able to
              explain to another person.
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <FaRegHeart />
            <p>Like</p>
          </div>
          <span>•</span>
          <p>12k Likes</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
