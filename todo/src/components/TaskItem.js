import React, { Component } from 'react'

export default class TaskItem extends Component {
    render() {
        var { task, index } = this.props;
        return (
            <>
                <tbody>
                    <tr>
                        <th scope="row">{index}</th>
                        <td>{task.txtTaskName}</td>
                        <td>
                            <button
                                style={{ fontSize: 10 }}
                                type="button"
                                className={
                                    task.sltStatus === true
                                        ? 'btn btn-success'
                                        : 'btn btn-danger'}>
                                {
                                    task.sltStatus === true
                                        ? 'Active'
                                        : 'Enable'}
                            </button></td>
                        <td>
                            <button type="button" className="btn btn-warning mr-2">Edit</button>
                            <button type="button" className="btn btn-info">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </>
        )
    }
}
