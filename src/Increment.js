import React,{useState} from 'react'

const Increment=()=> {
    const [count,setCount]=useState(0)

    function decrease(){
        if (count>0){
            setCount(count-1);
        }
    }
    return (
        <>
          <center><h1>{count}</h1>
          {/* <button onClick={()=>setCount(count+1)}>Click to increase value </button> */}
          
          {/* <button onClick={()=>count>0 && setCount(count-1)}>Click to decrease value</button> */}
           {/* or for decrease
                <button onClick={decrease}>Click to decrease value </button>  */}
            {count<50 && <button onClick={()=>setCount(count+1)}>Click to increase value </button>}
            {count>0 && <button onClick={()=>count>0 && setCount(count-1)}>Click to decrease value</button>}

            </center>
        </>
    )
}

export default Increment
