import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-white border-t-4 border-slate-700 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <div className="h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="TrackMate"
              className="w-10 h-10 object-contain"
            />

            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Track<span className="text-green-500">Mate</span>
              </h1>

              <p className="text-[9px] text-gray-500">
                Track smarter. Spend better.
              </p>
            </div>
          </Link>


          {/* Navigation */}
          <nav className="flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-green-50 text-green-600"
                    : "text-slate-600 hover:text-green-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/features"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-green-600"
                    : "text-slate-600 hover:text-green-600"
                }`
              }
            >
              Features
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-green-600"
                    : "text-slate-600 hover:text-green-600"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-green-600"
                    : "text-slate-600 hover:text-green-600"
                }`
              }
            >
              Contact
            </NavLink>

          </nav>


          {/* Right Buttons */}
          <div className="flex items-center gap-5">

            <Link
              to="/login"
              className="text-sm font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-green-600 transition"
            >
              Get Started
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}