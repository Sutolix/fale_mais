import React, {useState} from 'react';
import { useAlert } from 'react-alert';
import './global.css';

export default function App() {
  const [plan, setPlan] = useState('30');
  const [call, setCall] = useState('11-16');
  const [minutes, setMinutes] = useState('');
  const [planOn, setPlanOn] = useState('0');
  const [planOff, setPlanOff] = useState('0');

  const alert = useAlert();

  const prices =[
    {
      call:"11-16",
      price:"1.9"
    },
    {
      call:"11-17",
      price:"1.7"
    },
    {
      call:"11-18",
      price:"0.9"
    },
    {
      call:"16-11",
      price:"2.9"
    },
    {
      call:"17-11",
      price:"2.7"
    },
    {
      call:"18-11",
      price:"1.9"
    }
  ]

  function handleCalc(e){
    e.preventDefault();

    let find = (prices.filter(item => item.call === call ))[0];
    let price = find.price;
    let fmprice = ((parseFloat(price)* 0.1) + parseFloat(price));
    let validminutes = `${minutes}`.length;
    let surplus = (minutes - plan);

    if ((minutes <= 0) || (validminutes >= 5)){
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
        <span>FaleMais</span>
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
                onChange={e => setPlan(e.target.value)}
              >
                <option value="30">FaleMais 30</option>
                <option value="60">FaleMais 60</option>
                <option value="120">FaleMais 120</option>
              </select>
            </div>
            <div className="form-group">
              <label>Selecione os ddds da ligação</label>
              <select
                className="form-control"
                name="call"
                required
                value={call}
                onChange={e => setCall(e.target.value)}
              >
                <option value="11-16">011 para 016</option>
                <option value="11-17">011 para 017</option>
                <option value="11-18">011 para 018</option>
                <option value="16-11">016 para 011</option>
                <option value="17-11">017 para 011</option>
                <option value="18-11">018 para 011</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="minutes">Duração da chamada</label>
              <input
                className="form-control"
                name="minutes"
                type="number"
                min="1"
                placeholder="min"
                required
                value={minutes}
                onChange={e => setMinutes(e.target.value)}/>
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
      </section>
    </div>
  )
}
