import React from "react";

function SortFeed() {
  return (
    <section className="bg-white p-4 rounded-lg drop-shadow gap-4 mx-2 hidden md:flex flex-col">
      <ul className="flex flex-col gap-4">
        <li>Top</li>
        <li>Latest</li>
        <li>People</li>
        <li>Media</li>
      </ul>
    </section>
  );
}

export default SortFeed;
