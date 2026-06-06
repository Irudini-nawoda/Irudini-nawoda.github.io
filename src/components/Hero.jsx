import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, x:-18}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <div className="glass-card">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-3">Designing & Building<br/>Digital Products</h1>
            <p className="lead text-lg md:text-xl max-w-2xl mb-6">I’m Your Name — a front-end developer focused on performance, accessibility, and refined user experiences for web and mobile.</p>
            <div className="flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-lg shadow-md">View Projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-lg">Contact</a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 p-8 flex items-center justify-center">
                <div className="w-48 h-48 rounded-2xl bg-white flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent">YN</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-sm text-slate-600">Available for freelance and full-time roles. Open to remote work.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
