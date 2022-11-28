import React from "react";

function SortProfileFeed() {
  return (
    <section className="bg-white p-4 rounded-lg drop-shadow gap-4 mx-2 hidden md:flex flex-col self-start w-1/3">
      <ul className="flex flex-col gap-4">
        <li>Tweets</li>
        <li>Tweets & replies</li>
        <li>Media</li>
        <li>Likes</li>
      </ul>
    </section>
  );
}

export default SortProfileFeed;
