import React from 'react'

import DeleteAllContainer from './DeleteAllContainer'
import ToDoRow from './ToDoRow'

type Prop = {
    todos: string[],
    deleteAll: () => void,
    deleteTodo: (index: number) => void
}

const ToDosDisplay = ({ todos, 
                deleteAll, deleteTodo }: Prop): JSX.Element => {
        const renderTodos = (todo: string, i: number): JSX.Element => {
            return (
                <ToDoRow 
                    todo={ todo }
                    index={ i }
                    deleteTodo={ deleteTodo } 
                />
            )
        }
    
        return (
            <section className="todos-display">
                {todos.map(renderTodos)}
                <DeleteAllContainer
                    deleteAll={ deleteAll } 
                />
            </section>
        )
}

export default ToDosDisplay