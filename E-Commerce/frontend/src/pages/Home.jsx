import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import NewsletterBox from '../components/NewsletterBox'
import OurPolicy from '../components/OurPolicy'
function Home() {
  return (
    <div>
      <Hero></Hero>
      <LatestCollections></LatestCollections>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default Home
