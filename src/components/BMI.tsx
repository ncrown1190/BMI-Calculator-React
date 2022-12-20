import { useState } from "react";

export default function BMI() {
  const [bmi, setBmi] = useState<number>(0);
  const [info, setInfo] = useState<string>("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val: any = Math.round(Number(weight) / Number(height ** 2));
    // [BigInt(weight) / Number(height) / Number(height)] * 10000
    // ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };

  return (
    <div>
      <h1>BMI CALCULATOR</h1>
      <input
        type="text"
        onChange={(e: any) => setHeight(e.target.value)}
        placeholder="height in meters"
      />
      <input
        type="text"
        onChange={(e: any) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      />
      <button onClick={handleBmi}>Calculate</button>
      <h1>{bmi}</h1>
      <h2>{info}</h2>
    </div>
  );
}
