import React, { useState } from 'react';
import {toast} from 'react-toastify'

export const Todolist = () => {
  const [Addtodo, setAddtodo] = useState({
    title: "",
    description: "",
    completed: false
  });

  const createTodo = async (data) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const savedUserResponse = await fetch(
      `${baseUrl}/createTodo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);

  };

  function changehandler(event) {
    const { name, value } = event.target;
    setAddtodo(prevdata => ({
      ...prevdata,
      [name]: value
    }));
  }

  function submithandler(e) {
    e.preventDefault();
    toast.success('Todo added successfully!!')
    createTodo(Addtodo);
    setAddtodo({ title: "",
    description: "",
    completed: false
  })
    console.log(Addtodo);
    console.log("data sent successfully");
  }

  return (
    <div className=' ml-32 mt-14'>
      <h1 className='text-white font-extrabold text-4xl'>To-dos</h1>
      <h2 className='text-[#51287f] font-extrabold text-xl mb-10 ml-2'>Let's Achieve Something!!</h2>
      <form action="" className='flex flex-col'> {/* Added flex and items-center classes */}
        <label htmlFor="title" className="text-zinc-600 font-bold">Title </label>
        <input className="border-2 w-96 h-10  rounded-lg p-2" type="text" placeholder="Enter Todo!!" id='title' name='title' value={Addtodo.title} onChange={changehandler} />
        <br />
        <label htmlFor="description" className='text-zinc-600 font-bold'>Description </label>
        <textarea className="border-2 w-96 h-32 p-2 rounded-lg" placeholder="Type description here!!" id='description' name='description' value={Addtodo.description} onChange={changehandler} />
        <br />
        <button className='border-2 text-center h-8  rounded-lg font-bold hover:text-white hover:bg-[#51287f]' onClick={submithandler}>Add</button>
      </form>
    </div>
  );
};

