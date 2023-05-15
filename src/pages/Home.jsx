import React from 'react'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import Purchase from '../components/Purchase'
import Section from '../components/Section'
import Testimonial from '../components/Testimonial'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Header/>
      <Section/>
      <Testimonial/>
      <Purchase/>
      <Contacts/>
    </div>
  )
}

export default Home

