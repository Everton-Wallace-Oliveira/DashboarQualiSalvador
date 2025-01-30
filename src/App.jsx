/** @format */

import { useState } from 'react'
import Home from './pages/Home'
import GeneralData from './pages/GeneralData'
import DataByGender from './pages/DataByGender'
import DataByRace from './pages/DataByRace'
import {
  HomeIcon,
  ChartPieIcon,
  ChartBarIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline'
import FullTable from './pages/FullTable'
// import Sidebar from './components/Sidebar'
import logoGrumap from './assets/logo-grumap-removebg.png'
import logoUFBA from './assets/logo_ufba.png'
import './styles/index.css'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { name: 'Panorama', icon: <HomeIcon /> },
    { name: 'Panorama', icon: <ChartPieIcon /> },
    { name: 'Dados por Genero', icon: <ChartBarIcon /> },
    { name: 'Dados por Etnia', icon: <ChartBarIcon /> },
    { name: 'Tabela Geral', icon: <TableCellsIcon /> },
  ]

  return (
    <section className='flex lg:grid flex-col-reverse lg:grid-cols-[280px,_1fr] items-start h-screen lg:pb-4 gap-2 lg:gap-4 overflow-hidden 
          text-slate-900'>
      <header className=' flex flex-col h-fit lg:h-full w-full p-4 pt-2 lg:w-[320px]'>

        <div className='flex gap-2 place-content-center @apply max-lg:hidden'>
          <img
            src={logoGrumap}
            alt='Logo GRUMAP'
            className='self-center w-[180px] h-auto pb-8'
          />
          <img
            src={logoUFBA}
            alt='Logo UFBA'
            className='self-center w-auto h-[120px] pt-8'
          />
        </div>

        <div className='flex lg:flex-col w-full lg:w-[320px] justify-evenly'>
          {tabs.map(({ name, icon }, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className='flex flex-row h-max w-full py-4 gap-2 justify-center lg:justify-start font-bold text-lg text-primary-50 rounded-xl transition-all duration-1000 hover:bg-secondary-300 focus:text-secondary-100 focus:bg-secondary-400'
            >
              <span className='tab-icon'>{icon}</span>
              <span className='@apply max-lg:hidden'>{name}</span>
            </button>
          ))}
          </div>

      </header>

      <section className='flex flex-col h-full w-full overflow-hidden'>
        <h1 className='h-fit leading-none my-2'>
          {activeTab === 0 && 'Início'}
          {activeTab === 1 && 'Panorama Geral'}
          {activeTab === 2 && 'Dados por Gênero'}
          {activeTab === 3 && 'Dados por Etnia'}
          {activeTab === 4 && 'Tabela Completa'}
        </h1>

        {activeTab === 0 && <Home />}
        {activeTab === 1 && <GeneralData />}
        {activeTab === 2 && <DataByGender />}
        {activeTab === 3 && <DataByRace />}
        {activeTab === 4 && <FullTable />}
      </section>
    </section>
  )
}

export default App