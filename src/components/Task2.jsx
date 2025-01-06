import React, { useEffect, useRef, useState } from 'react'
import { TextField , Button, } from "@mui/material";
import { toast } from 'react-toastify';



function Task2() {

    const [counter , setCounter] = useState(0);
    const [formData , setFormData] = useState({
        email:"",
        password:""
    })

    const [isIncDec , setIsIncDec] = useState(false);
    const timer = useRef(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]:value})
    };

    
    const handleIncrement = ()=>{
      setCounter(counter+1);  


      if(timer.current){
        clearTimeout(timer.current);
        // console.log(timer.current)
      }

      timer.current =  setTimeout(()=>{

        localStorage.setItem('counter', counter+1);
        toast.success('counter reseted successfully');
      },[500])

    }
    const handleDecrement = ()=>{
     setCounter(counter-1);

     if(timer.current){
        clearTimeout(timer.current)
     }

     timer.current = setTimeout(()=>{
       console.log('over');
       localStorage.setItem('counter' , counter-1);
       toast.success('counter reseted successfully');
     },[500]);
    }

    const handleSaveSession = ()=>{
       sessionStorage.setItem('email' , formData.email)
       sessionStorage.setItem('password' , formData.password)
       toast.success('save to session successfully');
    }

    const getSessionData = ()=>{
        try{
          const email  = sessionStorage.getItem('email')
          const password  = sessionStorage.getItem('password')
          setFormData({email,password});
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
      setCounter(parseInt(localStorage.getItem('counter')) || 0)
      getSessionData();
    },[]);

  return (
    <div>
      <div className='p-4 bg-gray-100 h-screen'>
      <h1 className="text-black text-[25px] font-[600]">Task Name</h1>
    <p className="text-gray-600 text-[15px] font-[400] mt-2">
    Build a one component that uses local storage for the simple counter while close the tab repoen the same tab then value of that counter should be last one. Second is a create email and password field alongside button save the value of the both fields on session storage and while close the tab and reopen it it will remove from session storage</p>

    <div className='mt-[100px] lg:px-[150px] md:px-[100px] sm:px-[50px]'>
    <div className='grid md:grid-cols-2 gap-4'>
            <div className='md:mx-0 mx-auto'>
              <p className='text-gray-600 text-[16px] font-[600]'>Counter : {counter}</p>
              <div className='flex md:flex-row  flex-col md:gap-x-3 md:gap-y-0 gap-y-2 mt-4'>
              <Button onClick={handleDecrement} className="text-gray-700" variant='contained'>Decrement</Button>
              <Button onClick={handleIncrement} className="text-gray-700" variant='contained'>Increment</Button>
              </div>

            </div>
            <div className='md:mx-0 mx-auto space-y-4'>
            
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
              />
              <Button onClick={handleSaveSession} className='mt-3' variant='contained'>
                Save To Session
              </Button>
            </div>
         </div>
    </div>

      </div>
    </div>
  )
}

export default Task2
