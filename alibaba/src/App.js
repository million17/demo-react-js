import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">Alibaba</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <span className="nav-link">Home <span className="sr-only">(current)</span></span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Products</span>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-primary my-3">Add To Products </button>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Skud</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>123</td>
                    <td>Otto</td>
                    <td>213 $</td>
                    <td>
                      <span
                        className="btn btn-primary"
                        style={{ fontSize: 12 }}>
                        Primary
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        style={{ fontSize: 12 }}
                        className="btn btn-warning">Edit</button>
                      <button
                        type="button"
                        style={{ fontSize: 12 }}
                        className="btn btn-danger ml-2">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default App;
