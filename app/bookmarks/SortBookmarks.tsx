import React from "react";

function SortBookmarks() {
  return (
    <section className="bg-white p-4 rounded-lg drop-shadow gap-4 mx-2 hidden md:flex flex-col">
      <ul className="flex flex-col gap-4">
        <li>Tweets</li>
        <li>Tweets & replies</li>
        <li>Media</li>
        <li>Likes</li>
      </ul>
    </section>
  );
}

export default SortBookmarks;
