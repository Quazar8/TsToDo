import React, { Dispatch } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IState } from '../store/store'
import { deleteAllAction, deleteToDoAction, IActions } from '../store/actions'

import ToDosDisplay from './ToDosDisplay'

const mapStateToProps = 
    (state: IState) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = 
            (dispatch: Dispatch<IActions>) => {
    return {
        deleteTodo: (index: number) => {
            dispatch(deleteToDoAction(index))
        },
        deleteAll: () => {
            dispatch(deleteAllAction())
        }
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const ToDosContainerView = 
    ({ todos, deleteTodo, deleteAll }: Props): JSX.Element => {

    return (
        <section className="todos-container">
            {todos.length > 0
             ? <ToDosDisplay 
                    todos = { todos }
                    deleteTodo = { deleteTodo }
                    deleteAll = { deleteAll }
                />
             : <h3>No todos yet.</h3>
            }
        </section>
    )
}

const ToDosContainer = connector(ToDosContainerView)

export default ToDosContainer