import React, { memo } from 'react'

const HomeChlid = ({ greet, age }) => {


  greet();

  console.log('hello this is Home chlid')
  return (
    <div>
      <h1>This is Home Child</h1>
      <p>{age}</p>
    </div>
  )
}

export default memo(HomeChlid) 