import Post from "./Post";

function Feed() {
  return (
    <main className="flex flex-col gap-4">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
}

export default Feed;
