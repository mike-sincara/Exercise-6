import React, { useState,useEffect } from 'react'


export default function Hapus() {
    const [users, setApi] = useState([]);
    var array=[1,2,3,4,5];
     useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
        .then((response) => response.json())
        .then((json)=> setApi(json))
    }, [])

    users["data"].map((item)=>{
        console.log(item)
    })

    return (
        <div>
            {
                
            }
            <h3>{}</h3> 
               <p>{users}</p>
        </div>
    )
}

