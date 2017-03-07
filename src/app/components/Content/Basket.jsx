import React from 'react';
import BasketCards from './BasketCards.jsx';

export default class Basket extends React.Component {

    add(card){
        this.props.addCart(card);
    }

    removeCard(card){
        this.props.remove(card);
    }
    
    render(){
        return (
            <div>
                {
                    this.props.basket.map((card, index) => {
                        return (
                            <BasketCards key={index} 
                                         title={card.title} 
                                         qte={card.qte}
                                         removeCard={this.removeCard.bind(this)}
                                         add={this.add.bind(this)}/>
                        )
                    })
                }
            </div>
        )
    }
}