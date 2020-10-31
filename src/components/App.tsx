import React from 'react'

import Input from './Input'
import ToDosContainer from './ToDosContainer'

const App = props => {
    return (
        <main className="app-container">
            <h1>Hello from React</h1>
            <Input />
            <ToDosContainer />
        </main>
    )
}

export default App