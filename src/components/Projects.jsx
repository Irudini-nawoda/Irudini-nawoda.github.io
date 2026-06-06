import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {title: 'Project One', desc: 'A modern e-commerce UI with performance optimizations.'},
  {title: 'Project Two', desc: 'A data visualization dashboard built with React and D3.'},
  {title: 'Project Three', desc: 'A mobile-first progressive web app with offline support.'}
]

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={p.title} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transform hover:-translate-y-1 transition">
            <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-400">Image</div>
            <div className="p-5">
              <h3 className="font-medium mb-2 group-hover:text-accent">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4"><a className="text-accent text-sm font-medium" href="#">View case study →</a></div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
