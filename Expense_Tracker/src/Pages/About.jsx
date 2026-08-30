import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden py-16 md:py-20">

        {/* Decorative Background */}
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


        <div className="relative max-w-5xl mx-auto px-6 text-center">

          {/* Logo */}
          <div
            className="inline-flex
                       bg-white
                       rounded-3xl
                       p-5
                       shadow-lg
                       border
                       border-slate-100
                       mb-8"
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
            About TrackMate
          </p>


          {/* Main Heading */}
          <h1
            className="text-4xl
                       md:text-6xl
                       font-extrabold
                       text-slate-800
                       leading-tight"
          >
            Take Control of Your

            <span
              className="block
                         text-transparent
                         bg-clip-text
                         bg-gradient-to-r
                         from-emerald-500
                         to-teal-500"
            >
              Financial Journey
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
            TrackMate is a simple and user-friendly expense tracking
            application designed to help you manage your income,
            expenses, and savings in one place.
          </p>

        </div>

      </section>


      {/* =====================================================
          ABOUT TRACKMATE
      ====================================================== */}
      <section className="py-20 px-6 bg-white">

        <div
          className="max-w-6xl
                     mx-auto
                     grid
                     grid-cols-1
                     md:grid-cols-2
                     gap-12
                     items-center"
        >

          {/* Left Content */}
          <div>

            <p
              className="text-emerald-500
                         font-bold
                         uppercase
                         tracking-widest
                         text-sm
                         mb-3"
            >
              Our Purpose
            </p>

            <h2
              className="text-3xl
                         md:text-4xl
                         font-bold
                         text-slate-800
                         mb-5"
            >
              What is TrackMate?
            </h2>

            <p
              className="text-slate-500
                         leading-relaxed
                         mb-5"
            >
              TrackMate is a personal expense management application
              that makes it easier to understand where your money goes.
            </p>

            <p
              className="text-slate-500
                         leading-relaxed
                         mb-5"
            >
              Users can record their expenses, set their income,
              organize spending into categories, and automatically
              calculate their remaining savings.
            </p>

            <p
              className="text-slate-500
                         leading-relaxed"
            >
              The goal of TrackMate is simple — help users develop
              better financial habits by making money management
              clear and convenient.
            </p>

          </div>


          {/* Right Card */}
          <div
            className="relative
                       bg-gradient-to-br
                       from-emerald-500
                       to-teal-500
                       rounded-3xl
                       p-8
                       md:p-10
                       shadow-xl
                       overflow-hidden"
          >

            {/* Decorative Circle */}
            <div
              className="absolute
                         -top-16
                         -right-16
                         w-40
                         h-40
                         bg-white/10
                         rounded-full"
            ></div>

            <div
              className="absolute
                         -bottom-20
                         -left-20
                         w-48
                         h-48
                         bg-white/10
                         rounded-full"
            ></div>


            <div className="relative">

              <div
                className="w-16
                           h-16
                           rounded-2xl
                           bg-white
                           flex
                           items-center
                           justify-center
                           mb-6
                           shadow-lg"
              >
                <span className="text-3xl">
                  📊
                </span>
              </div>


              <h3
                className="text-2xl
                           font-bold
                           text-white
                           mb-4"
              >
                Track Smarter.
                <br />
                Spend Better.
              </h3>


              <p
                className="text-emerald-50
                           leading-relaxed"
              >
                TrackMate brings your financial information together
                in a simple dashboard so you can make smarter
                spending decisions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT HELPS
      ====================================================== */}
      <section className="py-20 px-6 bg-slate-50">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">

            <p
              className="text-emerald-500
                         font-bold
                         uppercase
                         tracking-widest
                         text-sm"
            >
              Why We Built It
            </p>

            <h2
              className="text-3xl
                         md:text-4xl
                         font-bold
                         text-slate-800
                         mt-3"
            >
              Making Expense Tracking Easier
            </h2>

            <p
              className="text-slate-500
                         max-w-2xl
                         mx-auto
                         mt-4"
            >
              TrackMate focuses on simplicity, organization, and
              helping users understand their financial habits.
            </p>

          </div>


          {/* Cards */}
          <div
            className="grid
                       grid-cols-1
                       md:grid-cols-3
                       gap-6"
          >

            {/* Card 1 */}
            <div
              className="bg-white
                         rounded-2xl
                         p-8
                         border
                         border-slate-100
                         shadow-sm
                         hover:shadow-xl
                         hover:-translate-y-2
                         transition-all
                         duration-300"
            >

              <div
                className="w-14
                           h-14
                           rounded-2xl
                           bg-emerald-50
                           flex
                           items-center
                           justify-center
                           text-3xl
                           mb-6"
              >
                🎯
              </div>

              <h3
                className="text-xl
                           font-bold
                           text-slate-800
                           mb-3"
              >
                Better Awareness
              </h3>

              <p
                className="text-slate-500
                           leading-relaxed"
              >
                Understand where your money is going and identify
                unnecessary spending.
              </p>

            </div>


            {/* Card 2 */}
            <div
              className="bg-white
                         rounded-2xl
                         p-8
                         border
                         border-slate-100
                         shadow-sm
                         hover:shadow-xl
                         hover:-translate-y-2
                         transition-all
                         duration-300"
            >

              <div
                className="w-14
                           h-14
                           rounded-2xl
                           bg-emerald-50
                           flex
                           items-center
                           justify-center
                           text-3xl
                           mb-6"
              >
                📈
              </div>

              <h3
                className="text-xl
                           font-bold
                           text-slate-800
                           mb-3"
              >
                Better Decisions
              </h3>

              <p
                className="text-slate-500
                           leading-relaxed"
              >
                Use your income, expenses, and savings information
                to make more informed financial decisions.
              </p>

            </div>


            {/* Card 3 */}
            <div
              className="bg-white
                         rounded-2xl
                         p-8
                         border
                         border-slate-100
                         shadow-sm
                         hover:shadow-xl
                         hover:-translate-y-2
                         transition-all
                         duration-300"
            >

              <div
                className="w-14
                           h-14
                           rounded-2xl
                           bg-emerald-50
                           flex
                           items-center
                           justify-center
                           text-3xl
                           mb-6"
              >
                🌱
              </div>

              <h3
                className="text-xl
                           font-bold
                           text-slate-800
                           mb-3"
              >
                Better Habits
              </h3>

              <p
                className="text-slate-500
                           leading-relaxed"
              >
                Build consistent money management habits by
                keeping track of your spending.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT TECHNOLOGY
      ====================================================== */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <p
            className="text-emerald-500
                       font-bold
                       uppercase
                       tracking-widest
                       text-sm"
          >
            Built With
          </p>

          <h2
            className="text-3xl
                       md:text-4xl
                       font-bold
                       text-slate-800
                       mt-3
                       mb-10"
          >
            Technology Behind TrackMate
          </h2>


          <div
            className="grid
                       grid-cols-2
                       md:grid-cols-4
                       gap-5"
          >

            <div
              className="rounded-2xl
                         border
                         border-slate-100
                         p-6
                         hover:shadow-lg
                         transition"
            >
              <div className="text-4xl mb-3">
                ⚛️
              </div>

              <h3 className="font-bold text-slate-800">
                React
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                User Interface
              </p>
            </div>


            <div
              className="rounded-2xl
                         border
                         border-slate-100
                         p-6
                         hover:shadow-lg
                         transition"
            >
              <div className="text-4xl mb-3">
                🎨
              </div>

              <h3 className="font-bold text-slate-800">
                Tailwind CSS
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Styling
              </p>
            </div>


            <div
              className="rounded-2xl
                         border
                         border-slate-100
                         p-6
                         hover:shadow-lg
                         transition"
            >
              <div className="text-4xl mb-3">
                💾
              </div>

              <h3 className="font-bold text-slate-800">
                LocalStorage
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Data Storage
              </p>
            </div>


            <div
              className="rounded-2xl
                         border
                         border-slate-100
                         p-6
                         hover:shadow-lg
                         transition"
            >
              <div className="text-4xl mb-3">
                ⚡
              </div>

              <h3 className="font-bold text-slate-800">
                Vite
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Development Tool
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section
        className="py-20
                   px-6
                   bg-white"
      >

        <div className="max-w-3xl mx-auto text-center">

          <h2
            className="text-3xl
                       md:text-4xl
                       font-bold
                       text-black"
          >
            Start Managing Your Money Today
          </h2>

          <p
            className="text-slate-400
                       mt-4
                       mb-8
                       text-lg"
          >
            Keep track of your spending, understand your finances,
            and work towards better savings.
          </p>

          <a
            href="/"
            className="inline-block
                       px-8
                       py-3
                       rounded-xl
                       bg-gradient-to-r
                       from-emerald-500
                       to-teal-500
                       text-white
                       font-semibold
                       shadow-lg
                       hover:scale-105
                       transition-all
                       duration-300"
          >
            Get Started →
          </a>

        </div>

      </section>

    </div>
  );
}