import React from 'react'

type Props = {
    deleteAll: () => void
}

const DeleteAllContainer = 
        ({ deleteAll }: Props): JSX.Element => (
            <div>
                <button onClick={ deleteAll }>
                    Delete All
                </button>
            </div>
        )

export default DeleteAllContainer