import Image from "next/image";
import { FaUserPlus } from "react-icons/fa";

function People() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex lg:flex-row lg:items-center flex-col gap-2">
        <Image
          src="/profile.png"
          width={40}
          height={40}
          alt="App logo"
          className="border border-gray-500 rounded-md self-start"
        />
        <div className="flex-1 flex flex-col">
          <h2>Mikael Stanley</h2>
          <p className="text-xs text-gray-500">24 August at 20:43</p>
        </div>
        <button className="flex self-start lg:self-center items-center gap-2 text-xs bg-blue-500 px-2 py-1 text-white rounded">
          <FaUserPlus /> Follow
        </button>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Photographer & Filmmaker based in Copenhagen, Denmark.
        </p>
      </div>
      <div>
        <Image
          src="https://via.placeholder.com/1000x250.png"
          width={1000}
          height={250}
          alt="App logo"
          className="rounded-md self-start"
        />
      </div>
    </div>
  );
}

export default People;
