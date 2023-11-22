import { useState } from "react"

export default function useForm(submiHandler,initialValue){

    const [values, setValues] = useState(initialValue)
    const onChange = (e)=>{
    setValues(state => ({...state,[e.target.name]:e.target.value})

   )}
   const onSubmit =  (e) =>{
       e.preventDefault()
       submiHandler(values)

   }
    return {
        values,
        onChange,
        onSubmit
    }
}