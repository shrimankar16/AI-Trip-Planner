import React from 'react'
import Header from './components/shared/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateTrip from './pages/CreateTrip'
import { Toaster } from 'sonner'
import TripDetails from './pages/TripDetails'
import MyTrips from './pages/MyTrip'

const App = () => {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create-trip' element={<CreateTrip />}/>
        <Route path='/trips/:tripId' element={<TripDetails />}/>
        <Route path='/my-trips' element={<MyTrips />}/>
      </Routes>
    </div>
  )
}

export default App