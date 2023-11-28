import { useState } from "react"



export default function usePersistedState(key, defaultlValue){
    const [state,setState] = useState(()=>{
        const persistedSate = localStorage.getItem(key);
        if(persistedSate){
        return  JSON.parse(persistedSate)  
        }
        return defaultlValue
    })

    const setPersistedState = (value) => { 
        let serializedValue;
        setState(value)

        if(typeof value === "function"){
            serializedValue = JSON.stringify(value(state))
        
        }else {
            serializedValue = JSON.stringify(value)
        }
        localStorage.setItem(key, serializedValue);
       
    }

    return (
        [state,
        setPersistedState,]
    )
}