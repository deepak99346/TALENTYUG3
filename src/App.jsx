import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import WhySection from './components/WhySection'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <section className="container">
          <Features />
          {/* <Roles /> */}
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  )
}
