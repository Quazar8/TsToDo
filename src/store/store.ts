import { createStore } from 'redux'
import { ActionTypes, IActions } from './actions'

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

const todosReducer = (state: IState = defaultState, 
    action: IActions): IState  => {
    switch(action.type) {
        case ActionTypes.ADD_TODO: 
            return addToDoState(state, action.payload)
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