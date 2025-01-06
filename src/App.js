
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import UserLayout from './layouts/UserLayout';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import CartProvider from './context/CartProvider';
import Task4 from './components/Task4';
import Admin from './components/Admin';
import { createContext, useEffect, useState } from 'react';
import Index from './components/Index';
import Task5 from './components/Task5';

export const appContext = createContext();

function App() {

  const [role , setRole] = useState(null);
  useEffect(()=>{
   setRole(localStorage.getItem('role') || null);
  },[role]);
  console.log('rendered app');
  return (
    <>
     <BrowserRouter>
    <appContext.Provider value={{setRole}}>
    <Routes>
      <Route path='/' element={<Index/>}></Route>
     </Routes>
    </appContext.Provider>


 {  role && role==="admin" && <Routes>
      <Route path='/admin' element={<Admin/>}></Route>
     </Routes>}
     <CartProvider>

  
    
{ role && role==="user" &&   <UserLayout>
    <Routes>
           <Route path='/user' element={<Navigate to='/user/task1'/>}/>
           <Route path='/user/task1' element={<Signup/>} />
           <Route path='/user/task2' element={<Task2/>} />
           <Route path='/user/task3' element={<Task3/>} />
           <Route path='/user/task4' element={<Task4/>} />
           <Route path='/user/task5' element={<Task5/>} />
        </Routes>
        </UserLayout>}
    
     </CartProvider>
     </BrowserRouter>
     
    </>
  );
}

export default App;
