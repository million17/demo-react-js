import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
    render() {
        var { tasks } = this.props;// var tasks = this.props.tasks

        var elements = tasks.map((task, index) => {
            return <TaskItem 
                key={task.id}
                index={index + 1}
                task={task}
                onUpdateStatus= {this.props.onUpdateStatus}
                onDeleteTask = {this.props.onDeleteTask}
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
                    {elements}
                </table>
            </div>
        )
    }
}
