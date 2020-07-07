import React, { Component } from 'react'
import Search from './../components/Search'
import TaskList from './../components/TaskList';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                //id unique, name, status

            ]
        }
    }

    componentWillMount() {
        //Khi refresh lại sẽ gọi thằng này, và gọi duy nhất 1 lần sau khi load
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks,
            })
        }
    }

    _onGenerateData = () => {
        var tasks = [
            {
                id: this.generateId(),
                name: 'Learn Angular',
                status: false,

            },
            {
                id: this.generateId(),
                name: 'Learn React Js',
                status: true,
            },
            {
                id: this.generateId(),
                name: 'Learn Java',
                status: true,
            },
        ];
        console.log(tasks);
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
        //Nên chuyển thành String thay vì object
    };

    s4() {
        return Math.floor((1 * Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateId() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
    }

    render() {
        var {tasks} = this.state;//== var tasks = this.state.tasks
        return (
            <div className="row my-5">
                <div className="col-8">
                    <div className="my-3">
                        <button type="button" className="btn btn-primary">Add to do</button>

                        <button
                            type="button"
                            className="btn btn-primary mx-2"
                            onClick={
                                this._onGenerateData
                            }>Generate Data</button>
                    </div>
                    {/* Search */}
                    <Search />
                    {/* end Search */}
                    <TaskList tasks={tasks}/>
                </div>
            </div>
        )
    }
}
