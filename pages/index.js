import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import LogoSlider from '../components/LogoSlider'
import WhyContentStack from '../components/WhyContentStack'
import DevUser from '../components/DevUser'
import Integrations from '../components/Integrations'
import Care from '../components/Care'
import Partners from '../components/Partners'
import Recommended from '../components/Recommended'


export default function Home() {
  return (
    <>
      <Header />
      <LogoSlider />
      <WhyContentStack />
      <DevUser />
      <Integrations />
      <Care />
      <Partners/>
      <Recommended/>
    </>
  )
}
