import React from 'react'
import { useNavigate } from 'react-router'

const Pagenotfound = () => {

  const nav = useNavigate();

  return (
    <div className='h-[500px] w-[500px] mx-auto'>

      <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_scgyykem.json" background="transparent" speed="1" loop autoplay></lottie-player>


      <div className='text-center space-y-2'>
        <h1 className='text-xl'>Page not found</h1>
        <button
          onClick={() => nav('/')}
          className='text-pink-600' > Click To GO Home Pages</button>

      </div>
    </div >
  )
}

export default Pagenotfound