import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tasks:[],
            currenttask:""
        }
    }

    handleChange = (e) =>{
        // console.log(e.target.value);
        this.setState({
            currenttask:e.target.value
        })
    }

    handleTask = (e) =>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currenttask,id:this.state.tasks.length+1}],
            currenttask:""
        })
    }

    handleCDelete = (id) =>{
        let narr = this.state.tasks.filter((taskObj) =>{
            return taskObj.id != id
        })
        this.setState({
            tasks:[...narr]
        })
    }

    render(){
        return( 
            <div>
                <input type="text" placeholder="Enter your text" value={this.state.currenttask} onChange={this.handleChange}/>
                <button onClick={this.handleTask}>Add Task</button>
                <ul>
                    {this.state.tasks.map((taskObj)=>(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick={()=>this.handleCDelete(taskObj.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todo;