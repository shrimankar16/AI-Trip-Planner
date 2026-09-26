import React, { useEffect, useState } from 'react'
import { getPlacePhoto } from '../../services/placePhotoApi'

const ActivityCard = ({activity}) => {
    const [placePhoto, setPlacePhoto] = useState('')

     useEffect(()=>{
         if(!activity.activityName) return
         
         const loadPhoto = async ()=>{
            const photoUrl = await getPlacePhoto(activity.activityName)
            setPlacePhoto(photoUrl)
         }
         loadPhoto()
    }, [activity])

  return (
    <div className="group relative flex gap-x-5">
        {/* icon */}
        <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:insert-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div className="relative z-10 size-6 bg-green-500 rounded-full flexCenter">
                🧭
            </div>
        </div>
        {/* Right - Content */}
        <div className="grow group-last:pb-0">
            <p className='mb-1 font-bold'>{activity.timeRange}</p>
            <p className='pb-1.5 text-xs'><b>Travel Time:</b> {activity.timeToTravel}</p>
            {/* Card */}
            <div className="block border border-gray-200 rounded-lg hover:shadow-2xs focus:outline-hidden overflow-hidden">
                <div className="relative flex flex-col sm:flex-row sm:items-center overflow-hidden">
                    <img src={placePhoto?placePhoto : '/private.png'} alt={'actImg'} className='sm:w-48 h-32 sm:h-full sm:absolute inset-0 object-cover' />
                    <div className="grow p-4 sm:ms-48">
                        <div className='min-h-24 flex flex-col sm:justify-center'>
                            <h6>{activity.activityName} <span className="text-gray-500"> 💸 {activity.ticketPrice}</span></h6>
                            <p className="mt-1">{activity.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActivityCard