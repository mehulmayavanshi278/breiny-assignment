import React, { useContext, useEffect, useState } from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { appContext } from '../App';

function Index() {

   const [open, setOpen] = useState(true);
   const {role , setRole} = useContext(appContext);
   const handleClose = () => {
    setOpen(false);
  };
   const handleRoleSelect = (role)=>{
    setOpen(false)
    setRole(role);
    localStorage.setItem('role' , role)
     if(role==="user"){
        
        window.location.href="/user"
     }else if(role==="admin"){
        window.location.href="/admin"
     }
   }
   useEffect(()=>{
    // window.location.href="/";
   },[]);
  return (
    <div className='p-4 bg-gray-100 h-screen'>

                <h1 className="text-black text-[25px] font-[600]">Task Name</h1>
    <p className="text-gray-600 text-[15px] font-[400] mt-2">
      Develop a role-based authorization system to control access to specific routes or components</p>

      <Modal open={open} onClose={handleClose}>
      <Box
        className="bg-white rounded-lg p-6 shadow-lg  mx-auto"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
        }}
      >
      <h1 className='text-xxl font-semibold mb-4'>Task no 4</h1>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Select Your Role
        </h2>
        <div className="flex justify-around">
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => handleRoleSelect("user")}
          >
            User
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => handleRoleSelect("admin")}
          >
            Admin
          </Button>
        </div>
      </Box>
    </Modal>
    </div>
  )
}

export default Index
