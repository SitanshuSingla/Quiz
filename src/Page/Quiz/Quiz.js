import { useEffect, useState } from "react";
import "./Quiz.css";
import { CircularProgress } from "@mui/material";
import Question from "../Question/Question";
export default function Quiz({ score, setScore, name, que, setQue }) {
  let [option, setOption] = useState();
  let [curquestion, SetcurQuestion] = useState(0);

  useEffect(() => {
    setOption(
      que &&
        handesuffle([
          que[curquestion].correct_answer,
          ...que[curquestion].incorrect_answers
        ])
    );
  }, [que, curquestion]);

  console.log(que);
  function handesuffle(opt) {
    return opt.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <div className="bo">Welcome {name}</div>

      {que ? (
        <Question
          score={score}
          setScore={setScore}
          que={que}
          setQue={setQue}
          option={option}
          correct={que[curquestion].correct_answer}
          curquestion={curquestion}
          SetcurQuestion={SetcurQuestion}
        />
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
}
