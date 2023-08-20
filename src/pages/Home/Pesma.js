import React from 'react'

const Pesma = (props) => {
  const { redniBroj, ime, izvodjac } = props
  return (
    <div>{`Redni broj: ${redniBroj}-----Naziv pesme:${ime}; Izvodjac:${izvodjac}`}</div>
  )
}

export default Pesma
