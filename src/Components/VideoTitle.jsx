import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='text-white  absolute bottom-[100px] left-[40px] w-1/4'>
      <h1 className='text-5xl pb-3 underline font-bold'>{title}</h1>
      <p className='text-lg'>{overview}</p>
    </div>
  )
}

export default VideoTitle