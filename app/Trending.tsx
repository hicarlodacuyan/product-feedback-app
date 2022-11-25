import React from "react";

function Trending() {
  return (
    <section className="bg-white p-4 rounded-lg drop-shadow gap-4 mx-2 hidden md:flex flex-col">
      <p className="font-bold text-sm">Trends for you</p>
      <hr />
      <ul className="flex flex-col gap-4 font-bold">
        <li>
          <h3>#programming</h3>
          <p className="text-xs font-normal text-gray-500">213k Tweets</p>
        </li>
        <li>
          <h3>#devchallenges</h3>
          <p className="text-xs font-normal text-gray-500">123k Tweets</p>
        </li>
        <li>
          <h3>#frontend</h3>
          <p className="text-xs font-normal text-gray-500">34k Tweets</p>
        </li>
        <li>
          <h3>#helsinki</h3>
          <p className="text-xs font-normal text-gray-500">11k Tweets</p>
        </li>
        <li>
          <h3>#100DaysOfCode</h3>
          <p className="text-xs font-normal text-gray-500">5k Tweets</p>
        </li>
        <li>
          <h3>#learntocode</h3>
          <p className="text-xs font-normal text-gray-500">1k Tweets</p>
        </li>
      </ul>
    </section>
  );
}

export default Trending;
