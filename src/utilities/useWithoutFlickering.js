import { useEffect, useState } from "react";
const useWithoutFlickering = () => {

    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{
        const abortCont = new AbortController();
        return() => {
            setIsPending(false)
            abortCont.abort()
        }
    },[])
    return ( 
        isPending
    );
}
 
export default useWithoutFlickering;