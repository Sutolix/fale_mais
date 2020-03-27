import React, {useState, useEffect, useCallback} from "react";
import { useForm } from "react-hook-form";




export default function App() {


  const ddds =
  [
    {
      'ddd':"011",
      '016':1.90,
      '017':1.70,
      '018':0.90
    },
    {
      'ddd':"016",
      '011':2.90
    },
    {
      'ddd':"017",
      '011':2.70
    },
    {
      'ddd':"018",
      '011':1.90
    },
  ];


  const plans = 
  [
    {fm: 30},
    {fm: 60},
    {fm: 120}
  ];

  const [plan, setPlan] = useState(30);
  const [call, setCall] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [planOn, setPlanOn] = useState('0');
  const [planOff, setPlanOff] = useState('0');

  const { register, handleSubmit } = useForm();
  
  const onSubmit = data => {
    teste(data)
  };

  const [ddd] = [ddds];
  const [planx] = [plans];

    function teste (data) {

      const cust = data.call;
      var price = 0;

    switch(cust) {
 
      case '1':
        price = 1.9;
        break;
      
      case '2':
        price = 1.7;
        break;
 
      case '3':
        price = 0.9;
        break;
 
      case '4':
        price = 2.9;
        break;

      case '5':
        price = 2.7;
        break;

      case '6':
        price = 1.9;
        break;
 
      default:
        break;
      }


      const surplus = (data.minutes - data.plan);
      var vprice = price*0.1;
      console.log(data.minutes);
      console.log(vprice);
      if (surplus < 0){
        setPlanOn('0');
        setPlanOff((data.minutes) * price);
      }else{
        setPlanOn(surplus * vprice)
        setPlanOff((data.minutes) * price);
      }
    }

  return (
    <div>
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



    <div>

    <p>Com plano</p>
    <span>${planOn}</span>

    <p>Sem plano</p>
    <span>${planOff}</span>

    </div>


    </div>
  )
}