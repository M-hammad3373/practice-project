import React from 'react'

import HeroSection from '@/components/HeroSection'
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestiMonialCard from '@/components/TestiMonialCard'

import Wabinars from '@/components/Wabinars'

export const page = () => {
  return (
    <div>
  
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Wabinars/>
      <TestiMonialCard/>
      

    </div>
  )
}

export default page

