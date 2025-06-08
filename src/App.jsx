import logo from './assets/logo.png';

function App() {

  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img src={logo} alt="" className='w-52 hover:scale-105 transition-all'/>
        </a>

        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Inicío</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Carros</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Pilotos</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Sonre nós</li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3">
          <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
          <input type="text" placeholder='Buscar...' className='py-2 pl-10 rounded-xl border-2
               border-b-green-300 focus:bg-slate-100 focus:outline-sky-500'/>
        </div>

        <i className='bx bx-menu'></i>
      </header>
    </div>
  )
}

export default App;