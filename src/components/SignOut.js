import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { setUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const SignOut = () => {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(setUser({
        uid: null,
         email: null,
         displayName: null,
         photoURL: null,
      }));
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={handleSignOut}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignOut;