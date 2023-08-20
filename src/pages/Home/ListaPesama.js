import React, { useState } from 'react'
import Pesma from './Pesma'
const ListaPesama = () => {
  const [pesme, setPesme] = useState([
    { ime: 'Pesma1', izvodjac: 'Izvodjac1' },
    { ime: 'Pesma2', izvodjac: 'Izvodjac2' },
    { ime: 'Pesma3', izvodjac: 'Izvodjac3' },
  ])

  return (
    <div className='lista-pesama-container'>
      {pesme.map((item, index) => {
        return (
          <Pesma
            ime={item.ime}
            izvodjac={item.izvodjac}
            redniBroj={index + 1}
          ></Pesma>
        )
      })}
    </div>
  )
}

export default ListaPesama
