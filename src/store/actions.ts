enum ActionTypes {
    ADD_TODO
}

interface IAddToDoAction {
    type: ActionTypes.ADD_TODO,
    payload: string
}

type IActions = IAddToDoAction

const addTodoAction = (text: string) : IAddToDoAction => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: text
    }
}

export {
    ActionTypes,
    IAddToDoAction,
    IActions,
    addTodoAction
}