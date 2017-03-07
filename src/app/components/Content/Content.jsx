import React from 'react';
import data from '../../data/data.js';
import CreateCards from './CreateCards.jsx';
import Basket from './Basket.jsx';

export default class Content extends React.Component {

    constructor(){
        super();
        this.state = {
            cards: []
        }
    }

    remove(card){
        let array = this.state.cards;

        array.map((element, index, arr) => {
            if(element.title == card){
                arr.splice(index, 1);
                 this.setState({
                        cards: arr
                    });
            }
        })
    }

    addCart(title){
        let array = this.state.cards;
        let obj = {title: title, qte: 1};
        let status = false;

        if(array.length == 0){
            array.push(obj);
            this.setState({cards: array});
        }
        else {
            array.map((element, index, arr) => {
                if(element.title == obj.title){
                    arr[index].qte = arr[index].qte + 1;
                    this.setState({
                        cards: arr
                    });
                    status = true;
                }
             });
             if(status == false){
                array.push(obj);
                this.setState({cards: array});
             }
        }
    }

    render(){
        return (
            <div>
                <Basket basket={this.state.cards}
                        remove={this.remove.bind(this)}
                        addCart={this.addCart.bind(this)}/>
                {
                    data.map((bike, index)=>{
                        return (
                            <CreateCards key={index} 
                                         title={bike.title} 
                                         img={bike.img} 
                                         price={bike.price} 
                                         addCart={this.addCart.bind(this)} />
                        )
                    })
                }
            </div>
        )
    }
}