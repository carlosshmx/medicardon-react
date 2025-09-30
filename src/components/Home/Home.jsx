import React from 'react'
import videobaner from '../../assets/videobaner.mp4'
import homeStyle from './Home.module.scss'

export const Home = () => {
  return (
    <div>
        <video src={videobaner} autoPlay loop muted disablePictureInPicture></video>
    </div>
  )
}
