import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">

      <div className="container mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="bg-white rounded-xl p-3 w-fit mb-5">
              <img
                src="/logo.png"
                alt="TrackMate"
                className="w-36"
              />
            </div>

            <p className="text-gray-300 text-lg">
              Your personal expense companion.
            </p>

            <p className="text-gray-400 mt-2">
              Track smarter, spend better.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link
                to="/"
                className="hover:text-blue-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-blue-400 transition"
              >
                About
              </Link>

              <Link
                to="/features"
                className="hover:text-blue-400 transition"
              >
                Features
              </Link>

              <Link
                to="/contact"
                className="hover:text-blue-400 transition"
              >
                Contact
              </Link>

            </div>
          </div>


          {/* Features */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Features
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>Expense Tracking</p>
              <p>Budget Management</p>
              <p>Income Tracking</p>
              <p>Financial Insights</p>

            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-400 mb-4">
              Have questions or suggestions?
            </p>

            <p className="text-blue-400">
              support@trackmate.com
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className=" bg-slate-800 flex items-center justify-center hover:bg-blue-300 transition"
              >
                <img src="https://i.pinimg.com/1200x/7f/d0/28/7fd02899ef020aa171ac4d6813365763.jpg" alt="facebook logo"   className="w-5 h-5 object-contain"/>
              </a>

              <a
                href="#"
                className=" bg-slate-800 flex items-center justify-center  "
              >
                <img src="https://i.pinimg.com/1200x/ed/6c/9d/ed6c9d08f2994693188db9a5cfa6cca0.jpg" alt="instagram logo" className="w-5 h-5 object-contain" />
              </a>

              <a
                href="#"
                className=" bg-slate-800 flex items-center justify-center "
              >
              <img src="https://i.pinimg.com/1200x/c7/2b/4a/c72b4ac15c09be8ad85e748b82d73ede.jpg" alt="github logo" className="w-5 h-5 object-contain" />
              </a>

              <a href="#"  className=" bg-slate-800 flex items-center justify-center ">
                <img src="https://i.pinimg.com/736x/d7/dd/f0/d7ddf0e936c39db320e15869d30eda95.jpg" alt="email" className="w-5 h-5 object-contain"/>
              </a>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom */}
      <div className="border-t border-slate-700">

        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            @ 2026 TrackMate. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500 text-sm">

            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}