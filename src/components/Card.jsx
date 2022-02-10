import React from 'react';
import CardTemp from "./CardTemp"
import PropTypes from 'prop-types';
import estilo from '../components/Styles/card.module.css';
import {IoCloseCircleOutline} from 'react-icons/io5'
//import {IoCloseCircleOutline} from "react-icons/io5";
import icone_09d from '../assets/09d.png';
import icone_03d from '../assets/03d.png';
import icone_01d from '../assets/01d.png';
import icone_02d from '../assets/02d.png';
import icone_04d from '../assets/04d.png';
import icone_10d from '../assets/10d.png';
import icone_11d from '../assets/11d.png';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  
  function handleOnCLose() {
    if(typeof onClose === "function") onclose();
  } 


  return( 
  
    <div className={estilo.card}>
      <button className={estilo.boton} onClick={onClose}>
      <IoCloseCircleOutline />
      </button>
      
      <span className={estilo.ciudad}>{name}</span>

      <CardTemp label="Min" value={min} />
      <CardTemp label="Max" value={max} />
      <WeatherIcon icon={img} />

      {/* <img  src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt='icono de clima'/> */}
    </div>

    
    )
};

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,

};

function WeatherIcon({icon}) {
  switch (icon){
    
    case "01d": return <img src={icone_01d} alt="clear sky" />
    case "02d": return <img src={icone_02d} alt="few cloud" />
    case "03d": return <img src={icone_03d} alt="cloudi" />
    case "04d": return <img src={icone_04d} alt="broken cloud" />
    case "09d": return <img src={icone_09d} alt="shower rain" />
    case "10d": return <img src={icone_10d} alt="rain" />
    case "11d": return <img src={icone_11d} alt="thunderstorm" />
    
  default: 
  return <img src={icone_01d} alt="clear sky" />;
  }
}

