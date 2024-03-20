import React from 'react'
import './metodologiaLoader.css'
import  { useState, useEffect } from 'react';

const MetodologiaLoader = () => {
  const [fadeStep, setFadeStep] = useState(0);
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      if (fadeStep === 5) {
        // Reiniciar el ciclo si se alcanza el último paso
        setFadeStep(0);
      } else {
        // Avanzar al siguiente paso
        setFadeStep(prevStep => prevStep + 1);
      }
    }, 2000); // Cambia de paso cada 2 segundos

    return () => clearTimeout(fadeTimer);
  }, [fadeStep]);

  return (
   
      <div className="metodologiaLoader__container">
        <div className='pasos__container'>
        <div className={`paso ${fadeStep >= 1 ? 'fade-out' : ''}`}>
          <div className='paso__head'>
          <h4>01</h4>
            <div className='forma'></div>
            <hr/>
            </div>
            <h5>ESTUDIAMOS EL PROYECTO</h5>
        </div>
        
        <div className={`paso ${fadeStep >= 2 ? 'fade-out' : ''}`}>
          <div className='paso__head'>
          <h4>02</h4>
            <div className='forma'></div>
            <hr/>
            </div>
            <h5>ASESORAMOS Y COTIZAMOS</h5>
        </div>
        
        <div className={`paso ${fadeStep >= 3 ? 'fade-out' : ''}`}>
          <div className='paso__head'>
          <h4>03</h4>
            <div className='forma'></div>
            <hr/>
            </div>
            <h5>PACTAMOS EL INICIO</h5>
        </div>
        
        <div className={`paso ${fadeStep >= 4 ? 'fade-out' : ''}`}>
          <div className='paso__head'>
          <h4>04</h4>
            <div className='forma'></div>
            <hr/>
            </div>
            <h5>CONSTRUIMOS</h5>
        </div>
        
        <div className={`paso ${fadeStep >= 5 ? 'fade-out' : ''}`}>
          <div className='paso__head'>
          <h4>05</h4>
            <div className='forma'></div>
            <hr/>
            </div>
            <h5>OFRECEMOS GARANTIA</h5>
        </div>
        </div>
    </div>
   
  )
}

export default MetodologiaLoader
