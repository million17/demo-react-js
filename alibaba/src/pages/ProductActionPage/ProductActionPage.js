import React, { Component } from 'react';

class ProductActionPage extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Status</label>
        </div>
        <button type="submit" className="btn btn-primary">Still</button>
      </form>
    );
  }
}
export default ProductActionPage