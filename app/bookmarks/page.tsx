import SortBookmarks from "./SortBookmarks";
import Feed from "../Feed";

function Bookmarks() {
  return (
    <div className="flex py-4 container mx-auto max-w-5xl">
      <div className="md:flex flex-col gap-4 hidden w-1/5">
        <SortBookmarks />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <Feed />
      </div>
    </div>
  );
}

export default Bookmarks;
