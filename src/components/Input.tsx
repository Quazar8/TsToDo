import React, {Dispatch, 
       useState, useEffect, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { addTodoAction, IActions } from '../store/actions'

const InputView = ({onAddClick}): JSX.Element => {
    const [inputVal, setInputVal] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value)
    }

    useEffect(() => {
        console.log(inputVal)
    })

    return (
        <section className="input-container">
            <input onChange={handleChange} type="text" />
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