import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/userApi";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const loginHandler = async (e) => {
    try {
      e.preventDefault();

      // Use GoogleAuthProvider for authentication
      const provider = new GoogleAuthProvider();

      // Sign in with Google popup
      const { user } = await signInWithPopup(auth, provider);
      console.log("Logged in user:", user);

      const { data } = await login({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        gender,
        dob,
      });

      // Assuming your login function returns some data

      console.log("Login data:", data);

      // If the login was successful, navigate to "/"
      if (data) {
        toast.success(data.message);
        console.log(data);
        // navigate("/");
      } else {
        toast.error("Error occurred during login");
        // toast.error(data.message)
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-6 bg-white border border-gray-200 rounded-md shadow-md">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={loginHandler}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label htmlFor="gender" className="block text-md mb-2 ">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      name="gender"
                      id="gender"
                      className="w-full p-2 border border-gray-200 rounded-lg"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option
                        value="male"
                        defaultChecked
                        className="rounded-md"
                      >
                        Male
                      </option>
                      <option value="female">Female</option>
                    </select>
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="dob" className="block text-md mb-2 ">
                      DOB
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={dob}
                      required
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                      className="py-3 px-4 uppercase block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End Form Group */}

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    className="w-4 h-auto"
                    width={46}
                    height={47}
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </form>
            {/* End Form */}

            {/* <button onClick={()=>toast.error("hiii")}>taost</button> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
