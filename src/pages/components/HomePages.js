import React, { useState } from 'react'
import DisplaySection from './DisplaySection'

import { Input, Button } from "@material-tailwind/react";
import { useFormik } from 'formik';

const HomePages = () => {

  const [todos, setTodo] = useState([]);

  const formik = useFormik({
    initialValues: ({
      todo: '',
    }),
    onSubmit: (val, { resetForm }) => {
      setTodo([...todos, val.todo]);

      resetForm();
    }
  });
  // console.log(todos);



  const removeTodo = (index) => {
    todos.splice(index, 1);
    setTodo([...todos]);
  }





  // const h = ['gio'];
  // let nio = ['kio'];
  // nio = [...nio, ...h];

  // console.log(nio);


  // const person = {
  //   name: 'hari',
  //   age: 25
  // };

  // const greet = () => {
  //   alert('hello user');
  // }


  // const [number, setNumber] = useState(0);
  // let number = 0;


  return (
    <div className='p-9'>

      <form onSubmit={formik.handleSubmit}>


        <div className='w-72 space-y-7'>



          <Input
            name='todo'
            color='purple'
            label="Todo"
            onChange={formik.handleChange}
            value={formik.values.todo}
            icon={<i className="fa-sharp fa-solid fa-calendar-check"></i>}
          />

          <Button
            type='submit'
            color='purple'> Submit
          </Button>



        </div>

      </form>


      <div className='mt-7'>
        {todos.map((todo, i) => {
          return <div key={i} className='flex items-baseline space-x-5'>
            <h1 className='text-2xl text-green-700'>{todo}</h1>
            <button onClick={() => removeTodo(i)}><i className="fa-solid fa-trash-can fa-lg text-pink-400"></i>
            </button>

          </div>
        })}
      </div>









      {/* <div className='max-w-[100px] flex justify-center flex-col'>

        <button onClick={() => setNumber((prev) => prev + 1)} className='bg-green-400 px-5 py-1 rounded-lg'>Add +</button>
        <h1 className='text-2xl text-center text-blue-700'>{number}</h1>
        <button onClick={() => setNumber(number - 1)} className='bg-black px-5 py-1 rounded-lg text-white'>Minus -</button>

      </div> */}




      {/* <h1>this is home page</h1>

      <DisplaySection age='lio' rating={90} person={person} greet={greet} /> */}
    </div>
  )
}

export default HomePages