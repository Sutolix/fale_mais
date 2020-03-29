import React, {useState} from 'react';
import { useAlert } from 'react-alert';
import './global.css';

export default function App() {
  const [plan, setPlan] = useState('30');
  const [call, setCall] = useState('11-16');
  const [minutes, setMinutes] = useState('');
  const [planOn, setPlanOn] = useState('0');
  const [planOff, setPlanOff] = useState('0');

  const prices =[
    {
      title: "011 para 016",
      call:"11-16",
      price:"1.9"
    },
    {
      title: "011 para 017",
      call:"11-17",
      price:"1.7"
    },
    {
      title: "011 para 018",
      call:"11-18",
      price:"0.9"
    },
    {
      title: "016 para 011",
      call:"16-11",
      price:"2.9"
    },
    {
      title: "017 para 011",
      call:"17-11",
      price:"2.7"
    },
    {
      title: "018 para 011",
      call:"18-11",
      price:"1.9"
    }
  ]

  const plans = [
    {
      title: "FaleMais 30",
      value: "30"
    },
    {
      title: "FaleMais 60",
      value: "60"
    },
    {
      title: "FaleMais 120",
      value: "120"
    }
  ]

  const alert = useAlert();

  function handleCalc(e){
    e.preventDefault();

    let find = (prices.filter(item => item.call === call ))[0];
    let price = find.price;
    let fmprice = ((parseFloat(price)* 0.1) + parseFloat(price));
    let validminutes = `${minutes}`.length;
    let surplus = (minutes - plan);

    if ((minutes <= 0) || (validminutes >= 4) || (isNaN(minutes))){
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

  function validate(e){
     setMinutes(e.target.value.replace(/\D/g, ''));

    try {
        if (e.charCode) {
            var charCode = e.charCode;
            
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
        ){
            setMinutes('')
        } else {
            return true;
        }
    } catch (err) {
        console.log(err.Description);
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
                onKeyPress={validate}
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
