import React from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <header>
                <img src='app/img/logo.png' id='logo'/>
                <nav>
                    <li>Accueil</li>
                    <li>Stock</li>
                    <li>Contact</li>
                </nav>
            </header>
        )
    }
}