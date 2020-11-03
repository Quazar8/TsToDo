enum ActionTypes {
    ADD_TODO,
    DELETE_TODO
}

interface IAddToDoAction {
    type: ActionTypes.ADD_TODO,
    todo: string
}

interface IDeleteToDoAction {
    type: ActionTypes.DELETE_TODO,
    index: number
}

const addTodoAction = (text: string) : IAddToDoAction => {
    return {
        type: ActionTypes.ADD_TODO,
        todo: text
    }
}

const deleteToDoAction = (index: number): IDeleteToDoAction => {
    return {
        type: ActionTypes.DELETE_TODO,
        index
    }
}

type IActions = IAddToDoAction | IDeleteToDoAction

export {
    ActionTypes,
    IActions,
    addTodoAction,
    deleteToDoAction
}