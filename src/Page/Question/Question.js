import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";
export default function Question(props) {
  let [select, setSelect] = useState();
  let [error, setError] = useState(false);
  let navigate = useNavigate();
  function handleColor(i) {
    if (select == i && select == props.correct) {
      return "select";
    } else if (select == i && select !== props.correct) {
      return "wrong";
    } else if (i == props.correct) {
      return "select";
    }
  }
  function handleCheck(i) {
    setSelect(i);
    if (i == props.correct) {
      props.setScore(props.score + 1);
    }
  }

  function handleQuit() {
    navigate("/");
  }

  function handleNext() {
    if (props.curquestion > 3) {
      navigate("/result");
    } else if (select) {
      props.SetcurQuestion(props.curquestion + 1);
      setSelect();
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="container">
      <h4>Score:{props.score}</h4>
      <h1> Question {props.curquestion + 1}</h1>

      <div className="aa">
        {props.que[props.curquestion].question}

        {error && (
          <div class="alert alert-danger" role="alert">
            Select any option
          </div>
        )}
        <div>
          {props.option &&
            props.option.map((i) => {
              return (
                <button
                  disabled={select}
                  onClick={() => {
                    handleCheck(i);
                  }}
                  className={`btn btn-primary ${select && handleColor(i)}`}
                >
                  {i};
                </button>
              );
            })}
        </div>
        <button onClick={handleNext} className="a2">
          Next Question
        </button>
        <button onClick={handleQuit} className="a3">
          Quit
        </button>
      </div>
    </div>
  );
}
