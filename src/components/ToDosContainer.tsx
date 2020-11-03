import React, { Dispatch } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IState } from '../store/store'
import { deleteAllAction, deleteToDoAction, IActions } from '../store/actions'

import ToDoRow from './ToDoRow'
import DeleteAllContainer from './DeleteAllContainer'

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

    const renderTodos = (todo: string, i: number): JSX.Element => {
        return (
            <ToDoRow 
                todo={todo}
                index={i}
                deleteTodo={deleteTodo} 
            />
        )
    }

    const displayToDos = (): JSX.Element => {
        return (
            <section>
                {todos.map(renderTodos)}
                <DeleteAllContainer
                    deleteAll={deleteAll} 
                />
            </section>
        )
    }

    return (
        <section>
            {todos.length > 0
             ? displayToDos()
             : <h1>No todos yet.</h1>
            }
        </section>
    )
}

const ToDosContainer = connector(ToDosContainerView)

export default ToDosContainer