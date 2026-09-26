import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { db } from '../services/firebaseConfig';
import { Skeleton } from "@/components/ui/skeleton"
import MyTripCard from '../components/shared/MyTripCard';

const MyTrips = () => {
    const [userTrips, setUserTrips] = useState([])
    const navigate = useNavigate()

    const getUserTrips = async () => {
        // Fetch all trips from the last 30 days (to avoid loading too many)
        const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
        const q = query(
            collection(db, "trips-ai"),
            where("id", ">=", thirtyDaysAgo.toString())
        );
        
        try {
            const querySnapshot = await getDocs(q);
            const allTrips = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setUserTrips(allTrips)
        } catch (error) {
            console.log("Error fetching trips", error)
            // If the query fails, just fetch recent trips without filter
            try {
                const simpleQuery = query(collection(db, "trips-ai"));
                const snapshot = await getDocs(simpleQuery);
                const trips = snapshot.docs.slice(0, 20).map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUserTrips(trips);
            } catch (err) {
                console.log("Error with simple query too", err);
            }
        }
    }

    useEffect(()=>{
      getUserTrips()
    }, [])

    return (
        <div className='max-padd-container py-22 xl:py-28'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {userTrips?.length > 0 ? userTrips?.map((trip, index)=>(
                    <MyTripCard key={index} trip={trip}/>
                )) : 
                [1,2,3,4].map((index)=>(
                    <div key={index} className='flex flex-col space-y-3'>
                        <Skeleton className="h-122 w-77 rounded-xl bg-white" />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default MyTrips