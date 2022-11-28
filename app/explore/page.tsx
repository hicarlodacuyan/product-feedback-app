import React from "react";
import Feed from "../Feed";
import Search from "./Search";
import SortFeed from "./SortFeed";

function Explore() {
  return (
    <div className="flex py-4 container mx-auto max-w-5xl">
      <div className="md:flex flex-col gap-4 hidden w-1/5">
        <SortFeed />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <Search />
        <Feed />
      </div>
    </div>
  );
}

export default Explore;
