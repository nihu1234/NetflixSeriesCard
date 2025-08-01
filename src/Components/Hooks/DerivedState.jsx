import { useState } from "react"



export  const DerivedState  = () => {
    const[users,setUsers] = useState([ {name:"Alice", age:19,},
    {name:"Bob", age:49,},
    {name:"Mary", age:29,},
    {name:"Nik", age:39,},])
    console.log(users);
    const userCount = users.length;

    const averageAge = 
    users.reduce((accum,curElem) => accum+curElem.age, 0) / userCount
    
    
    return(
        <>
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    Users.map((curElem, index) => {
                        return<>
                     <li key={index}>
                        {curElem.name}- {curElem.age} year old
                     </li>
                        </>
                    })



                }
            </ul>

        </div>
        
        </>
    )
}

