import React from 'react';

export default class BasketCards extends React.Component {

    add(){
        this.props.add(this.props.title);
    }

    less(){
        this.props.less(this.props.title);
    }

    remove(){
        this.props.removeCard(this.props.title);
    }

    render(){
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Quantité: {this.props.qte}</p>
                <button onClick={this.add.bind(this)}>+</button>
                <button onClick={this.less.bind(this)}>-</button>
                <button onClick={this.remove.bind(this)}>Supprimer</button>
            </div>
        )
    }
}