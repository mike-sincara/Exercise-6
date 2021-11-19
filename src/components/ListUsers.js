import React, { useState,useEffect } from 'react'


export default function ListUsers() {
    const [user, setApi] = useState([]);
    

     useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
        .then((response) => response.json())
        .then((json)=> setApi(json))
    }, [])


    return (
        <div>
            {
                user["data"].map((item)=>{
                    return(
                        <div key={item.id}>
                            <figure>
                                <img src={item.avatar} alt=""/> 
                            </figure>                         
                        <p> first name:{item.first_name}  </p>                       
                        <p> last name:{item.last_name}   </p> 
                        <p> email:{item.email}   </p>      
                        <p>===============================</p>                                                                          
                        </div>
                    )                    
                })
            }                  
        </div>
    )
}

/*useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    https://reqres.in/api/users?page=2
    .then((response) => response.json)
    .then((json) => console.log(json))
  }, [])
  
  {
                user.map((item)=>{
                    <div>
                        <p>
                            {item.data}
                        </p>
                    </div>
                })
            }       
            
             <p>{console.log(user["data"])}</p>
            */

