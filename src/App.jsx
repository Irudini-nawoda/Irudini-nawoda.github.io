import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="container mx-auto px-6">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
