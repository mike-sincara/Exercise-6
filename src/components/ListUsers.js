import React, { useState,useEffect } from 'react';


export default function ListUsers() {
    const [users, setApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

     useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
        .then((response) => response.json())
        .then((json)=> setApi(json.data.map((item)=>{
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
        })))
        .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setLoading(false);
          });
    }, [])

    if (loading) {
        return <p>Data is loading...</p>;
      }
    if (error || !Array.isArray(users)) {
        return <p>There was an error loading your data!</p>;
      }
      
    return (
        <div>
            <h3>User Page</h3> 
               <p>{users}</p>
        </div>
    )
}

