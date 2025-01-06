import Sidebar from "../components/Sidebar";


const UserLayout = ({children})=>{
    return(
        <>
           <div className="flex">
        <Sidebar/>
        <div className="w-full">
        {children}
        </div>
      
        </div>
        </>
    )
}

export default UserLayout;