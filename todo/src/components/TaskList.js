import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //ALL , active = 1, enable = 0
        }
    }

    _onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;

        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )

        this.setState({
            //Key : value
            [name]: value
        });
    }

    render() {
        var { tasks } = this.props;// var tasks = this.props.tasks

        var { filterName, filterStatus } = this.state;
        var elements = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index + 1}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus}
                onDeleteTask={this.props.onDeleteTask}
                onUpdate={this.props.onUpdate}
            />
        })

        return (
            <div>
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task Name</th>
                            <th scope="col">STT</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td></td>
                        <td>
                            <input
                                type="email"
                                className="form-control"
                                name="filterName"
                                value={filterName}
                                onChange={this._onChange} />
                        </td>
                        <td><select
                            className="form-control"
                            name="filterStatus"
                            value={filterStatus}
                            onChange={this._onChange}>
                            <option value={-1}>All</option>
                            <option value={1}>Active</option>
                            <option value={0}>Enable</option>
                        </select></td>
                        <td></td>
                        {elements}
                    </tbody>

                </table>
            </div>
        )
    }
}
