import "./App.css";
import Counter from "./components/Counter";
import data from "./data/data";
import { useState } from "react";

function App() {
  const [learners, setLearners] = useState(data);

  const [newLearner, setNewLearner] = useState({
    name: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newLearner)

    setLearners([newLearner, ...learners])
    setNewLearner({
      name: "",
      bio: ""
    })
  }


  return (
    <>
      <Counter />

      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={newLearner.name}
            onChange={(e) =>
              setNewLearner({ ...newLearner, name: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          Bio:{" "}
          <input
            type="text"
            value={newLearner.bio}
            onChange={(e) =>
              setNewLearner({ ...newLearner, bio: e.target.value })
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {learners.map((learner, index) => {
        return (
          <div key={index}>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
