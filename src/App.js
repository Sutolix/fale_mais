import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './App.css';

export default function App() {
  const [planOn, setPlanOn] = useState('0');
  const [planOff, setPlanOff] = useState('0');

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    calc(data)
  };

  function calc(data) {

    const cust = data.call;
    var price = 0;

    switch (cust) {

      case '1':
        price = '1.9';
        break;

      case '2':
        price = '1.7';
        break;

      case '3':
        price = '0.9';
        break;

      case '4':
        price = '2.9';
        break;

      case '5':
        price = '2.7';
        break;

      case '6':
        price = '1.9';
        break;

      default:
        break;
    }

    const surplus = (data.minutes - data.plan);
    var fmprice = price * 0.1;

    console.log(price);
    console.log(surplus);

    if (surplus < 0) {
      setPlanOn('0');
      setPlanOff(parseFloat(((data.minutes) * price).toFixed(2)));
    } else {
      setPlanOn(parseFloat(surplus * fmprice).toFixed(2));
      setPlanOff(parseFloat((data.minutes) * price).toFixed(2));
    }
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="calc row justify-content-around">
        
        <div className="form col-md-4">
          <form id="plansform" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Escolha um Plano</label>
              <select className="form-control" ref={register} name="plan" id="plan" required>
                <option value="30">FaleMais 30</option>
                <option value="60">FaleMais 60</option>
                <option value="120">FaleMais 120</option>
              </select>
            </div>

            <div className="form-group">
              <label>Selecione o DDD de origem</label>
              <select className="form-control" ref={register} name="call" required>
                <option value="1">011 a 016</option>
                <option value="2">011 a 017</option>
                <option value="3">011 a 018</option>
                <option value="4">016 a 011</option>
                <option value="5">017 a 011</option>
                <option value="6">018 a 011</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="minutes">Digite a duração da ligação</label>
              <input className="form-control" ref={register} id="minutes" name="minutes" type="number" min="1" placeholder="minutos" required />
            </div>

            <button className="btn btn-success align-self-center" type="submit">Ver por quanto fica</button>
          </form>
        </div>

        <div className="result col-md-4 d-flex justify-content-center align-items-center flex-column">
          <div className="plan">
            <p>Com FaleMais</p>
            <span>${planOn}</span>
          </div>

          <div className="plan">
            <p>Sem FaleMais</p>
            <span>${planOff}</span>
          </div>
        </div>
      
      </div>
    </div>
  )
}
