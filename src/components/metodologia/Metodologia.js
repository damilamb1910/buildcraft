import React from 'react'
import MetodologiaLoader from '../metodologiaLoader/MetodologiaLoader'
import './metodologia.css'

const Metodologia = () => {
  return (
    <div className='metodologia__container'>
      <h3>METODOLOGÍA</h3>
      <h5>Nuestro proceso de gestión de proyectos de construcción comienza con la planificación detallada, donde se establecen metas, plazos y asignación de recursos. Luego, se organiza la estructura del proyecto, asignando responsabilidades para una comunicación fluida. Durante la ejecución, se sigue el plan con supervisión constante para garantizar calidad
y cumplimiento de estándares. Se implementan medidas de seguridad y control de calidad. El seguimiento regular evalúa el progreso y se realizan ajustes según sea necesario. Finalmente, tras completar la obra, se llevan a cabo procedimientos finales y se entrega el proyecto al cliente, cerrando el ciclo de gestión del proyecto.</h5>
<MetodologiaLoader/>
    </div>
  )
}

export default Metodologia
