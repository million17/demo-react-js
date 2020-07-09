import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'


export default class Controll extends Component {
    render() {
        return (
            <div>
                <Search onSearch={this.props.onSearch} />
                <Sort 
                sortBy={this.props.sortBy}
                sortValue={this.props.sortValue}
                onSort={this.props.onSort} />
            </div>
        )
    }
}
