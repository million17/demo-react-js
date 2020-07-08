import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ''
        }
    }

    _onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    _onSearch = () => {
        this.props.onSearch(this.state.keyWord)
    }

    render() {
        var { keyWord } = this.state;
        return (
            <div className="my-3">
                <div className="form-inline my-4 my-lg-0">
                    <input
                        name="keyWord"
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        value={keyWord}
                        onChange={this._onChange} />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={this._onSearch}>Search</button>
                </div>
            </div>
        )
    }
}
