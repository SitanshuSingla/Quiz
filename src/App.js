import Header from "./Components/Header/Header";
import "./styles.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Quiz from "./Page/Quiz/Quiz";
import { useEffect, useState } from "react";
import Result from "./Result";

export default function App() {
  let [name, setName] = useState("");
  let [score, setScore] = useState(0);
  let [que, setQue] = useState();

  const fetQuestion = (category, difficulty) => {
    fetch(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )
      .then((res) => res.json())
      .then((res) => {
        setQue(res.results);
      });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            element={
              <Home name={name} fetQuestion={fetQuestion} setName={setName} />
            }
            path="/"
          ></Route>
          <Route
            element={
              <Quiz
                score={score}
                setScore={setScore}
                name={name}
                que={que}
                setQue={setQue}
              />
            }
            path="/Quiz"
          ></Route>

          <Route element={<Result score={score} />} path="/result"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
