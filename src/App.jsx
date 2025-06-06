import logo from './assets/logo.png';

function App() {

  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img src="{logo}" alt="" className='w-52 hover:scale-105 transition-all'/>
        </a>

        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
          <li className='p-3 hover:bg-sky-400'></li>
          <li className='p-3 hover:bg-sky-400'></li>
          <li className='p-3 hover:bg-sky-400'></li>
          <li className='p-3 hover:bg-sky-400'></li>
          <li className='p-3 hover:bg-sky-400'></li>
        </ul>
      </header>
    </div>
  )
}

export default App;