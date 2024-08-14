import { useRecoilState, useSetRecoilState } from "recoil";
import { username, userProfileAtom } from "../store/atoms/user";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Search = () => {
  const setUser = useSetRecoilState(username);
  const setUserProfile = useSetRecoilState(userProfileAtom);
  const inputRef = useRef(null);
  const handleSearch = (e) => {
    if (e.key == "Enter") {
      fetchUserProfile();
    }
  };

  const handleButtonClick = () => {
    fetchUserProfile();
  };

  const fetchUserProfile = () => {
    const user = inputRef.current.value;
    if (user) {
      setUser(user); // Set the user name in Recoil state

      axios
        .get(`https://api.github.com/users/${user}`, {
          headers: {
            Authorization: import.meta.env.VITE_GITHUB,
          },
        })
        .then((response) => {
          console.log(response.data)
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
          if (error.response && error.response.status === 404) {
            alert("No user found");
          } else {
            console.log("Error fetching user profile:", error.message);
          }
        });
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
      <input
        type="search"
        name="user"
        placeholder="Enter user name"
        className="border border-gray-300 py-2 w-64 max-sm:w-full rounded-lg px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        ref={inputRef}
        onKeyDown={handleSearch}
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
      >
        <FaSearch className="text-2xl" />
      </button>
    </div>
  );
};

export default Search;
