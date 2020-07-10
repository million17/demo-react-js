import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class TaskItem extends Component {

    _onUpdateStatus = () => {

        this.props.onUpdateStatus(this.props.task.id);

    }

    _onDeleteTask = () => {
        console.log(`Thằng con đẩy lên id cho thằng cha nó `, this.props.task.id);

        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    // _onUpdate = () => {
    //     console.log(`Thằng con đẩy lên id cho thằng cha nó `, this.props.task.id);

    //     this.props.onUpdateStatus(id);
    // }

    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{task.txtTaskName}</td>
                <td>
                    <span
                        style={{ fontSize: 10 }}
                        type="button"
                        onClick={this._onUpdateStatus}
                        className={
                            task.sltStatus === true
                                ? 'btn btn-success'
                                : 'btn btn-danger'}>
                        {
                            task.sltStatus === true
                                ? 'Active'
                                : 'Enable'}
                    </span></td>
                <td>
                    <button
                        type="button"
                        className="btn btn-warning mr-2"
                        onClick={this._onUpdate}>Edit</button>
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={this._onDeleteTask}>Delete</button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);