import React , {useCallback, useState} from 'react'
import { TextField , Button, } from "@mui/material";
import Child from './Child';

function Task5() {
    console.log('parent render')
      const [counter , setCounter] = useState(0);

      const handleIncrement = ()=>{
        setCounter(counter+1);
      }
      const handleDecrement = ()=>{
        setCounter(counter-1);
      }

  return (
    <div className='h-screen p-4 bg-gray-100'>
                <h1 className="text-black text-[25px] font-[600]">Task Name</h1>
    <p className="text-gray-600 text-[15px] font-[400] mt-2">
    create parent and child component with help of use memo to prevent rerender component and parent component update simple counter change and child has a todo list update</p>
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
            
            <Child/>
     
            </div>
         </div>
    </div>
    </div>
  )
}

export default Task5
