import React from "react";

const features = [
  {
    icon: "💰",
    title: "Income Tracking",
    description:
      "Set your monthly income and easily keep track of the money available to you.",
  },
  {
    icon: "💸",
    title: "Expense Tracking",
    description:
      "Record your daily expenses with description, amount, category, and date.",
  },
  {
    icon: "🏦",
    title: "Savings Calculator",
    description:
      "TrackMate automatically calculates your savings by subtracting expenses from your income.",
  },
  {
    icon: "💾",
    title: "Local Storage",
    description:
      "Your income and expenses are stored in your browser and remain available after refreshing.",
  },
  {
    icon: "🏷️",
    title: "Expense Categories",
    description:
      "Organize your spending into categories like Food, Transport, Shopping, Bills, and more.",
  },
  {
    icon: "📅",
    title: "Date Tracking",
    description:
      "Keep track of when each expense was made and review your spending history easily.",
  },
];

export default function Feature() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">

        {/* Decorative Background Circles */}
        <div
          className="absolute -top-32 -right-32
                     w-96 h-96
                     bg-emerald-100
                     rounded-full
                     blur-3xl
                     opacity-60"
        ></div>

        <div
          className="absolute -bottom-32 -left-32
                     w-96 h-96
                     bg-teal-100
                     rounded-full
                     blur-3xl
                     opacity-60"
        ></div>


        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-6 text-center">

          {/* Logo Card */}
          <div
            className="inline-flex items-center justify-center
                       bg-white
                       rounded-3xl
                       p-5
                       mb-8
                       shadow-lg
                       border border-slate-100"
          >
            <img
              src="/logo.png"
              alt="TrackMate Logo"
              className="w-32 h-32 md:w-36 md:h-36 object-contain"
            />
          </div>


          {/* Small Heading */}
          <p
            className="text-emerald-600
                       font-bold
                       uppercase
                       tracking-widest
                       text-sm
                       mb-4"
          >
            TrackMate Features
          </p>


          {/* Main Heading */}
          <h1
            className="text-4xl
                       md:text-6xl
                       font-extrabold
                       text-slate-800
                       leading-tight"
          >
            Everything You Need for

            <span
              className="block
                         text-transparent
                         bg-clip-text
                         bg-gradient-to-r
                         from-emerald-500
                         to-teal-500"
            >
              Smarter Spending
            </span>
          </h1>


          {/* Description */}
          <p
            className="max-w-2xl
                       mx-auto
                       mt-6
                       text-lg
                       text-slate-500
                       leading-relaxed"
          >
            Track your expenses, manage your income, calculate your
            savings, and build better financial habits — all in one place.
          </p>


          {/* Buttons */}
          <div
            className="flex
                       flex-col
                       sm:flex-row
                       justify-center
                       gap-4
                       mt-8"
          >

            {/* Get Started */}
            <a
              href="/"
              className="px-7
                         py-3
                         rounded-xl
                         bg-gradient-to-r
                         from-emerald-500
                         to-teal-500
                         text-white
                         font-semibold
                         shadow-lg
                         shadow-emerald-200
                         hover:scale-105
                         hover:shadow-xl
                         transition-all
                         duration-300"
            >
              Start Tracking →
            </a>


            {/* About */}
            <a
              href="/about"
              className="px-7
                         py-3
                         rounded-xl
                         bg-white
                         border
                         border-slate-200
                         text-slate-700
                         font-semibold
                         hover:border-emerald-400
                         hover:text-emerald-600
                         transition-all
                         duration-300"
            >
              Learn More
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURES SECTION
      ====================================================== */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-14">

            <p
              className="text-emerald-500
                         font-bold
                         uppercase
                         tracking-widest
                         text-sm"
            >
              What TrackMate Offers
            </p>

            <h2
              className="text-3xl
                         md:text-4xl
                         font-bold
                         text-slate-800
                         mt-3"
            >
              Powerful Tools. Simple Experience.
            </h2>

            <p
              className="text-slate-500
                         mt-4
                         max-w-2xl
                         mx-auto"
            >
              Everything you need to manage your personal finances
              without complicated tools or unnecessary features.
            </p>

          </div>


          {/* Feature Cards */}
          <div
            className="grid
                       grid-cols-1
                       md:grid-cols-2
                       lg:grid-cols-3
                       gap-6"
          >

            {features.map((feature, index) => (

              <div
                key={index}
                className="group
                           bg-white
                           rounded-2xl
                           p-7
                           border
                           border-slate-100
                           shadow-sm
                           hover:shadow-xl
                           hover:-translate-y-2
                           transition-all
                           duration-300"
              >

                {/* Icon */}
                <div
                  className="w-14
                             h-14
                             rounded-2xl
                             bg-gradient-to-br
                             from-emerald-50
                             to-teal-50
                             flex
                             items-center
                             justify-center
                             text-2xl
                             mb-6
                             group-hover:scale-110
                             group-hover:bg-emerald-100
                             transition-all
                             duration-300"
                >
                  {feature.icon}
                </div>


                {/* Title */}
                <h3
                  className="text-xl
                             font-bold
                             text-slate-800
                             mb-3"
                >
                  {feature.title}
                </h3>


                {/* Description */}
                <p
                  className="text-slate-500
                             leading-relaxed"
                >
                  {feature.description}
                </p>


                {/* Bottom Accent */}
                <div
                  className="mt-6
                             h-1
                             w-10
                             rounded-full
                             bg-gradient-to-r
                             from-emerald-400
                             to-teal-400
                             group-hover:w-20
                             transition-all
                             duration-300"
                ></div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY TRACKMATE SECTION
      ====================================================== */}
      <section className="py-20 px-6 bg-slate-50">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <p
              className="text-emerald-500
                         font-bold
                         uppercase
                         tracking-widest
                         text-sm"
            >
              Why TrackMate?
            </p>

            <h2
              className="text-3xl
                         md:text-4xl
                         font-bold
                         text-slate-800
                         mt-3"
            >
              Built for Simple Money Management
            </h2>

          </div>


          {/* Benefits */}
          <div
            className="grid
                       grid-cols-1
                       md:grid-cols-3
                       gap-6"
          >

            {/* Simple */}
            <div
              className="bg-white
                         rounded-2xl
                         p-8
                         text-center
                         border
                         border-slate-100
                         shadow-sm
                         hover:shadow-lg
                         transition"
            >

              <div className="text-4xl mb-4">
                ⚡
              </div>

              <h3
                className="text-xl
                           font-bold
                           text-slate-800"
              >
                Simple
              </h3>

              <p
                className="text-slate-500
                           mt-3
                           leading-relaxed"
              >
                A clean and easy-to-use interface designed for
                everyday expense tracking.
              </p>

            </div>


            {/* Private */}
            <div
              className="bg-white
                         rounded-2xl
                         p-8
                         text-center
                         border
                         border-slate-100
                         shadow-sm
                         hover:shadow-lg
                         transition"
            >

              <div className="text-4xl mb-4">
                🔒
              </div>

              <h3
                className="text-xl
                           font-bold
                           text-slate-800"
              >
                Private
              </h3>

              <p
                className="text-slate-500
                           mt-3
                           leading-relaxed"
              >
                Your expense data is stored locally in your
                browser using LocalStorage.
              </p>

            </div>


            {/* Responsive */}
            <div
              className="bg-white
                         rounded-2xl
                         p-8
                         text-center
                         border
                         border-slate-100
                         shadow-sm
                         hover:shadow-lg
                         transition"
            >

              <div className="text-4xl mb-4">
                📱
              </div>

              <h3
                className="text-xl
                           font-bold
                           text-slate-800"
              >
                Responsive
              </h3>

              <p
                className="text-slate-500
                           mt-3
                           leading-relaxed"
              >
                Track your spending comfortably on desktop,
                tablet, or mobile devices.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}
      <section
        className="py-20
                   px-6
                   bg-white"
                  
      >

        <div className="max-w-3xl mx-auto text-center">

          {/* Small Logo */}
          <div className="flex justify-center mb-6">

            <div
              className="bg-white
                         rounded-2xl
                         p-3
                         shadow-lg"
            >
              <img
                src="/logo.png"
                alt="TrackMate Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

          </div>


          <h2
            className="text-3xl
                       md:text-4xl
                       font-bold
                       text-black"
          >
            Ready to Take Control of Your Spending?
          </h2>


          <p
            className="text-slate-400
                       mt-4
                       mb-8
                       text-lg"
          >
            Start tracking your expenses and make every rupee count.
          </p>


          <a
            href="/"
            className="inline-block
                       px-8
                       py-3
                       rounded-xl
                       bg-emerald-500
                       text-white
                       font-semibold
                       hover:bg-emerald-400
                       hover:scale-105
                       transition-all
                       duration-300
                       shadow-lg"
          >
            Get Started →
          </a>

        </div>

      </section>

    </div>
  );
}