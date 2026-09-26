import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import { Skeleton } from '../components/ui/skeleton'
import Hero from '../components/shared/Hero'
import TripStats from '../components/shared/TripStats'
import HotelCard from '../components/shared/HotelCard'
import Itinerary from '../components/shared/Itinerary'

const TripDetails = () => {
    const { tripId } = useParams()
    const [trip, setTrip] = useState(null)
    const [loading, setLoading] = useState(true)

    const getTripData = async () => {
        try {
            const docRef = doc(db, 'trips-ai', tripId)
            const docSnap = await getDoc(docRef)
            
            if (docSnap.exists()) {
                setTrip({ id: docSnap.id, ...docSnap.data() })
            } else {
                console.log('No such trip found!')
            }
        } catch (error) {
            console.error('Error fetching trip:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (tripId) {
            getTripData()
        }
    }, [tripId])

    if (loading) {
        return (
            <div className='max-padd-container py-22 xl:py-28'>
                <div className='space-y-8'>
                    <Skeleton className="h-64 w-full rounded-xl bg-white" />
                    <Skeleton className="h-32 w-full rounded-xl bg-white" />
                    <Skeleton className="h-96 w-full rounded-xl bg-white" />
                </div>
            </div>
        )
    }

    if (!trip) {
        return (
            <div className='max-padd-container py-22 xl:py-28'>
                <div className='text-center'>
                    <h2>Trip not found</h2>
                    <p>The trip you're looking for doesn't exist.</p>
                </div>
            </div>
        )
    }

    return (
        <div className='max-padd-container py-22 xl:py-28'>
            {/* Trip Info Banner */}
            <div className='bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-2xl mb-8'>
                <div className='flex items-start gap-4'>
                    <div className='text-4xl'>✈️</div>
                    <div className='flex-1'>
                        <h1 className='text-3xl font-bold mb-2'>{trip?.userSelection?.destination?.label || 'Your Trip'}</h1>
                        <p className='text-gray-600 mb-4'>{trip?.tripData?.tripNote}</p>
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex items-center gap-2'>
                                <span className='text-2xl'>💰</span>
                                <div>
                                    <p className='text-xs text-gray-500'>Budget</p>
                                    <p className='font-semibold'>{trip?.userSelection?.budget}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-2xl'>👥</span>
                                <div>
                                    <p className='text-xs text-gray-500'>Travelers</p>
                                    <p className='font-semibold'>{trip?.userSelection?.traveler}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-2xl'>📅</span>
                                <div>
                                    <p className='text-xs text-gray-500'>Duration</p>
                                    <p className='font-semibold'>{trip?.userSelection?.noOfDays} {trip?.userSelection?.noOfDays > 1 ? 'Days' : 'Day'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotels Section */}
            {trip?.tripData?.hotelsOptions && trip.tripData.hotelsOptions.length > 0 && (
                <div className='mb-12'>
                    <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
                        <span>🏨</span> Recommended Hotels
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {trip.tripData.hotelsOptions.map((hotel, index) => (
                            <HotelCard key={index} hotel={hotel} />
                        ))}
                    </div>
                </div>
            )}

            {/* Itinerary Section */}
            {trip?.tripData?.itinerary && trip.tripData.itinerary.length > 0 && (
                <div>
                    <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
                        <span>📍</span> Daily Itinerary
                    </h2>
                    <Itinerary trip={trip} />
                </div>
            )}
        </div>
    )
}

export default TripDetails
