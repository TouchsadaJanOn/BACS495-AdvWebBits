import React, {useState} from 'react'


function Body(){
    const [name, setName] = useState();
    console.log("hey!!!!!!")
    return <div>
        <input value ={name} onInput ={e=> setName(e.target.value)}/>
        <p>Name is set to: {name}</p>
        </div>
}

export default Body;