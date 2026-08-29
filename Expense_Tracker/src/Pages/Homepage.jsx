import { useState } from "react";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseList from "../Components/ExpenseList";

export default function Home() {

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Laptop",
      amount: 75000,
      category: "Electronics",
    },
    {
      id: 2,
      description: "Coffee",
      amount: 250,
      category: "Food",
    },
  ]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      expense,
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-800 mb-8">
          TrackMate
        </h1>

        <ExpenseForm onAddExpense={addExpense} />

        <ExpenseList
          expenses={expenses}
          onDelete={deleteExpense}
        />

      </div>

    </div>
  );
}