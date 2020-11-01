import React from 'react'
import { connect } from 'react-redux'
import { IState } from '../store/store'

const ToDosContainerView = ({ todos }) => {
    return (
        <section>
            { todos.map(todo => (
                <div>{todo}</div>
            ))}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const ToDosContainer = connect(mapStateToProps)(ToDosContainerView)

export default ToDosContainer