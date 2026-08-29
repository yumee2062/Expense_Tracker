import React from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg border border-slate-100">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Recent Expenses
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Keep track of where your money goes
          </p>
        </div>

        <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
          {expenses.length} Transactions
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-4 py-4 text-sm font-semibold text-slate-500">
                Description
              </th>

              <th className="px-4 py-4 text-sm font-semibold text-slate-500">
                Amount
              </th>

              <th className="px-4 py-4 text-sm font-semibold text-slate-500">
                Category
              </th>

              <th className="px-4 py-4 text-sm font-semibold text-slate-500 text-right">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-10 text-slate-400"
                >
                  No expenses yet 💸
                </td>
              </tr>
            ) : (
              expenses.map((expense) => (
                <tr
                  key={expense.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >

                  {/* Description */}
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg">
                        💳
                      </div>

                      <div>
                        <p className="font-semibold text-slate-800">
                          {expense.description}
                        </p>

                        <p className="text-xs text-slate-400">
                          Expense
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Amount */}
                  <td className="px-4 py-5">
                    <span className="font-bold text-slate-800">
                      Rs. {expense.amount}
                    </span>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-5">
                    <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                      {expense.category}
                    </span>
                  </td>

                  {/* Delete */}
                  <td className="px-4 py-5 text-right">
                    <button
                      onClick={() => onDelete(expense.id)}
                      className="px-4 py-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition font-medium text-sm"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ExpenseList;