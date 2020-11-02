import React, {Dispatch, 
       useState, ChangeEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { addTodoAction, IActions } from '../store/actions'

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
    return {
        addToDo: (todo: string): void => {
            dispatch(addTodoAction(todo))
        }
    }
}

const connector = connect(null, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const InputView = ({ addToDo }: Props): JSX.Element => {
    const [inputVal, setInputVal] = useState('')

    const handleChange = 
        (e: ChangeEvent<HTMLInputElement>): void => {
        setInputVal(e.target.value)
    }

    const handleClick = (): void => {
        addToDo(inputVal)
    }
    return (
        <section className="input-container">
            <input onChange={handleChange} type="text" />
            <input onClick={handleClick} type="submit" value="Add" />
        </section>
    )
}



const Input = connector(InputView)

export default Input