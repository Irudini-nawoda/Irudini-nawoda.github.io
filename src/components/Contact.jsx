import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="bg-white rounded-2xl p-6 shadow">
        <p className="text-slate-600 mb-4">Interested in working together? Email me at <a href="mailto:you@example.com" className="text-accent">you@example.com</a> or reach out on LinkedIn.</p>
        <div className="flex gap-3">
          <a className="inline-block bg-accent text-white px-4 py-2 rounded" href="mailto:you@example.com">Email</a>
          <a className="inline-block border border-slate-200 px-4 py-2 rounded" href="#">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
