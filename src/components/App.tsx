import React from 'react'

import Input from './Input'
import ToDosContainer from './ToDosContainer'

const App = () => {
    return (
        <main className="app-container">
            <h1>Todos for today:</h1>
            <Input />
            <ToDosContainer />
        </main>
    )
}

export default App