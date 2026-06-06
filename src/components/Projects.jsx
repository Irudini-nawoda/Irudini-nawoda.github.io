import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {title: 'Project One', desc: 'A brief summary of project one and the impact it had.'},
  {title: 'Project Two', desc: 'A brief summary of project two and the impact it had.'},
  {title: 'Project Three', desc: 'A brief summary of project three and the impact it had.'}
]

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={p.title} initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.12}} className="p-5 bg-white rounded-xl shadow">
            <h3 className="font-medium mb-2">{p.title}</h3>
            <p className="text-sm text-slate-600">{p.desc}</p>
            <div className="mt-4"><a className="text-accent text-sm" href="#">View case study →</a></div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
