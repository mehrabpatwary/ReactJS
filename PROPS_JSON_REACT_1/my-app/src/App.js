import React from 'react'
import Card from './components/Card'
import Data from './data.json'

function App() {
    return <div>
                <h1 className="hStyle ltext">Hello Welcome here</h1>
                {Data.map((item, index) => <Card key={index} todoTitle={item.title} todoDesc={item.desc}/>)}
            </div>
}
export default App;