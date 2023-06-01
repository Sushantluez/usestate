import React, { useCallback, useEffect, useMemo, useState } from 'react'
import DisplaySection from './DisplaySection'

import { Input, Button } from "@material-tailwind/react";
import { useFormik } from 'formik';
import HomeChlid from './HomeChlid';
import axios, { Axios } from 'axios';
import Mongo from './Mongo';


const HomePages = () => {




  // const data = {
  //   categories: [
  //     {
  //       "idCategory": "1",
  //       "strCategory": "Beef",
  //       "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
  //       "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
  //     },
  //     {
  //       "idCategory": "2",
  //       "strCategory": "Chicken",
  //       "strCategoryThumb": "https://www.themealdb.com/images/category/chicken.png",
  //       "strCategoryDescription": "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
  //     },
  //   ]
  // };



  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [err, setErr] = useState('');

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setLoad(false);
      setData(response.data['categories']);
    } catch (err) {
      setLoad(false);
      setErr(err);
    }

  }
  useEffect(() => {
    getData();
  }, []);

  if (isLoad) {
    return <h1>Loading....</h1>
  }

  console.log(data);


  // axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
  //   console.log(res.data);
  // }).catch((err) => {
  //   console.log(err);
  // });

  // useEffect(() => {
  //   console.log('hello world');

  // }, [])




  return (
    <div className='grid grid-cols-3 items-start p-9 gap-7'>
      {data.map((meal) => {
        return <div key={meal.idCategory} className='space-y-3 shadow-2xl p-5'>
          <h1 className='text-center text-2xl font-bold'>{meal.strCategory}</h1>
          <img className='w-full' src={meal.strCategoryThumb} alt="" />
          <p>{meal.strCategoryDescription.substring(0, 100) + '.....'}</p>
        </div>
      })}




















      {/* {data.categories.map((food) => {
        return <div key={food.idCategory}>
          <h1>{food.strCategory}</h1>
          <img src={food.strCategoryThumb} alt="" />
          <p>{food.strCategoryDescription}</p>
        </div>

      })} */}

      {/* 
      <Mongo /> */}


    </div>
  )
}

export default HomePages