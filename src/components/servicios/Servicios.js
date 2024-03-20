import React from 'react'
import drywall from '../../assets/img/icono-drywall-cv2.avif'
import proyectables from '../../assets/img/icono-terminacion-c.avif'
import liviana from '../../assets/img/icono-herreria-c.avif'
import steel from '../../assets/img/icono-steel-c.avif'
import pesada from '../../assets/img/icono-estructuras-c.avif'
import llave from '../../assets/img/icono-llave-c.avif'
import './servicios.css'


const Servicios = () => {
  return (
    <div id="servicios" className='servicios__container'>
      <h3>NUESTROS SERVICIOS</h3>
      <h5>Tenemos la capacidad para realizar obras nuevas y ampliaciones llave en mano, tanto con steel frame y hierro como con sistemas húmedos. También trabajamos como subcontratistas para diferentes especializaciones en obras de mayor envergadura.</h5>
      <div className='servicios__card__container'>
        <div className='servicios__card'>
<img src={drywall} alt="" />
<div className='servicios__card__text__container'>
<h4>Drywall</h4>
<p>Cielorrasos y tabiquería para obras de gran envergadura</p>
    </div>
        </div>
        <div className='servicios__card'>
<img src={liviana} alt="" />
<div className='servicios__card__text__container'>
<h4>Herrería liviana</h4>
<p>Barandas y carpinterías</p>
    </div>
        </div>
        <div className='servicios__card'>
<img src={proyectables} alt="" />
<div className='servicios__card__text__container'>
<h4>Proyectables</h4>
<p>Yeso y revoques</p>
    </div>
        </div>
        <div className='servicios__card'>
<img src={steel} alt="" />
<div className='servicios__card__text__container'>
<h4>Steel framing</h4>
<p>Obra nueva y ampliaciones</p>
    </div>
        </div>
        <div className='servicios__card'>
<img src={pesada} alt="" />
<div className='servicios__card__text__container'>
<h4>Herrería pesada</h4>
<p>Estructuras y cerramientos</p>
    </div>
        </div>
        <div className='servicios__card'>
<img src={llave} alt="" />
<div className='servicios__card__text__container'>
<h4>Llave en mano</h4>
<p>Obras integrales unificando todos los gremios de la obra</p>
    </div>
        </div>

      </div>
    </div>
  )
}

export default Servicios
