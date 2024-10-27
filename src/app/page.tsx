import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedWabinars from '@/components/Wabinars';
import TestiMonialCard from '@/components/TestiMonialCard';

import React from 'react'

const page = () => {
  return(
    <div>
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <FeaturedWabinars/>
        <TestiMonialCard/>
        <Footer/>

    </div>
  )
}

export default page
