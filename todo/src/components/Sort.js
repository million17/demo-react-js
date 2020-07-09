import React, { Component } from 'react'
// or less ideally
import { Dropdown } from 'react-bootstrap';
export default class Sort extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps`, nextProps);
    }

    _onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);// Đẩy ra thằng Controll

    }

    render() {

        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        className={(this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'hic' : ''}
                        onClick={() =>
                            this._onClick('name', 1)
                        }>
                        Sort A - Z
                            </Dropdown.Item>
                    <Dropdown.Item
                        className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'hic' : ''}
                        onClick={() =>
                            this._onClick('name', -1)
                        }>Sort Z - A</Dropdown.Item>
                    <Dropdown.Item
                        className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'hic' : ''}
                        onClick={() =>
                            this._onClick('status', 1)
                        }>Sort Active</Dropdown.Item>
                    <Dropdown.Item
                        className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'hic' : ''}
                        onClick={() =>
                            this._onClick('status', -1)
                        }>Sort Enable</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
