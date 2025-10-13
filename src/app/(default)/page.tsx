import Banner from '@/components/Banner/Banner'
import Service from '@/components/service/Service'
import About from '@/components/About/About'
import AppointmentSection from '@/components/Appointment/Appointment'
import React from 'react'
import ContactSection from '@/components/Contant us/ContactUs'

function Home() {
  return (
    <div className='bg-gradient-to-r  from-[#FFFFFF] via-[#FFF6F7] to-[#FFC0CB]'>
      <Banner />
      <Service />
      <div >
        <About />
        <AppointmentSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default Home