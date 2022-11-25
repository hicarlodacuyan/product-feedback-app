import Feed from "./Feed";
import PeopleRecommendation from "./PeopleRecommendation";
import Trending from "./Trending";
import Tweet from "./Tweet";

function Homepage() {
  return (
    <div className="flex py-4 container mx-auto max-w-5xl">
      <div className="flex">
        <div className="flex-1 flex flex-col gap-4">
          <Tweet />
          <Feed />
        </div>
      </div>
      <div className="md:flex flex-col gap-4 hidden w-2/5">
        <Trending />
        <PeopleRecommendation />
      </div>
    </div>
  );
}

export default Homepage;
