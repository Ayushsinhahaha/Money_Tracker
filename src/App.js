
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

  function addNewTransaction(e) {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL;
    console.log(url);
    // fetch('')
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"200 new Sony Bravia"}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>
        <div className="description">
          <input type="text" placeholder={"description"} value={description}
          onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Sony TV</div>
            <div className="description">It was time for a new Television</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-01-21 16:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New PlayStation</div>
            <div className="description">It was time for a new Television</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2023-01-21 16:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">IPhone</div>
            <div className="description">It was time for a new Television</div>
          </div>
          <div className="right">
            <div className="price">-$900</div>
            <div className="datetime">2023-01-21 16:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
