import logo from './assets/logo.png';
import background from './assets/f1-car-walpaper.jpg';
import { useState } from 'react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400"
     style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

      <header className="flex justify-between items-center text-white px-8 md:px-32 transparent drop-shadow-md">
        <a href="#">
          <img src={logo} alt="" className='w-52 hover:scale-105 transition-all'/>
        </a>

        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Inicío</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Carros</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Pilotos</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Sobre nós</li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3">
          <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
          <input type="text" placeholder='Buscar...' className='py-2 pl-10 rounded-xl border-2
               border-b-green-300 focus:bg-slate-100 focus:outline-sky-500 placeholder:text-white'/>
        </div>

        <i className='bx bx-menu lg:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold
           text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} 
           style={{transition: "trasform 0.3s ease, opacity 0.3s ease"}}>

            
            <li className='list-none w-full text-center p-4 hover:bg-sky hover:text-white transition-all cursor-pointer'>Inicío</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky hover:text-white transition-all cursor-pointer'>Carros</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky hover:text-white transition-all cursor-pointer'>Pilotos</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky hover:text-white transition-all cursor-pointer'>Sobre nós</li>
           </div>
      </header>
    </div>
  )
}

export default App;