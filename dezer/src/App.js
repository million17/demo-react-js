import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cap from './image/caption.jpg';
import tony from './image/tony-stack.jpeg';
import Product from './components/Product';
import Form from './components/Form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Tony',
          image: tony,
          age: 44,
        },
        {
          id: 2,
          name: 'Caption',
          image: cap,
          age: 75,
        },
      ],
      isActive: true,
    }
  }

  onSetState = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {

    let elements = this.state.products.map((product, index) => {
      return <tr key={product.id} >
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.age}</td>
        <td>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: 130, height: 'auto' }} />
        </td>
      </tr>
    })

    return (
      <div>
        <table>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th>Image</th>
          </tr>
          {elements}

        </table>
        <button type="button" onClick={this.onSetState}>
          Active
          {this.state.isActive === true ? ' Active' : ' Enable'}
        </button>
        <Form />
      </div>

    )
  }
}

