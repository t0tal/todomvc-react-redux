//action creators
let nextTodoId = 0

export const addTodo = (text) => {
	return { type:'ADD_TODO', id: nextTodoId++,	text }
}

export const toggleTodo = (id) => {
	return { type: 'TOGGLE_TODO',	id }
}

export const editTodo = (id, text) => {
	return { type: 'EDIT_TODO',	id, text }
}

export const deleteTodo = (id) => {
	return { type: 'DELETE_TODO',	id }
}

export const setVisibilityFilter = (filter) => {
	return { type: 'SET_VISIBILITY_FILTER',	filter	}
}