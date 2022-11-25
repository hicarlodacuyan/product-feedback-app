import Image from "next/image";

function Reply() {
  return (
    <div className="flex gap-4">
      <Image
        src="/profile.png"
        width={40}
        height={40}
        alt="App logo"
        className="border border-gray-500 rounded-md self-start"
      />
      <form className="flex-1">
        <input
          type="text"
          name="reply"
          id="reply"
          placeholder="Tweet your reply"
          className="w-full h-full border border-gray-100 bg-gray-100 rounded-md indent-4"
        />
      </form>
    </div>
  );
}

export default Reply;
