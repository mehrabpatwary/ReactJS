import React, {useState} from 'react'

export default function HOOKS_USESTATE() {

    const [count, setState] = useState(0);
    const handelIncrease =() =>{
        setState(count + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handelIncrease}>Increment</button>
        </div>
    )
}
