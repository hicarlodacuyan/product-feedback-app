import Post from "./Post";
import { getUsers } from "../lib/prisma/users";

async function Feed() {
  const { users } = await getUsers();

  return (
    <main className="flex flex-col gap-4">
      {users?.map((user) => (
        <Post user={user} />
      ))}
    </main>
  );
}

export default Feed;
