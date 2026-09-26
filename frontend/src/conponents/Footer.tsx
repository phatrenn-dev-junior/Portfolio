import React from 'react'
import { Code2 } from "lucide-react";
const Footer = () => {

    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-400">Ren Developer</span>
              </div>
    
              <div className="text-slate-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Built with{" "}
                <span className="text-indigo-400">React</span>,{" "}
                <span className="text-emerald-400">Node.js</span>,{" "}
                <span className="text-amber-400">Express</span> &{" "}
                <span className="text-emerald-500">MongoDB</span>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer