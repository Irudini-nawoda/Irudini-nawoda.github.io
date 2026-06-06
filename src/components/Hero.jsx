import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl font-bold mb-3">Hi, I'm Your Name.</h1>
          <p className="text-slate-600 max-w-2xl mb-6">I design and build modern web applications with a focus on performance, accessibility, and polished user experience.</p>
          <div className="flex gap-3">
            <a href="#projects" className="bg-accent text-white px-4 py-2 rounded-md">View projects</a>
            <a href="#contact" className="border border-slate-200 px-4 py-2 rounded-md">Contact me</a>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="flex justify-center">
          <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-50 flex items-center justify-center">
            <span className="text-3xl font-bold text-accent">YN</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
