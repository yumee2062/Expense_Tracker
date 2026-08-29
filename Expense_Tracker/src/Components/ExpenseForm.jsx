import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !category) {
      alert("Please fill in all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      description,
      amount: Number(amount),
      category,
    };

    onAddExpense(newExpense);

    // Clear form
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Add Expense
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Record your spending and keep your finances organized.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Description
          </label>

          <input
            type="text"
            placeholder="e.g. Laptop, Coffee, Bus ticket"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 
                       focus:border-transparent transition"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Amount
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
              Rs.
            </span>

            <input
              type="number"
              placeholder="0"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 
                         focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 
                       bg-white focus:outline-none focus:ring-2 
                       focus:ring-emerald-500 focus:border-transparent transition"
          >
            <option value="">Select category</option>
            <option value="Food">🍔 Food</option>
            <option value="Transport">🚌 Transport</option>
            <option value="Electronics">💻 Electronics</option>
            <option value="Grocery">🛍️ Grocery</option>
            <option value="Entertainment">🎮 Entertainment</option>
            <option value="Bills">💡 Bills</option>
            <option value="Education">📚 Education</option>
            <option value="Other">📦 Other</option>
            
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl 
                     bg-gradient-to-r from-emerald-500 to-teal-500 
                     text-white font-semibold 
                     hover:from-emerald-600 hover:to-teal-600 
                     active:scale-[0.98] transition-all shadow-md"
        >
          + Add Expense
        </button>

      </form>
    </div>
  );
};

export default ExpenseForm;