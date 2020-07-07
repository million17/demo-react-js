import React, { Component } from 'react'

export default class TaskItem extends Component {
    render() {
        var { task, index } = this.props;
        return (
            <>
                <tbody>
                    <tr>
                        <th scope="row">{index}</th>
                        <td>{task.name}</td>
                        <td>
                            <button
                                style={{ fontSize: 10 }}
                                type="button"
                                className={
                                    task.status === true
                                        ? 'btn btn-success'
                                        : 'btn btn-danger'}>
                                {
                                    task.status === true
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
