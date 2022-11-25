import Trending from "./Trending";
import Tweet from "./Tweet";

function Homepage() {
  return (
    <div className="container mx-auto max-w-6xl my-4 flex">
      <Tweet />
      <Trending />
    </div>
  );
}

export default Homepage;
