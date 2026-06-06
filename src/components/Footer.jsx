import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-6 py-8 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Your Name — Built with React, Vite, and Tailwind.</p>
      </div>
    </footer>
  )
}
