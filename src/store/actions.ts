enum ActionTypes {
    ADD_TODO
}

interface IAddToDoAction {
    type: ActionTypes.ADD_TODO,
    payload: string
}

const addTodoAction = (text: string) : IAddToDoAction => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: text
    }
}

type IActions = IAddToDoAction

export {
    ActionTypes,
    IAddToDoAction,
    IActions,
    addTodoAction
}