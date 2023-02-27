import { TextField, MenuItem, Button, Alert } from "@mui/material";
import { useState } from "react";
import Categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export default function Home(props) {
  let [category, setCategory] = useState("");
  let [difficulty, setDifficulty] = useState("");
  let [error, setError] = useState(false);

  let navigate = useNavigate();

  let submit = () => {
    if (!category || !difficulty || !props.name) {
      setError(true);
      return;
    } else {
      setError(false);
      props.fetQuestion(category, difficulty);
      navigate("/Quiz");
    }
  };

  return (
    <div className="cont">
      {error && (
        <Alert style={{ marginBottom: 20 }} severity="error">
          Please Fill all the fields
        </Alert>
      )}
      <TextField
        onChange={(e) => props.setName(e.target.value)}
        label="Enter your Name"
        style={{ marginBottom: 30 }}
      />
      <TextField
        onChange={(e) => setCategory(e.target.value)}
        select
        label="Select Categore"
        style={{ marginBottom: 30 }}
        variant="outlined"
        value={category}
      >
        {Categories.map((cat) => {
          return <MenuItem value={cat.value}>{cat.category}</MenuItem>;
        })}
      </TextField>
      <TextField
        onChange={(e) => setDifficulty(e.target.value)}
        select
        label="Difficulty"
        value={difficulty}
      >
        <MenuItem key="easy" value="easy">
          Easy
        </MenuItem>
        <MenuItem key="med" value="medium">
          Medium
        </MenuItem>
        <MenuItem key="hard" value="hard">
          Hard
        </MenuItem>
      </TextField>
      <Button onClick={submit} style={{ marginTop: 30 }} variant="contained">
        Submit
      </Button>
    </div>
  );
}
