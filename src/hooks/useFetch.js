import { useEffect } from "react";
import { useState } from "react"

const useFetch =  (url) => {
    const [data , setdata ] = useState(null);
    useEffect(()=>{
        fetch(url).then(res =>{
            res.json()
            .then(result =>{
                setdata(result.products)
            })
        })
    },[])
    return data
}
export default useFetch