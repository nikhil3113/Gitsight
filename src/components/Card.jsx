import { FiTwitter } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { username, userProfileAtom } from "../store/atoms/user";
import { FaGithub, FaBlog, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useRecoilValue(username);
  const userProfileValue = useRecoilValue(userProfileAtom);
  // console.log(userProfileValue.twitter)

  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5">
      {user.length > 0 ? (
        <div className=" bg-white shadow-lg  py-10 px-20 rounded-xl w-96 max-sm:w-72">
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center">
              <img
                src={userProfileValue.avatar}
                className="max-w-40 rounded-full"
              />
            </div>
            <p className="text-center text-black font-semibold text-xl">
              {" "}
              {userProfileValue.login}
            </p>
            <div className="flex justify-evenly gap-3 text-black font-semibold">
              <p>{userProfileValue.name}</p>
              <p>{userProfileValue.location}</p>
            </div>
            <p className="text-center text-black font-semibold">
              {userProfileValue.repository} Repositories
            </p>
            <div className="flex justify-center items-center max-w-1/2">
              <p className="text-black max-w-1/2 text-center">
                {userProfileValue.bio}
              </p>
            </div>
            <div className="flex justify-evenly items-center text-black gap-5 mb-2">
              <div>
                <p className="text-center font-semibold">
                  {userProfileValue.follower}
                </p>
                <p>Followers</p>
              </div>
              <div>
                <p className="text-center font-semibold">
                  {userProfileValue.following}
                </p>
                <p>following</p>
              </div>
            </div>

            <div className="flex justify-evenly items-center text-black text-2xl">
              {userProfileValue.twitter != null ?  <Link
                  to={`https://x.com/${userProfileValue.twitter}`}
                  target="_blank"
                >
                  <FiTwitter />
                </Link>: ""}

              {userProfileValue.email != null ? <MdOutlineEmail /> : ""}

              {userProfileValue.blog != null ? (
                <Link
                  to={`${userProfileValue.blog}`}
                  target="_blank"
                >
                  <FaBlog />
                </Link>
              ) : (
                ""
              )}

              <Link
                to={`https://github.com/${userProfileValue.login}`}
                target="_blank"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        " Check User"
      )}
    </div>
  );
};

export default Profile;
