/** @format */

import './styles/index.css'
import { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import Home from './pages/Home'
import GeneralData from './pages/GeneralData'
import DataByGender from './pages/DataByGender'
import DataByRace from './pages/DataByRace'
import { HomeIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/16/solid'
import { TableCellsIcon } from '@heroicons/react/24/outline'
import FullTable from './pages/FullTable'
// import Sidebar from './components/Sidebar'
import BottomNavigationBar from './components/BottomNavigationBar'
import logoGrumap from './assets/logo-grumap-removebg.png'
import logoUFBA from './assets/logo_ufba.png'

function App() {
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
		console.log(event)
	}

	return (
		<>
			<section className='body'>
				{/* <div header></div> */}
				<header className='header'>
					<Tabs
						value={value}
						onChange={handleChange}
						orientation='vertical'
						className='tab-list'
						sx={{
							'& .MuiTab-root': {
								textTransform: 'none',
								minHeight: '120%',
								'&.Mui-selected': {
									outline: 'none',
								},
							},
						}}
					>
						<img
							src={logoGrumap}
							alt='Logo GRUMAP'
							className='self-center w-[180px] h-auto pb-8'
						/>
						<Tab
							icon={<HomeIcon className='size-6' />}
							label='Início'
							className='tab'
						/>
						<Tab
							icon={<UsersIcon className='size-6' />}
							label='Panorama Geral'
							className='tab'
						/>
						<Tab
							icon={<ChartBarIcon className='size-6' />}
							label='Dados por Gênero'
							className='tab'
						/>
						<Tab
							icon={<ChartBarIcon className='size-6' />}
							label='Dados por Etnia'
							className='tab'
						/>
						<Tab
							icon={<TableCellsIcon className='size-6' />}
							label='Tabela Completa'
							className='tab'
						/>
						<img
							src={logoUFBA}
							alt='Logo UFBA'
							className='self-center w-auto h-[120px] pt-8'
						/>
					</Tabs>

					{/* <Sidebar /> */}

					<BottomNavigationBar />
				</header>

				<section className='main'>
					<h1>
						{value === 1 && 'Início'}
						{value === 2 && 'Panorama Geral'}
						{value === 3 && 'Dados por Gênero'}
						{value === 4 && 'Dados por Etnia'}
						{value === 5 && 'Tabela Completa'}
					</h1>

					{value === 1 && <Home />}
					{value === 2 && <GeneralData />}
					{value === 3 && <DataByGender />}
					{value === 4 && <DataByRace />}
					{value === 5 && <FullTable />}
				</section>
			</section>
		</>
	)
}

export default App
