import React, { Component } from 'react'

import '../css/card.css'
/* import manga from '../img/manga.jpeg'; */

class Card extends Component  {
  render(){

      return (
          <>
        
          <div className='card'>
            <div className='title'>
                <h1> {this.props.nome} </h1>
            </div>
            <div className='immagine'>
              <img src={ this.props.immagine } /> 
            </div>
            <div className='price'>
                € {this.props.price}
            </div>
            <button className="btn">elimina</button>
          </div>
    
    
          
          </>
      )
    }
  }

export default Card