import React from 'react';

export default class CreateCards extends React.Component {
    
    constructor(){
        super();
        this.state = {}
    }

    componentWillMount(){
        this.setState({ 
            title: this.props.title,
            price: this.props.price
        });
    }

    add(){
        this.props.addCart(this.state.title);
    }

    render(){
        return (
            <div className='card'>
                <h3>{this.state.title}</h3>
                <img src={this.props.img} />
                <p>{this.state.price} euros</p>
                
                <button onClick={this.add.bind(this)}>Ajouter au panier</button>
            </div>
        )
    }
}