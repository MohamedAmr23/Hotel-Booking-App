import React, { Fragment } from 'react'
import Hero from '../component/Hero'
import FeatureDestination from '../component/FeatureDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'

const Home = () => {
  return (
    <Fragment>
        <Hero/>
        <FeatureDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
    </Fragment>
  )
}

export default Home