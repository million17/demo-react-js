import React, { Component } from 'react'
import TaskList from './../components/TaskList';
import TaskForm from '../components/TaskForm';
import Controll from '../components/Controll';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/index';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                name: '',
                status: -1
            },
            keyWord: '',
            sortBy: 'name',
            sortValue: 1
        }
    }



    _onTouggleForm = () => { // Add task
        this.props.onToggleForm()
    }

    _onShowForm = () => {
        this.setState({
            isDisplayForm: true,
        })
    }



    _onDeleteTask = (id) => {
        var { tasks } = this.state;
        console.log(`Log id từ thằng cha gọi xuống thằng con `, id)
        var index = this.findIndex(id);
        console.log(`Index`, index);
        if (index !== -1) {
            tasks.splice(index, 1);//Xóa đi phần tử khi tìm thấy bằng splice
            this.setState({
                tasks: tasks
            });
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this._onCloseForm();
    }

    _onUpdate = (id) => {
        var { tasks } = this.state;
        console.log(`Update `, id)
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        console.log(`Task Editing `, taskEditing);
        this.setState({
            taskEditing: taskEditing,

        });
        this._onShowForm();

    }

    _onFilter = (filterName, filterStatus) => {
        console.log(`filter`, filterName + ' - ' + filterStatus);
        filterStatus = parseInt(filterStatus);
        this.setState({
            filter: {
                txtTaskName: filterName.toLowerCase(),
                sltStatus: filterStatus
            }
        });
    }

    _onSearch = (keyWord) => {
        console.log(keyWord);
        this.setState({
            keyWord: keyWord
        })
    }

    _onSort = (sortBy, sortValue) => {

        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
        console.log(`Sort : `, this.state);
    }

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {

            if (task.id === id) {
                // console.log(index);  
                result = index;
            }
        });
        return result;

    }

    render() {
        var { isDisplayForm } = this.props;
        var {
            sortBy,
            sortValue } = this.state;//== var tasks = this.state.tasks
        // if (filter) {
        //     if (filter.txtTaskName) {
        //         tasks = tasks.filter((task) => {
        //             return task.txtTaskName.toLowerCase().indexOf(filter.txtTaskName) !== -1;
        //         });
        //     }
        //     tasks = tasks.filter((task) => {
        //         if (filter.sltStatus === -1) {
        //             return task;
        //         } else {
        //             return task.sltStatus === (filter.sltStatus === 1 ? true : false);
        //         }
        //     })
        // }
        // if (keyWord) {
        //     tasks = tasks.filter((task) => {

        //         return task.txtTaskName.toLowerCase().indexOf(keyWord) !== -1;

        //     })
        //     tasks = _.filter(tasks, (task) => {
        //         return task.txtTaskName.toLowerCase().indexOf(keyWord) !== -1;
        //     })
        // }
        // if (sortBy === 'name') {
        //     tasks.sort((a, b) => {
        //         if (a.txtTaskName > b.txtTaskName) return sortValue;
        //         else if (a.txtTaskName < b.txtTaskName) return -sortValue;
        //         else return 0;
        //     })
        // } else {
        //     tasks.sort((a, b) => {
        //         if (a.sltStatus > b.sltStatus) return -sortValue;
        //         else if (a.sltStatus < b.sltStatus) return sortValue;
        //         else return 0;
        //     })
        // }

        return (
            <div className="row my-5">
                <TaskForm />
                <div className={isDisplayForm ? 'col-8' : 'col-12'}>
                    <div className="my-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this._onTouggleForm}
                        >
                            Add to do
                            </button>
                    </div>
                    {/* Search And Sort */}
                    <Controll
                        onSort={this._onSort}
                        onSearch={this._onSearch}
                        sortBy={sortBy}
                        sortValue={sortValue} />
                    {/* end Search */}
                    <TaskList
                        onUpdate={this._onUpdate}
                        onFilter={this._onFilter} />
                </div>
            </div>
        )
    }
}

// Kết nốt từ react sang redux
const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm,// gọi sang thằng index của reducers
    };
}
// Thực thi hành động
const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm())
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);