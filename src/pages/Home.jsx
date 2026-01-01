import React, { Fragment } from 'react'
import Hero from '../component/Hero'
import FeatureDestination from '../component/FeatureDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'
import NewsLetters from '../component/NewsLetters'

const Home = () => {
  return (
    <Fragment>
        <Hero/>
        <FeatureDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
        <NewsLetters/>
    </Fragment>
  )
}

export default Home