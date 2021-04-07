import React,{useState,useEffect, Fragment} from 'react'
import axios from 'axios'

const Datafetch=()=> {
    
    const [posts,setPost]=useState([])
    const [limit,setLimit]= useState(20)


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(error=>console.log(error))

    },[])
    // [] empty array= use effect execute once

    return (
        <><center>
        {/* map=for loop */}
        {posts.slice(0,limit).map(p=>{
            return(
                <Fragment key={p.id}>
                    <li>{p.title}</li>
                    <p>{p.body}</p>
                </Fragment>
            )
        }
        )}
       { limit <posts.length &&  <button  style={{backgroundColor:'orange'}} onClick={()=>setLimit(limit+20)}>Load More</button>
         
    }
       </center> </>
    )
}

export default Datafetch
