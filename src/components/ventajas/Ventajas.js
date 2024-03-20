import React from 'react'
import './ventajas.css'
import flexibilidad from '../../assets/img/ico-diseno-flexible-a.avif'
import abierto from '../../assets/img/ico-open-g.avif'
import plazo from '../../assets/img/ico-menos-tiempo-a.avif'
import limpias from '../../assets/img/ico-escoba_02-a.avif'
import agua from '../../assets/img/ico-menos-agua-a.avif'
import sustentabilidad from '../../assets/img/ico-sustentabilidad-a.avif'
import anecoicos from '../../assets/img/noise_5759812.png'


const Ventajas = () => {
  return (
    <div className='ventajas__container'>
      <h3>¿POR QUÉ CONSTRUIR EN SECO?</h3>
     
      <h5>Tenemos la capacidad para realizar obras nuevas y ampliaciones llave en mano, tanto con steel frame y hierro como con sistemas húmedos. También trabajamos como subcontratistas para diferentes especializaciones en obras de mayor envergadura.</h5>
      <div className='ventajas__card__container'>
        <div className='ventajas__card'>
<img src={abierto} alt="" />

<h4>Sistemas de construcción abierto</h4>

   
        </div>
        <div className='ventajas__card'>
<img src={plazo} alt="" />

<h4>Menor plazo de ejecución</h4>

   
        </div>
        <div className='ventajas__card'>
<img src={flexibilidad} alt="" />

<h4>Flexibilidad en el diseño</h4>

    
        </div>
        <div className='ventajas__card'>
<img src={limpias} alt="" />

<h4>Obras más limpias</h4>

    
        </div>
        <div className='ventajas__card'>
<img src={agua} alt="" />

<h4>Menor consumo de agua</h4>

    
        </div>
        <div className='ventajas__card'>
<img src={sustentabilidad} alt="" />

<h4>Mayor sustentabilidad</h4>

    
        </div>

        <div className='ventajas__card'>
<img src={anecoicos} alt="" />

<h4>Cuartos anecoicos</h4>

    
        </div>

      </div>
    </div>
  )
}

export default Ventajas
