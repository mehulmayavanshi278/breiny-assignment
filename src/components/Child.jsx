import { TextField , Button } from '@mui/material'
import React, { memo ,  useEffect,  useState} from 'react'

const Child = React.memo(() => {

  const [todo , setToDo] = useState([]);
  const handleAddToDo = (val)=>{
    setToDo([...todo , val]);
 }
    console.log('child rendered');
    const [name , setName] = useState("");

    useEffect(()=>{

    },[todo])
  return (
    <div>
        <div className='space-y-2'>
        <TextField
                type="name"
                label="name"
                name="name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                fullWidth
              />
              <Button disabled={!name} onClick={()=>{setName("");handleAddToDo(name)}} className='mt-3' variant='contained'>
                Add To Do
              </Button>
        </div>

        <div className='mt-5 space-y-2'>
        {
          todo?.length !==0 ? todo?.map((elm)=>{
            return(
              <>
              <li key={elm} className='text-[15px] text-gray-600 font-[550]'>{elm}</li>
              </>
            )
          })  :  <p>ToDo is Empty</p>
        }

        </div>

    </div>
  )
})

export default  Child
