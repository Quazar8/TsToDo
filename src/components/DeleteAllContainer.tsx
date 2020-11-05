import React from 'react'

type Props = {
    deleteAll: () => void
}

const DeleteAllContainer = 
        ({ deleteAll }: Props): JSX.Element => (
            <article className="delete-all-container">
                <button onClick={ deleteAll }>
                    Delete All
                </button>
            </article>
        )

export default DeleteAllContainer