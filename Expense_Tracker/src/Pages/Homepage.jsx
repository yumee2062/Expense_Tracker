import { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Home() {

  // =========================
  // EXPENSE STATE
  // =========================

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("trackmate-expenses");

    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });


  // =========================
  // INCOME STATE
  // =========================

  const [income, setIncome] = useState(() => {
    const savedIncome = localStorage.getItem("trackmate-income");

    return savedIncome ? Number(savedIncome) : 0;
  });


  // =========================
  // SAVE EXPENSES
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "trackmate-expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);


  // =========================
  // SAVE INCOME
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "trackmate-income",
      income
    );
  }, [income]);


  // =========================
  // ADD EXPENSE
  // =========================

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      expense
    ]);
  };


  // =========================
  // DELETE EXPENSE
  // =========================

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };


  // =========================
  // CALCULATE TOTAL EXPENSE
  // =========================

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );


  // =========================
  // CALCULATE SAVINGS
  // =========================

  const savings = income - totalExpense;


  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-5xl mx-auto">

        {/* =========================
            PAGE HEADER
        ========================= */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-slate-800">
            Track<span className="text-emerald-500">Mate</span>
          </h1>

          <p className="text-slate-500 mt-2">
            Track smarter. Spend better.
          </p>

        </div>


        {/* =========================
            INCOME INPUT
        ========================= */}

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8">

          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Set Your Income
          </h2>

          <p className="text-sm text-slate-500 mb-4">
            Enter your monthly income to calculate your savings.
          </p>

          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
              Rs.
            </span>

            <input
              type="number"
              min="0"
              placeholder="Enter your income"
              value={income === 0 ? "" : income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200
                         focus:outline-none focus:ring-2 focus:ring-emerald-500
                         focus:border-transparent transition"
            />

          </div>

        </div>


        {/* =========================
            DASHBOARD CARDS
        ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* INCOME */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Income
                </p>

                <h2 className="text-3xl font-bold text-emerald-500 mt-2">
                  Rs. {income.toLocaleString()}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl">
                💰
              </div>

            </div>

            <p className="text-sm text-slate-400 mt-4">
              Your total income
            </p>

          </div>


          {/* EXPENSE */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Expenses
                </p>

                <h2 className="text-3xl font-bold text-red-500 mt-2">
                  Rs. {totalExpense.toLocaleString()}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-2xl">
                💸
              </div>

            </div>

            <p className="text-sm text-slate-400 mt-4">
              Your total spending
            </p>

          </div>


          {/* SAVINGS */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 shadow-lg text-white">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-emerald-100">
                  Savings
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  Rs. {savings.toLocaleString()}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl">
                🏦
              </div>

            </div>

            <p className="text-sm text-emerald-100 mt-4">
              Income − Expenses
            </p>

          </div>

        </div>


        {/* =========================
            ADD EXPENSE FORM
        ========================= */}

        <ExpenseForm
          onAddExpense={addExpense}
        />


        {/* =========================
            EXPENSE LIST
        ========================= */}

        <ExpenseList
          expenses={expenses}
          onDelete={deleteExpense}
        />

      </div>

    </div>
  );
}