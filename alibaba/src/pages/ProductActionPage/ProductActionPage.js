import React, { Component } from 'react';
import callApi from '../../utils/apiCall'
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      status: '',
    }
  }
  render() {
    var { name, price, status } = this.state;
    return (
      <form onSubmit={this.onSave}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={this.onChange}
            value={name} />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            onChange={this.onChange}
            value={price} />
        </div>
        <div className="form-group form-check">
          <input type="checkbox"
            className="form-check-input"
            name="status"
            onChange={this.onChange}
            value={status} />
          <label className="form-check-label">Status</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/product-list" className="btn btn-danger ml-2" >Go Back </Link>
      </form>
    );
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault();
    var { name, price, status } = this.state;
    var { history } = this.props;
    callApi('/api/get/product', 'POST', {
      name: name,
      price: price,
      status: status
    }).then(res => {
      console.log(`created :`, res);
      history.goBack();
    })
  }
}
export default ProductActionPage