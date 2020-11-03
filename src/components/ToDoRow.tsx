import React from 'react'

interface IProps {
    todo: string,
    index: number,
    deleteTodo: (index: number) => void
}

const ToDoRow = ({ todo, deleteTodo, index }: IProps): JSX.Element => {
    const handleClick = () => {
        deleteTodo(index)
    }
    return (
        <article>
            {todo}
            <button onClick={handleClick}>X</button>
        </article>
    )
}

export default ToDoRow