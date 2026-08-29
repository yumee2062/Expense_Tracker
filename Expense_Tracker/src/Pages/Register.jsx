import { Link } from "react-router";

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Logo */}
        <div className="text-center mb-7">

          <img
            src="/logo.png"
            alt="TrackMate"
            className="w-28 mx-auto mb-4"
          />

          <h1 className="text-2xl font-bold text-slate-800">
            Create Your Account
          </h1>

          <p className="text-gray-500 mt-2">
            Start managing your expenses smarter
          </p>

        </div>


        {/* Register Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-600">

            <input
              type="checkbox"
              className="mt-1 accent-green-500"
            />

            <span>
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-green-600 hover:text-green-700"
              >
                Terms & Conditions
              </Link>
            </span>

          </label>


          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Create Account
          </button>

        </form>


        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-green-600 font-semibold hover:text-green-700"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}