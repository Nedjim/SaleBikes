import React from 'react';
import Content from './Content/Content.jsx';
import Header from './Header/Header.jsx';

export default class Ap extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}