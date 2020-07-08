import React, { Component } from 'react'
import Search from './../components/Search'
import TaskList from './../components/TaskList';
import TaskForm from '../components/TaskForm';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                //id unique, name, status

            ],
            isDisplayForm: false,
        }
    }

    componentWillMount() {
        //Khi refresh lại sẽ gọi thằng này, và gọi duy nhất 1 lần sau khi load
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks,
            })
        }
    }

    // _onGenerateData = () => {
    //     var tasks = [
    //         {
    //             id: this.generateId(),
    //             txtTaskName: 'Learn Angular',
    //             sltStatus: false,

    //         },
    //         {
    //             id: this.generateId(),
    //             txtTaskName: 'Learn React Js',
    //             sltStatus: true,
    //         },
    //         {
    //             id: this.generateId(),
    //             txtTaskName: 'Learn Java',
    //             sltStatus: true,
    //         },
    //     ];
    //     console.log(tasks);
    //     this.setState({
    //         tasks: tasks
    //     })
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    //     //Nên chuyển thành String thay vì object
    // };

    s4() {
        //Viết 1 hàm random key
        return Math.floor((1 * Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateId() {
        //Generate Key để k bị trùng lặp với bất kì phần tử nào
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
    }

    _onTouggleForm = () => {
        this.setState({
            //Click thì là true và ngược lại
            isDisplayForm: !this.state.isDisplayForm
        })
    }

    _onCloseForm = () => {
        this.setState({
            isDisplayForm: false,
        })
    }

    _onSubmit = (data) => {
        var { tasks } = this.state;
        data.id = this.generateId();// task
        tasks.push(data);

        this.setState({
            tasks: tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(data);

    }

    render() {
        var { tasks, isDisplayForm } = this.state;//== var tasks = this.state.tasks

        var elmTaskForm = isDisplayForm
            ? <TaskForm
                onCloseForm={this._onCloseForm}
                onSubmit={this._onSubmit} />
            : '';// Check nếu là true thì hiện TaskForm còn không thì rỗng
        return (
            <div className="row my-5">
                {elmTaskForm}
                {/* Check nếu là true thì hiện TaskForm còn không thì rỗng */}
                <div className={isDisplayForm ? 'col-8' : 'col-12'}>
                    <div className="my-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this._onTouggleForm}
                        >
                            Add to do
                            </button>

                        {/* <button
                            type="button"
                            className="btn btn-primary mx-2"
                            onClick={
                                this._onGenerateData
                            }>Generate Data</button> */}
                    </div>
                    {/* Search */}
                    <Search />
                    {/* end Search */}
                    <TaskList tasks={tasks} />
                </div>
            </div>
        )
    }
}
