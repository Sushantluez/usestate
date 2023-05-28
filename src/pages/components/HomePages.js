import React, { useCallback, useMemo, useState } from 'react'
import DisplaySection from './DisplaySection'

import { Input, Button } from "@material-tailwind/react";
import { useFormik } from 'formik';
import HomeChlid from './HomeChlid';

const HomePages = () => {

  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(0);



  const addSome = useMemo(() => {
    console.log('hello');
    return count * 5;
  }, [count])


  const greet = useCallback(() => {
    console.log('hi');
  }, [minus]);




  return (
    <div>

      <h1 className='text-2xl'>{addSome}</h1>

      <h1 onClick={() => setCount(count + 1)} className='text-2xl'>{count}Plus</h1>

      <h1 onClick={() => setMinus(minus - 1)} className='text-2xl'>{minus}Minus</h1>


      <HomeChlid greet={greet} age={90} />












    </div>
  )
}

export default HomePages