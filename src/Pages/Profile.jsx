import { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userProfileAtom } from "../store/atoms/user";
import Search from "../components/Search";

const Profile = () => {
  const setUserProfile = useSetRecoilState(userProfileAtom);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/nikhil3113`, {
        headers: {
          Authorization: import.meta.env.VITE_GITHUB,
        },
      })
      .then((response) => {
        setUserProfile({
          name: response.data.name,
          login: response.data.login,
          location: response.data.location,
          repository: response.data.public_repos,
          bio: response.data.bio,
          follower: response.data.followers,
          following: response.data.following,
          twitter: response.data.twitter_username,
          email: response.data.email,
          avatar: response.data.avatar_url,
          blog: response.data.blog
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [setUserProfile]);

  return (
    <div className="flex flex-col justify-center items-center mt-28 max-sm:mt-5">
      <div className="flex justify-start items-center">
        <Search />
      </div>
      <Card />
    </div>
  );
};

export default Profile;
