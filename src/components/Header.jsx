import React, {useState} from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a className="text-xl font-semibold text-accent" href="#">Your Name</a>

        <button className="md:hidden text-slate-700" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>

        <nav className={`flex-col md:flex md:flex-row md:items-center md:gap-6 ${open? 'flex':'hidden'}`}>
          <a href="#about" className="block py-2 md:py-0 px-2 text-sm text-slate-700 hover:text-accent">About</a>
          <a href="#projects" className="block py-2 md:py-0 px-2 text-sm text-slate-700 hover:text-accent">Projects</a>
          <a href="#contact" className="block py-2 md:py-0 px-2 text-sm text-slate-700 hover:text-accent">Contact</a>
        </nav>
      </div>
    </header>
  )
}
