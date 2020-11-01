import React, { Dispatch, useState } from 'react'
import { connect } from 'react-redux'
import { addTodoAction, IActions } from '../store/actions'

const InputView = ({onAddClick}): JSX.Element => {
    return (
        <section className="input-container">
            <input type="text" />
            <input type="submit" value="Add" />
        </section>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
    return {
        onAddClick: (todo: string) => {
            dispatch(addTodoAction(todo))
        }
    }
}

const Input = connect(null, mapDispatchToProps)(InputView)

export default Input