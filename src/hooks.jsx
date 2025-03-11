import React , {useState} from 'react'
// can only use hooks in function components
// everytime your function runs, the hooks must always run in the exact same order
// shouldnt be nested in if statements or loops


function Rhook(){
    //const [count,setcount] = useState(4) //hard input of value in use state

    const [count,setcount] = useState(()=>{
        console.log('run function')
        return 4
    })

    // count with objects
    // const [state,setState] = useState({count:4,theme:'blue'})
    // const count = state.count
    // const theme = state.theme

    function decreaseCount(){
        setcount(count -1)
    }
    function increaseCount(){
        setcount(count +1)
    }
    return (
        <div>
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}

export default Rhook