import React, { useEffect, useRef, useState } from 'react'

const Landing = () => {
  const [ime, setIme] = useState('Milan')
  const [brojac, setBrojac] = useState(0)
  const ref = useRef('Milan')
  const clickHandler = function () {
    setIme('David')
    ref.current = 'David'
    setBrojac((item) => {
      return item + 1
    })
  }
  useEffect(() => {
    console.log('Pozvan useEffect za promenu imena')
  }, [ime])
  useEffect(() => {
    console.log('Pozvan useEffect za promenu brojaca')
  }, [brojac])
  return (
    <div className='landing-container'>
      {brojac}
      {brojac % 2 == 0 ? <h3>state {ime}</h3> : <h1>state {ime}</h1>}
      <h1>ref {ref.current}</h1>
      <p>Lending description</p>
      <button onClick={clickHandler}>Promeni ime</button>
    </div>
  )
}

export default Landing
