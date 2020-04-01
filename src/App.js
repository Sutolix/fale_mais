import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { prices, plans } from './services/tarifs.js';
import { LottieAnimation } from './components/LottieAnimation';
import './global.css';

export default function App() {
  //States
  const [plan, setPlan] = useState('30');
  const [call, setCall] = useState('11-16');
  const [minutes, setMinutes] = useState('');
  const [planOn, setPlanOn] = useState('0');
  const [planOff, setPlanOff] = useState('0');
  
  //Custom Alert
  const alert = useAlert();

  //Calculates the result
  function handleCalc(e) {
    e.preventDefault();

    let find = (prices.filter(item => item.call === call))[0];
    let price = find.price;
    let fmprice = ((parseFloat(price) * 0.1) + parseFloat(price));
    let validminutes = `${minutes}`.length;
    let surplus = (minutes - plan);

    //Calculation logic
    if ((minutes <= 0) || (validminutes >= 4) || (isNaN(minutes))) {
      alert.error('Por favor, digite um valor válido!');
      setPlanOn('0');
      setPlanOff('0');
      setMinutes('');
    } else if ((surplus < 0) & (minutes >= 1)) {
      setPlanOn('0');
      setPlanOff(parseFloat(((minutes) * price).toFixed(2)));
    } else {
      setPlanOn(parseFloat(surplus * fmprice).toFixed(2));
      setPlanOff(parseFloat(minutes * price).toFixed(2));
    }
  }

  return (
    <div className="container d-flex flex-column">

      <div className="head">
        <span><a href="/">FaleMais</a></span>
        <span>Telzir</span>
      </div>

      <section className="calc row justify-content-around align-items-center">
        <div className="form col-md-4 order-md-1 order-12">
          <form id="plansform" onSubmit={handleCalc}>
            <div className="form-group">
              <label>Escolha um Plano</label>
              <select
                className="form-control"
                name="plan"
                required
                value={plan}
                onChange={e => setPlan(e.target.value)}>
                {plans.map(plan => (
                  <option key={plan.value} value={plan.value}>{plan.title}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Selecione os ddds da ligação</label>
              <select
                className="form-control"
                name="call"
                required
                value={call}
                onChange={e => setCall(e.target.value)}>
                {prices.map(route => (
                  <option key={route.call} value={route.call}>{route.title}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="minutes">Duração da chamada</label>
              <input
                className="form-control"
                name="minutes"
                type="text"
                placeholder="min"
                required
                maxLength="3"
                value={minutes}
                onChange={e => setMinutes(e.target.value.replace(/\D/g, ''))} />
            </div>
            <button className="btn btn-success align-self-center" type="submit">Ver por quanto fica</button>
          </form>
        </div>

        {/*Dividing line*/}
        <div className="line order-6"></div>

        <div className="result col-md-4 d-flex align-items-center flex-row order-md-12 order-1">

          <div className="tarifs d-flex">
            <div className="plan">
              <p>Com FaleMais</p>
              <span>${planOn}</span>
            </div>
            <div className="plan">
              <p>Sem FaleMais</p>
              <span>${planOff}</span>
            </div>
          </div>
          <div className="lottie" title="Canela, o nosso mascote robô ^^">
            <LottieAnimation />
          </div>
        </div>
      </section>
    </div>
  )
}
