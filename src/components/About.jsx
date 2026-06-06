import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-3">About me</h2>
          <p className="text-slate-600">I’m a front-end developer with experience building production-ready web applications. I focus on creating inclusive, fast, and maintainable interfaces.</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">What I bring</h3>
          <ul className="list-disc list-inside text-slate-600">
            <li>Pixel-perfect UI and responsive layouts</li>
            <li>Performance optimization and accessibility</li>
            <li>Cross-team collaboration and design systems</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
