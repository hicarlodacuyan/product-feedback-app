import Image from "next/image";
import { FaUserPlus } from "react-icons/fa";

function ProfileInfo() {
  return (
    <div className="flex py-4 container mx-auto max-w-5xl">
      <section className="flex-1 flex flex-col md:flex-row bg-white p-4 rounded-lg drop-shadow gap-4 mx-2">
        <div className="flex gap-4 justify-center">
          <Image
            src="/profile.png"
            width={96}
            height={96}
            alt="App logo"
            className="border border-gray-500 rounded-md self-start"
          />
        </div>
        <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-0">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col md:flex-row items-center gap-4">
              <h2 className="text-2xl">Daniel Jensen</h2>
              <div className="flex gap-4">
                <p className="text-sm">
                  <span className="font-bold">2,569</span> following
                </p>
                <p className="text-sm">
                  <span className="font-bold">10.8k</span> followers
                </p>
              </div>
            </div>
            <h2 className="flex-1 text-center md:text-left">
              Photographer & Filmmaker based in Copenhagen, Denmark
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <button className="flex self-start lg:self-center items-center gap-2 text-xs md:text-sm bg-blue-500 px-2 py-1 text-white rounded">
              <FaUserPlus /> Follow
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileInfo;
