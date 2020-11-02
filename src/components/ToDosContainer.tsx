import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IState } from '../store/store'

import ToDoRow from './ToDoRow'

const mapStateToProps = 
    (state: IState) => {
    return {
        todos: state.todos
    }
}

const connector = connect(mapStateToProps)

type Props = ConnectedProps<typeof connector>

const ToDosContainerView = 
    ({ todos }: Props): JSX.Element => {

    const renderTodos = (todo: string): JSX.Element => {
        return (
            <ToDoRow todo={todo} />
        )
    }
    return (
        <section>
            {todos.length > 0
             ? todos.map(renderTodos)
             : <h1>No todos yet.</h1>
            }
        </section>
    )
}


const ToDosContainer = connector(ToDosContainerView)

export default ToDosContainer