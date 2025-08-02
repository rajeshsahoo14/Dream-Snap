import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-20 px-4'>
      <div className='flex items-center justify-between gap-4 py-6 max-sm:flex-col max-sm:gap-6'>

        {/* Logo Icon + Logo + Text */}
        <div className='flex items-center gap-4 max-sm:flex-col max-sm:gap-2'>
          <div className='flex items-center gap-2'>
            <img src={assets.logo_icon} alt="logo icon" className='w-6 sm:w-8 lg:w-10 object-contain' />
            <img src={assets.logo} alt="logo" className='w-36 object-contain' />
          </div>
          <p className='text-sm text-gray-500 text-center max-sm:border-none max-sm:pl-0'>
            Made with <span className='text-red-500'>❤️</span> by Sahoo | All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className='flex gap-3'>
          <img src={assets.facebook_icon} alt="facebook" className='w-8' />
          <img src={assets.twitter_icon} alt="twitter" className='w-8' />
          <img src={assets.instagram_icon} alt="instagram" className='w-8' />
        </div>

      </div>
    </div>
  )
}

export default Footer
