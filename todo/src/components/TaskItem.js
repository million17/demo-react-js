import React, { Component } from 'react'

export default class TaskItem extends Component {

    _onUpdateStatus = () => {
        console.log(`Thằng con đẩy lên id cho thằng cha nó `, this.props.task.id);

        this.props.onUpdateStatus(this.props.task.id);

    }

    _onDeleteTask = () => {
        console.log(`Thằng con đẩy lên id cho thằng cha nó `, this.props.task.id);

        this.props.onDeleteTask(this.props.task.id);
    }

    render() {
        var { task, index } = this.props;
        return (
            <>
                <tbody>
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
                                className="btn btn-warning mr-2">Edit</button>
                            <button
                                type="button"
                                className="btn btn-info"
                                onClick={this._onDeleteTask}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </>
        )
    }
}
