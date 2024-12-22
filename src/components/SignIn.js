import { useDispatch } from "react-redux";
import { auth, provider, signInWithPopup } from "../utils/firebase";
import { setUser } from "../utils/userSlice";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const navigate =useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // Dispatch user data to Redux
      
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));
      console.log("Navigating to the homepage");
      navigate("/");
      // Redirect to dashboard or another page
 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 h-128">
      
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Sign In to Foodify</h1>

        {/* Google Sign-In Button */}
        <GoogleButton
          onClick={handleGoogleSignIn}
          className="w-full bg-green-600 text-white py-3 rounded-lg flex justify-center items-center space-x-4 hover:bg-green-700 transition duration-300"
        >
          {/* Button content */}
        </GoogleButton>
      
        {/* Display error if sign-in fails */}
        {error && <div className="text-red-600 mt-4 text-center">{error}</div>}
      </div>
    </div>
  );
};

export default SignIn;