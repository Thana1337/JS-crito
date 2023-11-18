import React from 'react'
import paperz from '../assets/img/Paperz.svg';
import dorfus from '../assets/img/Dorfus.svg';
import martino from '../assets/img/Martino.svg';
import squeare from '../assets/img/Square.svg';
import gobona from '../assets/img/Gobona.svg';

const Logos = () => {
  return (
    <div className="company">
    <div className="container">
        <img className="paperz" src={paperz} alt="Paperz logo"/>
        <img src={dorfus} alt="Dorfus logo"/>
        <img src={martino} alt="Martino logo"/>
        <img src={squeare} alt="Square logo"/>
        <img className="gobona" src={gobona} alt="Gobona logo"/>
    </div>
</div>
  )
}

export default Logos