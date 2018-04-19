import {connect} from "react-redux";
import {toggleTodo} from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
	switch(filter){
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t=>t.completed);
		case "SHOW_ACTIVE":
			return todos.filter(t=>!t.completed);
	}
}

const mapStateTodoProps = (state) => {
	return{
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchTodoProps = (dispatch) => {
	return{
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateTodoProps,
	mapDispatchTodoProps
)(TodoList)

export default VisibleTodoList