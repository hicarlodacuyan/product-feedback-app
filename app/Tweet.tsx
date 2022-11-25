import Image from "next/image";
import { HiOutlinePhotograph } from "react-icons/hi";
import { HiGlobeAlt } from "react-icons/hi2";

function Tweet() {
  return (
    <section className="flex flex-1 self-start flex-col bg-white p-4 rounded-lg drop-shadow gap-4 mx-2">
      <p className="font-bold text-sm">Tweet something</p>
      <hr />
      <div className="flex gap-4">
        <Image
          src="/profile.png"
          width={40}
          height={40}
          alt="App logo"
          className="border border-gray-500 rounded-md self-start"
        />
        <form className="flex flex-col w-full gap-2">
          <div className="flex flex-1 gap-4 text-xs md:text-xl">
            <input
              type="text"
              name="tweet"
              id="tweet"
              placeholder="What's happening?"
              className="flex w-full h-10"
            />
          </div>
          <div className="flex items-center">
            <div className="flex flex-1 gap-2 text-blue-500">
              <button className="bg-white">
                <HiOutlinePhotograph size={24} />
              </button>
              <button>
                <HiGlobeAlt size={24} />
              </button>
              <p className="text-xs md:text-lg hidden md:flex">
                Everyone can reply
              </p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 md:px-6 md:py-2 px-2 py-1 text-white text-xs md:text-lg rounded"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Tweet;
