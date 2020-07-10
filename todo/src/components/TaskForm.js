import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../src/actions/index';
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //Khi refresh lại sẽ gọi thằng này, và gọi duy nhất 1 lần sau khi load
    componentWillMount() {
        if (this.props.itemEditing && this.props.itemEditing.id !== null) {
            this.setState({
                id: this.props.itemEditing.id,
                txtTaskName: this.props.itemEditing.txtTaskName,
                sltStatus: this.props.itemEditing.sltStatus,
            });
        } else {
            this._onClear();
        }
    }

    //Sau khi refresh click lại sẽ gọi thằng này !!!
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                txtTaskName: nextProps.itemEditing.txtTaskName,
                sltStatus: nextProps.itemEditing.sltStatus,
            });
        } else {
            this._onClear();
        }

    }

    _onCloseForm = () => {
        this.props.onCloseForm();
    }

    _onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'sltStatus') {
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        });
    }

    _onSubmit = (e) => {
        //Chặn load trang khi submit
        e.preventDefault();

        this.props.onAddTask(this.state);

        //Cancel & Close
        this._onCloseForm();
        this._onClear();

    }

    _onClear = () => {
        this.setState({
            id: '',
            txtTaskName: '',
            sltStatus: false,
        });
    }

    render() {
        if (!this.props.isDisplayForm) return '';
        return (
            <div className="col-4">
                <div>{!this.state.id ? 'Update' : 'Add new task'}</div>
                <span
                    onClick={this._onCloseForm}
                >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z" />
                    </svg>
                </span>
                <form onSubmit={this._onSubmit}>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input
                            name="txtTaskName"
                            type="text"
                            value={this.state.txtTaskName}
                            onChange={this._onChange}
                            className="form-control" />

                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select
                            className="form-control"
                            value={this.state.sltStatus}
                            onChange={this._onChange}
                            name="sltStatus">
                            <option value={true}>Active</option>
                            <option value={false}>Enable</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mr-2">
                        Submit
                        </button>
                    <button
                        type="reset"
                        className="btn btn-primary"
                        onClick={this._onClear}>Cancel</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);