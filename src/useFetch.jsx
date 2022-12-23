import { useEffect, useState } from "react";
const useFetch = (request) => {

    let [data, setData] = useState(null);
    let [pending, setPending] = useState(true);
    let [error, seterror] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{fetch(request)
         .then((response)=>{
             if(response.ok===false)
             {
                 throw Error("Data is not found,please search for movies insted")
             }
             return response.json();
         })
         .then((movies)=>{
             setData(movies);
             setPending(false);
         })
         .catch((error)=>{
             seterror(error.message);
             setPending(false);
         })
        },3000)
        }, []);

    return{data, pending, error}

}
 
export default useFetch;