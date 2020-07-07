import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props);
    }

    addToCart = () => {
        alert(this.props.name);
    }

    render() {
        return (
            <div className="card" style={{ width: '10rem', textAlign: 'center', margin: 20 }}>
                <img src={this.props.image} className="card-img-top" alt={this.props.name} style={{ width: 200, }} />
                <div className="card-body">
                    <h1 className="card-title">{this.props.name}</h1>
                    <p className="card-text">{this.props.age}</p>
                    <small>{this.props.status}</small>
                </div>
                <button onClick={this.addToCart}>Add</button>
            </div>
        )
    }
}
