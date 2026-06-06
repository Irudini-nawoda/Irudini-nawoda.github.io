import React from 'react'

export default function Header(){
  return (
    <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a className="text-xl font-semibold text-accent" href="#">Your Name</a>
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
      </div>
    </header>
  )
}
