import React, { useState } from "react";
import { useAlert } from 'react-alert';
import { useForm } from "react-hook-form";
import './App.css';

export default function App() {
  const [minutes, setMinutes] = useState('');
  const [planOn, setPlanOn] = useState('0');
  const [planOff, setPlanOff] = useState('0');

  const { register, handleSubmit } = useForm();

  const alert = useAlert();

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
    var validminutes = `${data.minutes}`.length;

    console.log(price);
    console.log(surplus);
    console.log(validminutes);

    if ((data.minutes <= 0) || (validminutes >= 5)){
      alert.error('Por favor, digite um valor válido!');
      setPlanOn('0');
      setPlanOff('0');
      setMinutes('');
    
    } else if ((surplus < 0) & (data.minutes >= 1)) {
      setPlanOn('0');
      setPlanOff(parseFloat(((data.minutes) * price).toFixed(2)));
    } else {
      setPlanOn(parseFloat(surplus * fmprice).toFixed(2));
      setPlanOff(parseFloat((data.minutes) * price).toFixed(2));
    }
  }

  return (
    <div className="container d-flex flex-column">
      <div className="head">
        <span>FaleMais</span>
        <span>Telzir</span>
      </div>
      <div className="calc row justify-content-around align-items-center">
        
        <div className="form col-md-4 order-md-1 order-12">
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
              <label>Selecione os ddds</label>
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
              <label htmlFor="minutes">Duração da chamada</label>
              <input className="form-control" ref={register} id="minutes" name="minutes" type="number" min="1" placeholder="min" required value={minutes} onChange={e => setMinutes(e.target.value)}/>
            </div>

            <button className="btn btn-success align-self-center" type="submit">Ver por quanto fica</button>
          </form>
        </div>

        <div className="line order-6"></div>

        <div className="result col-md-4 d-flex align-items-center order-md-12 order-1">
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
