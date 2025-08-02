import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'


export const AppContext=createContext()

const AppContextProvider=(props)=>{
    const [user,setUser]=useState(null);
    const[showLogin,setShowLogin]=useState(false);
    const [token,setToken]=useState(localStorage.getItem('token'))

    

    const backendUrl=import.meta.env.VITE_BACKEND_URL

    const generateImage=async(prompt)=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/image/generate-image',{prompt,user},{headers:{token}})

            if(data.success){
                return data.resultImage
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout=()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
    }

    const value={
        user,setUser,showLogin,setShowLogin,backendUrl,token,setToken,logout,generateImage
    }   

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider