import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'active' : 'enabel';
        var statusClass = product.status ? 'warning' : 'danger';
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} $</td>
                <td>
                    <span
                        className={`btn btn-${statusClass}`}
                        style={{ fontSize: 12 }}>
                        {statusName}
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
                        onClick={() => this.onDelete(product.id)}
                        className="btn btn-danger ml-2">Delete</button>
                </td>
            </tr>
        );
    }
    onDelete = (id) => {
        if (confirm('Are you delete ? ')) { // eslint-disable-line
            this.props.onDelete(id);
        }
    }
}
export default ProductItem;
