import "./App.css";
import { useEffect, useState } from "react";

export const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [displayNumbers, setDisplayNumbers] = useState([]);

  const [total, setTotal] = useState(10);
  const [limit, setLimit] = useState(30);

  const generateNumbers = () => {
    let nums = new Set();
    while (nums.size < total) {
      nums.add(Math.floor(Math.random() * limit + 1));
    }
    const arr = Array.from(nums);
    setNumbers(Array.from(arr.sort((a, b) => a - b)));
  };

  const handleTotal = (e) => {
    const val = parseInt(e.target.value, 0);
    if (val > 0 && val <= 25) setTotal(val);
  };

  const handleLimit = (e) => {
    const val = parseInt(e.target.value, 0);
    if (val > 0 && val <= 50 && val >= total) setLimit(val);
  };

  useEffect(() => setDisplayNumbers(numbers), [numbers]);

  return (
    <main className="container">
      <h1>Random numbers</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="total" title="How many random numbers">
            Total:
          </label>
          <input
            id="total"
            type="number"
            value={total}
            onChange={handleTotal}
          />
          <label htmlFor="limit" title="The highest number">
            Limit:
          </label>
          <input
            id="limit"
            type="number"
            value={limit}
            onChange={handleLimit}
          />
        </div>
        <button onClick={generateNumbers}>generate</button>
      </form>
      <section>
        {displayNumbers.map((num, i) => (
          <span key={i}>
            {num}
            {i < displayNumbers.length - 1 && ", "}
          </span>
        ))}
      </section>
    </main>
  );
};
