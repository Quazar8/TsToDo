enum ActionTypes {
    ADD_TODO,
    DELETE_TODO,
    DELETE_ALL
}

interface IAddToDoAction {
    type: ActionTypes.ADD_TODO,
    todo: string
}

interface IDeleteToDoAction {
    type: ActionTypes.DELETE_TODO,
    index: number
}

interface IDeleteAllAction {
    type: ActionTypes.DELETE_ALL
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

const deleteAllAction = (): IDeleteAllAction => (
    { type: ActionTypes.DELETE_ALL }
)
                                

type IActions = IAddToDoAction | IDeleteToDoAction 
                | IDeleteAllAction

export {
    ActionTypes,
    IActions,
    addTodoAction,
    deleteToDoAction,
    deleteAllAction
}