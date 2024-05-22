import React from 'react'
import { useState,useEffect } from 'react';
import {useSelector } from 'react-redux';

export const Completedtodo = () => {
  const [gettodo, setgettodo] = useState();
  // const completetodo = useSelector((state)=> state.todo.value);

  const getAllData = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const getTodo = await fetch(
        `${baseUrl}/getTodo`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getTodo.json();
      const completeTodos = res.data.filter(todo => todo.completed);
      setgettodo(completeTodos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);


  return (
    <div className='ml-32 mt-14'>
      <h1 className='text-white font-extrabold text-4xl'>To-dos</h1>
      <h2 className='text-[#51287f] font-extrabold text-xl mb-10 ml-2'>Woho!! cheers to smaller wins!!</h2>
      <ul className="list-disc ml-4">
        {gettodo && gettodo.length === 0 ? (
          <div className='text-center ml-20 mt-32 text-white font-bold'>No todo completed!!</div>
        ) : (
          gettodo?.data.slice(1).reverse().slice(0, 4).map((todo) => (
            // Only render completed todos
            todo.completed && (
              <li key={todo._id}>
                <div className='bg-white w-96 h-16 rounded-lg p-2 my-2 flex justify-between'>
                  <div>
                    <h1 className='font-bold underline'>{todo.title}</h1>
                    <p>{todo.description}</p>
                  </div>
                </div>
              </li>
            )
          ))
        )}
      </ul>
    </div>
  );
  
  
}
