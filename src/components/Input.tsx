import React, {Dispatch, 
       useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { addTodoAction, IActions } from '../store/actions'

const InputView = ({ addToDo }): JSX.Element => {
    const [inputVal, setInputVal] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value)
    }

    const handleClick = () => {
        addToDo(inputVal)
    }
    return (
        <section className="input-container">
            <input onChange={handleChange} type="text" />
            <input onClick={handleClick} type="submit" value="Add" />
        </section>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
    return {
        addToDo: (todo: string) => {
            dispatch(addTodoAction(todo))
        }
    }
}

const Input = connect(null, mapDispatchToProps)(InputView)

export default Input