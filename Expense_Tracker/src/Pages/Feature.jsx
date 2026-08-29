export default function Features() {
  const features = [
    {
      icon: "💰",
      title: "Easy Expense Tracking",
      description:
        "Add your daily expenses quickly and keep all your transactions organized in one place.",
    },
    {
      icon: "📊",
      title: "Expense Overview",
      description:
        "See your total expenses and get a clear overview of your spending.",
    },
    {
      icon: "🏷️",
      title: "Expense Categories",
      description:
        "Organize your expenses into categories such as Food, Transport, Shopping and more.",
    },
    {
      icon: "🗑️",
      title: "Manage Expenses",
      description:
        "Easily remove expenses that you no longer need from your transaction list.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Use TrackMate comfortably on desktop, tablet, and mobile devices.",
    },
    {
      icon: "⚡",
      title: "Simple & Fast",
      description:
        "A clean and simple interface that makes managing your expenses easy.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">
            TrackMate Features
          </h1>

          <p className="text-slate-500 mt-3">
            Everything you need to manage your everyday expenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md
                         hover:-translate-y-2 hover:shadow-xl
                         transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-50
                              flex items-center justify-center
                              text-3xl mb-5">
                {feature.icon}
              </div>

              <h2 className="text-xl font-bold text-slate-800">
                {feature.title}
              </h2>

              <p className="text-slate-500 mt-3 leading-6">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}