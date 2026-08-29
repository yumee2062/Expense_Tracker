export default function About() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            About <span className="text-emerald-500">TrackMate</span>
          </h1>

          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Your personal expense companion designed to help you
            track smarter and spend better.
          </p>

        </div>


        {/* What is TrackMate */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            What is TrackMate?
          </h2>

          <p className="text-slate-600 leading-7">
            TrackMate is a simple and user-friendly expense tracking
            application that helps you record your daily expenses,
            organize them into categories, and understand where your
            money goes.
          </p>

          <p className="text-slate-600 leading-7 mt-4">
            Whether you're tracking your food, transportation,
            shopping, education, or other expenses, TrackMate keeps
            everything organized in one place.
          </p>

        </div>


        {/* Why TrackMate */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 mb-8 text-white">

          <h2 className="text-2xl font-bold mb-4">
            Why TrackMate?
          </h2>

          <p className="leading-7 text-emerald-50">
            Managing money doesn't have to be complicated.
            TrackMate provides a simple way to record your spending
            and develop better financial habits.
          </p>

        </div>


        {/* Footer message */}
        <div className="text-center mt-12">

          <p className="text-slate-500">
            Track smarter. Spend better. 💚
          </p>

          <p className="text-sm text-slate-400 mt-2">
            Built with React and Tailwind CSS.
          </p>

        </div>

      </div>

    </div>
  );
}