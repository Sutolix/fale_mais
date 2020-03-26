import React, { useState } from 'react';
import './App.css';

function App() {

  const [plan, setPlan] = useState('');
  const [origin, setOrigin] = useState('');
  const [destiny, setDestiny] = useState('');
  const [minutes, setMinutes] = useState('');
  const [planOn, setPlanOn] = useState('0');
  const [planOff, setPlanOff] = useState('0');

  return (
    <div className="container d-flex justify-content-center">
      <div className="calc row justify-content-around">
        <div className="form col-md-4">


          <form id="plansform" method="post" onSubmit="getData()">
            <div className="form-group">
              <label for="exampleFormControlSelect1">Escolha um Plano</label>
              <select className="form-control" id="plan" required>
                <option value="FaleMais30">FaleMais 30</option>
                <option value="FaleMais60">FaleMais 60</option>
                <option value="FaleMais120">FaleMais 120</option>
              </select>
            </div>

            <div className="form-group">
              <label for="exampleFormControlSelect1">Selecione o DDD de origem</label>
              <select className="form-control" id="first-ddd" required>
                <option value=""></option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
              </select>
            </div>

            <div className="form-group">
              <label for="exampleFormControlSelect1">Selecione o DDD de destino</label>
              <select className="form-control" id="second-ddd" required>
                <option value=""></option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
              </select>
            </div>

            <div className="form-group">
              <label>Digite a duração da ligação</label>
              <input className="form-control" id="minutes" type="number" min="1" placeholder="minutos" required />
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
  );
}

export default App;
