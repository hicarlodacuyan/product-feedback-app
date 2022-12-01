import SortProfileFeed from "./SortProfileFeed";
import Feed from "../Feed";
import ProfileInfo from "./ProfileInfo";

function Profile() {
  return (
    <div className="pb-4">
      <div className="profile-bg md:pt-48 pt-36">
        <ProfileInfo />
      </div>
      <div className="flex container mx-auto max-w-5xl">
        <SortProfileFeed />
        <Feed />
      </div>
    </div>
  );
}

export default Profile;
