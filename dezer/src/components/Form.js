import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtName: '',
            txtPassword: '',
            txtDesc: '',
            sltGender: 1
        }
        this._onHandleChangeInput = this._onHandleChangeInput.bind(this);
        this._onHandleChangeSubmit = this._onHandleChangeSubmit.bind(this);
    }

    _onHandleChangeInput(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    _onHandleChangeSubmit(event) {
        event.preventDefault();
        //Chặn submit

        console.log(this.state)
    }
    render() {
        return (
            <div style={{ margin: 100 }}>
                <form onSubmit={this._onHandleChangeSubmit}>
                    <input
                        placeholder="input .."
                        name="txtName"
                        type="text"
                        value={this.state.txtName}
                        onChange={this._onHandleChangeInput}
                    />

                    <input
                        placeholder="input .."
                        name="txtPassword"
                        type="password"
                        value={this.state.txtPassword}
                        onChange={this._onHandleChangeInput}
                    />

                    <textarea
                        placeholder="input .."
                        name="txtDesc"
                        onChange={this._onHandleChangeInput}
                    > </textarea>

                    <select
                        name="sltGender"
                        value={this.state.sltGender}
                        onChange={this._onHandleChangeInput}>
                        <option
                            value={0}
                            selected={this.state === 0}
                        >Female</option>
                        <option
                            value={1}
                            selected={this.state === 1}
                        >Male</option>
                    </select>

                    <button type="submit">Save</button>
                    <button type="reset">Delete</button>
                </form>
            </div>
        )
    }
}
