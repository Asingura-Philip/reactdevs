// 1)counter, 2)changes background color, 3)hides something with button click

import React, {useState} from 'react';
function MyCounter(){
    const[number,setNumber] = useState(0);

    const updateNumber =()=>{
        setNumber(number + 1)
    }
    return(
        <div>
            <p>number : {number}</p>
            <button onClick={updateNumber}>increase</button>
        </div>
    )
}

export default MyCounter