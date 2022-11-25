import Image from "next/image";
import {
  FaRegCommentAlt,
  FaRetweet,
  FaRegHeart,
  FaRegBookmark,
} from "react-icons/fa";
import Reply from "./Reply";
import Comment from "./Comment";

function Post() {
  return (
    <div className="bg-white p-4 rounded-lg drop-shadow flex flex-col gap-4 mx-2">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/profile.png"
          width={40}
          height={40}
          alt="App logo"
          className="border border-gray-500 rounded-md self-start"
        />
        <div className="flex-1">
          <h2>Mikael Stanley</h2>
          <p className="text-xs">24 August at 20:43</p>
        </div>
      </div>
      <div>
        <p>
          "We travel, some of us forever, to seek other places, other lives,
          other souls." -Anais Nin
        </p>
      </div>
      <div>
        <Image
          src="https://via.placeholder.com/1000x500.png"
          width={1000}
          height={500}
          alt="App logo"
          className="border border-gray-500 rounded-md self-start"
        />
      </div>
      <div className="flex gap-4 text-xs justify-end">
        <p>449 Comments</p>
        <p>59k Retweets</p>
        <p>234 Saved</p>
      </div>
      <div className="flex">
        <button className="flex-1 flex justify-center hover:bg-gray-200 p-4">
          <FaRegCommentAlt />
        </button>
        <button className="flex-1 flex justify-center hover:bg-gray-200 p-4">
          <FaRetweet />
        </button>
        <button className="flex-1 flex justify-center hover:bg-gray-200 p-4">
          <FaRegHeart />
        </button>
        <button className="flex-1 flex justify-center hover:bg-gray-200 p-4">
          <FaRegBookmark />
        </button>
      </div>
      <div>
        <Reply />
      </div>
      <hr />
      <div>
        <Comment />
      </div>
    </div>
  );
}

export default Post;
