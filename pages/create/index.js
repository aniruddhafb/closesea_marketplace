import React from 'react'
import img from '../../assets/binance.png'
const create = () => {
  return (
    <div>
      <h1 className='text-white mt-10 text-center font-bold text-3xl'>Create New Item</h1>
      <form>
        <div className='text-start text-white px-3 my-3'>
          <b >Image, Video, Audio, or 3D</b>
          <p className='text-sm my-2'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
        </div>
        <label htmlFor='image' className='flex justify-center'>
          <img src={img} alt="" className='bg-white h-32 w-3h-32'/>
          <input type="file" name="image" id="image" className='hidden'/>
        </label>
      </form>
    </div>
  )
}

export default create