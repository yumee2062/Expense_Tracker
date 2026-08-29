import { Link } from "react-router";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Logo / Title */}
        <div className="text-center mb-8">

          <img
            src="/logo.png"
            alt="TrackMate"
            className="w-28 mx-auto mb-4"
          />

          <h1 className="text-2xl font-bold text-slate-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to manage your expenses
          </p>

        </div>


        {/* Login Form */}
        <form className="space-y-5">

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
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="accent-green-500"
              />

              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-green-600 hover:text-green-700"
            >
              Forgot Password?
            </Link>

          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Login
          </button>

        </form>


        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-green-600 font-semibold hover:text-green-700"
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
}