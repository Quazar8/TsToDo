enum ActionTypes {
    ADD_TODO
}

interface IAddToDoAction {
    type: ActionTypes.ADD_TODO,
    payload: string
}

type IActions = IAddToDoAction

export {
    ActionTypes,
    IAddToDoAction,
    IActions
}