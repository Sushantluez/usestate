import React from 'react'
import Header from './pages/components/Header';
import { person, person1 } from './pages/components/Data';
import { Route, Routes } from 'react-router';
import RootLayOut from './pages/RootLayOut';
import HomePages from './pages/components/HomePages';
import About from './pages/About';
import Pagenotfound from './pages/Pagenotfound';
import Java from './pages/Java';
// import ContactPages from './pages/contactPages';
// import AboutDetails from './pages/components/AboutDetails';



const App = () => {





  return (

    <>





      <Routes>




        <Route path='/' element={<RootLayOut />} >



          <Route index element={<HomePages />} />

          <Route path='about' element={<About />} />



          {/* <Route path='aboutDetails' element={<AboutDetails />} /> */}
          {/* </Route>
          <Route path='contact' element={<ContactPages />} /> */}




          <Route path='*' element={<Pagenotfound />} />




        </Route>




      </Routes>


      {/* <Java /> */}



    </>


  )
}

export default App