import { createStore } from 'redux'

const defaultState = {
    todos:[]
}

const addToDoState = (state, todo) => {
    let todos = state.todos.slice()
    todos.push(todo)

    return Object.assign(state, {todos})
}

const todosReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            return addToDoState(state, action.payload)
        default: 
            return state
    }
}

export default createStore(todosReducer)