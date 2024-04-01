import React, { useEffect, useState } from 'react'
import './home.css'
import { useContext } from 'react';
import Loading from '../Loading/Loading'

import { MenuContext } from '../../context/MenuContext';
import Servicios from '../servicios/Servicios';
import Metodologia from '../metodologia/Metodologia';
import Ventajas from '../ventajas/Ventajas';
import Footer from '../footer/Footer';

const Home = () => {
  const {toggleMenu}=useContext(MenuContext)
  
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    window.scrollTo(0,0)
    setLoading(true)
    setTimeout(() => {
      cambiarLoad();
      window.scroll({
        top:0,
        behavior: "smooth",
      });
    }, "5000");
  },[])
  const handleClick = () => {
   
  toggleMenu()  
};
  const cambiarLoad=()=>{
    setLoading(false)
  }
  return (
    <div className='home' onClick={handleClick}>
      
     


           <div className='landing__container'>
           <Loading loading={loading}/>
        <h1>Buildcraft</h1>
      <h2>Comprometidos con la excelencia en cada obra</h2>
      <a href="#contacto"><button>CONSTRUYAMOS JUNTOS</button></a>
      


      </div>
       
        

      
     
      <div id='servicios'>
      <Servicios/>
      </div>
      <div id='metodologia'>
      <Metodologia/>
      </div>
      <div id='ventajas'>
      <Ventajas/>
      </div>
      <div id='contacto'>
      <Footer/>
      </div>
      
      
      {/* <div id='nosotros' className='nosotros'>
        <h3>Nosotros</h3>
        <p>En Durlock GG, nos enorgullece presentarnos como una empresa contratista líder, especializada en construcción en seco y proyectos generales, comprometida con la responsabilidad, la calidad y el uso de personal altamente calificado. Desde nuestro inicio, nos hemos destacado por ofrecer soluciones innovadoras que transforman espacios con eficiencia y precisión.</p>
      </div> */}
      
     
    </div>
  )
}

export default Home
