export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-slate-800">
            Get in Touch
          </h1>

          <p className="text-slate-500 mt-3">
            Have a question or suggestion? We'd love to hear from you.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500
                          rounded-2xl p-8 text-white">

            <h2 className="text-2xl font-bold mb-6">
              Contact TrackMate
            </h2>

            <p className="text-emerald-50 leading-7 mb-8">
              Whether you have feedback, a question, or an idea for
              TrackMate, feel free to reach out.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>

                <div>
                  <p className="text-sm text-emerald-100">
                    Email
                  </p>

                  <p className="font-medium">
                    support@trackmate.com
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>

                <div>
                  <p className="text-sm text-emerald-100">
                    Location
                  </p>

                  <p className="font-medium">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <span className="text-2xl">💬</span>

                <div>
                  <p className="text-sm text-emerald-100">
                    Support
                  </p>

                  <p className="font-medium">
                    We're here to help
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Send us a message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border
                             border-slate-200 focus:outline-none
                             focus:ring-2 focus:ring-emerald-500"
                />
              </div>


              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border
                             border-slate-200 focus:outline-none
                             focus:ring-2 focus:ring-emerald-500"
                />
              </div>


              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border
                             border-slate-200 resize-none
                             focus:outline-none
                             focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>


              <button
                type="submit"
                className="w-full py-3 rounded-xl
                           bg-gradient-to-r from-emerald-500 to-teal-500
                           text-white font-semibold
                           hover:from-emerald-600
                           hover:to-teal-600
                           transition"
              >
                Send Message ✉️
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}