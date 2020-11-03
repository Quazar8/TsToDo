import { createStore } from 'redux'
import { ActionTypes, IActions } from './actions'
import { deleteFromArr } from './utils'

interface IState {
    todos: string[]
}

const defaultState : IState = {
    todos:[]
}

const addToDoState = (state: IState, 
    todo: string): IState => {
    let todos = state.todos.slice()
    todos.push(todo)

    return Object.assign({}, state, {todos})
}

const deleteToDoState = 
    (state: IState, index: number): IState => {
    let newTodos = state.todos.slice()
    newTodos = deleteFromArr(newTodos, index)

    return Object.assign({}, state, {todos: newTodos})
}

const deleteAllState = (state: IState) => {
    return Object.assign({}, state, { todos:[] })
}

const todosReducer = (state: IState = defaultState, 
    action: IActions): IState  => {
    switch(action.type) {
        case ActionTypes.ADD_TODO: 
            return addToDoState(state, action.todo)
        case ActionTypes.DELETE_TODO:
            return deleteToDoState(state, action.index)
        case ActionTypes.DELETE_ALL:
            return deleteAllState(state)
        default: 
            return state
    }
}

const store = createStore(todosReducer)
store.subscribe(() => {
    console.log("from store", store.getState())
})
export {
    store,
    IState
}