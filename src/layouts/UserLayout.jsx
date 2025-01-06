import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";


const UserLayout = ({children})=>{
    const [isOpen, setIsOpen] = useState(true);
    useEffect(()=>{

    },[isOpen])
    return(
        <>
           <div className="flex">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div
        className={`${
          isOpen ? "w-64 px-[100px]" : "w-16"
        }  text-white h-screen   transition-width duration-300 `}
      >
      </div>
        <div className={`w-full`}>
        {children}
        </div>
      
        </div>
        </>
    )
}

export default UserLayout;