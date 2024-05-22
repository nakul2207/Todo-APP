import React from 'react'
import { useState,useEffect } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import addTodo from '../redux/slice/TodoCompleteslice'
import {toast} from 'react-toastify'

export const Gettodo = () => {
  const [gettodo, setgettodo] = useState([]);
  // const dispatch = useDispatch();
  // const completetodo = useSelector((state) => state.todo.value);

  const completeHandler = async (id) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    toast.success('Todo Completed!!');

    try {
      const savedUserResponse = await fetch(
        `${baseUrl}/updateTodo/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: true }), // Assuming you want to mark the todo as completed
        }
      );
      console.log("FORM RESPONSE......", savedUserResponse);
      // dispatch(addTodo(id));
      // console.log(completetodo);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteHandler = async (id) => {
    toast.success('Todo deleted Succesfully');
    const baseUrl = import.meta.env.VITE_BASE_URL;

    try {
      const savedUserResponse = await fetch(
        `${baseUrl}/deleteTodo/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }, 
        }
      );
      console.log("FORM RESPONSE......", savedUserResponse);
      // dispatch(addTodo(id));
      // console.log(completetodo);
    } catch (error) {
      console.error("Error:", error);
    }
  };



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
      // Filter out completed todos
      const incompleteTodos = res.data.filter(todo => !todo.completed);
      setgettodo(incompleteTodos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, [completeHandler,deleteHandler]);



  return (
    <div className='ml-32 mt-14'>
      <h1 className='text-white font-extrabold text-4xl'>To-dos</h1>
      <h2 className='text-[#51287f] font-extrabold text-xl mb-10 ml-2'>Have you completed??</h2>
      <ul className="list-disc ml-4">
        {gettodo.length === 0 ? (
          <div className='text-center ml-28 mt-28 text-white font-bold'>No todo present!!</div>
        ) : (
          gettodo.map((todo) => (
            <li key={todo._id}>
              <div className='bg-white w-96 h-16 rounded-lg p-2 my-2 flex justify-between'>
                <div>
                  <h1 className='font-bold underline'>{todo.title}</h1>
                  <p>{todo.description}</p>
                </div>
                <div className='flex space-x-2 mt-3'>
                  <FaRegCheckCircle color='#51287f'  size={25} className="cursor-pointer" onClick={() => completeHandler(todo._id)} />
                  <FaRegTrashCan size={25} className="cursor-pointer" onClick={() => deleteHandler(todo._id)}/>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
