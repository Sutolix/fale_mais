import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import { prices, plans } from './services/tarifs.js'
import Calculator from './services/rules.js'
import { LottieAnimation } from './components/LottieAnimation'
import './global.css'

export default function App () {
  // States
  const [plan, setPlan] = useState('30')
  const [call, setCall] = useState('11-16')
  const [minutes, setMinutes] = useState('')
  const [planOn, setPlanOn] = useState('0')
  const [planOff, setPlanOff] = useState('0')

  // Alert
  const alert = useAlert()

  // Process and send the data
  function handleCalc (e) {
    e.preventDefault()
    const result = Calculator({ call, minutes, plan })
    updateData(result)
  }

  // Show update
  function updateData (result) {
    if (result.alert) {
      setMinutes('')
      alert.error('Por favor, digite um valor válido!')
    }
    setPlanOn(result.on)
    setPlanOff(result.off)
  }

  return (
    <div className='container d-flex flex-column'>

      <div className='head'>
        <span><a href='/'>FaleMais</a></span>
        <span>Telzir</span>
      </div>

      <section className='calc row justify-content-around align-items-center'>
        <div className='form col-md-4 order-md-1 order-12'>
          <form id='plansform' onSubmit={handleCalc}>
            <div className='form-group'>
              <label>Escolha um Plano</label>
              <select
                className='form-control'
                name='plan'
                required
                value={plan}
                onChange={e => setPlan(e.target.value)}
              >
                {plans.map(plan => (
                  <option key={plan.value} value={plan.value}>{plan.title}</option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label>Selecione os ddds da ligação</label>
              <select
                className='form-control'
                name='call'
                required
                value={call}
                onChange={e => setCall(e.target.value)}
              >
                {prices.map(route => (
                  <option key={route.call} value={route.call}>{route.title}</option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='minutes'>Duração da chamada</label>
              <input
                className='form-control'
                name='minutes'
                type='text'
                placeholder='min'
                required
                maxLength='3'
                value={minutes}
                onChange={e => setMinutes(e.target.value.replace(/\D/g, ''))}
              />
            </div>
            <button className='btn btn-success align-self-center' type='submit'>Ver por quanto fica</button>
          </form>
        </div>

        {/* Dividing line */}
        <div className='line order-6' />

        <div className='result col-md-4 d-flex align-items-center flex-row order-md-12 order-1'>

          <div className='tarifs d-flex'>
            <div className='plan'>
              <p>Com FaleMais</p>
              <span>${planOn}</span>
            </div>
            <div className='plan'>
              <p>Sem FaleMais</p>
              <span>${planOff}</span>
            </div>
          </div>
          <div className='lottie' title='Canela, o nosso mascote robô ^^'>
            <LottieAnimation />
          </div>
        </div>
      </section>
    </div>
  )
}
