import React, { useState } from 'react'

const Zepto = () => {
    let [input,setInput] = useState("")
    let [apiData,SetApiData]=useState([])
    async function fun(){
        if(input.trim()==""){
            alert("input dalo")
            return;
        }
        let res = await fetch(`https://dummyjson.com/products/search?q=${input}`)
        let data= await res.json()
         console.log(data)
         SetApiData(data.products)
    }
  return (
    
    <div>
        <input onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={fun}>Click</button>
        <h2>{input}</h2>
        <ol>
        {apiData.map((elm,idx)=>{
            return <li>{elm.title}</li>
        })}
        </ol>
    </div>
  )
}

export default Zepto