import React, { Component } from 'react'
import Card from './Card'
import '../css/main.css'

import manga from '../img/manga.jpeg';
import manga2 from '../img/manga2.png';

class Main extends Component {
  state = {
    cards: [
      {
        id: 0,
        nome: 'tey manga',
        immagine: manga,
        price: 30,
      },
      {
        id: 1,
        nome: 'chanel manga',
        immagine: manga2,
        price: 45,
      },
      
    ]
    
  }
  render(){
      return (
        <>
            <div className="container">
                <div className='card-ac'>
                {this.state.cards.map( card => (
                   <Card 
                    key={card.id}
                    immagine={card.immagine}
                    nome={card.nome}
                    price={card.price}
                    />
              
                 ))} 
              
                </div>
                
               
            </div>
    
        </>
      )
    }
  }

export default Main