import { useNavigate } from "react-router-dom";

export default function Result(props) {
  let navigate = useNavigate();
  function ho() {
    navigate("/");
  }
  return (
    <div>
      Final Score = {props.score}
      <button onClick={ho} className="btn btn-danger">
        Go To home
      </button>
    </div>
  );
}
