import React from 'react'
import Header from './Header';

const Browse = (props) => {
  const { onSignIn } = props;
  return (
    <div className='bg-black h-screen'>
      <Header></Header>
    </div>
  )
}

export default Browse;  