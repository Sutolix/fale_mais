import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";

export default function App() {

  const call1 = 1.9; //11 - 16
  const call2 = 1.7; //11 - 17
  const call3 = 0.9; //11 - 18
  const call4 = 2.9; //16 - 11
  const call5 = 2.7; //17 - 11
  const call6 = 1.9; //18 - 11

  const [plan, setPlan] = useState(null);
  const [call, setCall] = useState(null);
  const [minutes, setMinutes] = useState(null);

  const { register, handleSubmit } = useForm();
  
  const onSubmit = data => {
    console.log(data);
  };




  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Escolha um plano</label>
      <select ref={register} name="plan">
        <option value="30">FaleMais 30</option>
        <option value="60">FaleMais 60</option>
        <option value="120">FaleMais 120</option>
      </select>

      <label>Ligação entre</label>
      <select ref={register} name="call">
        <option value="1">011 a 016</option>
        <option value="2">011 a 017</option>
        <option value="3">011 a 018</option>
        <option value="4">016 a 011</option>
        <option value="5">017 a 011</option>
        <option value="6">018 a 011</option>
      </select>

      <label htmlFor="minutes">Duração</label>
      <input type="number" min="1" name="minutes" placeholder="minutos" ref={register} />

      <input type="submit" />
    </form>
  )
}