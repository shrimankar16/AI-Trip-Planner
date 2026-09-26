import { Plane, Plus } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'


const Header = () => {
  const navigate = useNavigate()

  return (
    <header className='bg-white border-b border-gray-200 px-6 py-3 flexBetween absolute top-0 left-0 right-0 w-full z-50'>
      {/* Logo */}
      <Link to={'/'} className='flex items-center gap-x-2 cursor-pointer'>
        <div className='bg-destructive p-1.5 rounded-lg'>
          <Plane className='w-6 h-6 text-white' />
        </div>
        <span className='hidden sm:flex font-bold text-xl capitalize'>Trippy</span>
      </Link>
      {/* Buttons */}
      <div className='flex gap-x-4 sm:gap-x-8'>
        <Button onClick={()=>navigate('create-trip')} variant='outline' className={'mt-1 bg-transparent'}>
          <Plus />
          Create Trip
        </Button>
        <Button onClick={()=>navigate('/my-trips')} variant='destructive' className={'mt-1'}>
          My Trips
        </Button>
      </div>
    </header>
  )
}

export default Header