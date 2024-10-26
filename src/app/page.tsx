import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestiMonialCard from '@/components/TestiMonialCard'
import Footer from '@/components/Footer'
import Wabinars from '@/components/Wabinars'

export const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Wabinars/>
      <TestiMonialCard/>
      <Footer/>

    </div>
  )
}

export default page

