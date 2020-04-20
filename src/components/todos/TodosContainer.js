import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodoContainer extends React.Component{

    renderTodo = () => {
       return this.props.todos.map((todo, id) => {
            return <Todo key={id} text={todo}/>})
    }

    render(){
        return (
            <div>
            {this.renderTodo()}
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todos: state.todos
    }
}
export default connect(mapStateToProps)(TodoContainer)