import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Menu } from './components/Menu'
import {Todolist} from './components/todolist'
import { Completedtodo } from './components/Completedtodo'
import { Gettodo } from './components/Gettodo'
import { Settings } from './components/Settings'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <div className='bg-[#A18AFF] h-screen w-screen relative'>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-2 bg-white rounded-xl h-4/6 w-3/5 flex items-center justify-center">
          <div className=" w-64 h-full mt-10">
            <Menu />
          </div>
          <div className="bg-[#A18AFF] h-full w-full flex  rounded-tr-xl rounded-br-xl">
              <Routes>
              <Route path='/' element={<Todolist></Todolist>}></Route>
              <Route path='/completedtodo' element={<Completedtodo></Completedtodo>}></Route>
              <Route path='/gettodos' element={<Gettodo></Gettodo>}></Route>
              <Route path='/settings' element={<Settings></Settings>}></Route>
            </Routes>
          </div>
      </div>
      <div>
      <div className="absolute top-20 left-[35%] transform -translate-x-1/2 w-28 h-28 bg-[#3FD4F4] rounded-full"></div>
      </div>
      <div className=" w-10 h-20">
        <div className="absolute top-1/2 left-[71.7%] transform translate-x-1/2  w-40 h-20 bg-[#FAC608] rounded-b-full -rotate-90"></div>
      </div>
          <div className=" h-20">
      <div className="absolute top-[80%] left-[16%] transform -translate-y-1/2 w-40 h-40 bg-[#FD99AF] rounded-bl-full overflow-hidden rotate-180"></div>
    </div>
    <ToastContainer></ToastContainer>
    </div>
    </>
  )
}

export default App
