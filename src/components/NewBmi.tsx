import { useState } from "react";
import "./NewBmi.css";

function NewBmi() {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event: any) => {
    //prevent submitting to the server
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("You are healthy");
      } else if (bmi > 24.9 && bmi < 30) {
        setMessage("You are overweight");
      } else {
        setMessage("You are Obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              value={weight}
              onChange={(e: any) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (in)</label>
            <input
              value={height}
              onChange={(event: any) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p
            className="paragraph"
            style={{ color: message === "You are Obese" ? "#6e2626" : "black" }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewBmi;
