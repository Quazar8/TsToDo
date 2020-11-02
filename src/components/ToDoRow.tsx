import React from 'react'

interface IProps {
    todo: string
}

const ToDoRow = ({ todo }: IProps): JSX.Element => {
    return (
        <article>
            {todo}
        </article>
    )
}

export default ToDoRow