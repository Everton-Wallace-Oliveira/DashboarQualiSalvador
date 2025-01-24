/** @format */

import React from 'react'
import './styles/App.css'
import { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import Home from './pages/Home'
import GeneralData from './pages/GeneralData'
import DataByGender from './pages/DataByGender'
import DataByRace from './pages/DataByRace'
import { HomeIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/16/solid'

// import clsx from 'clsx'

function App() {
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
		console.log(event)
	}

	return (
		<>
			<header className='header'>
                <Tabs
					value={value}
					onChange={handleChange}
					orientation='vertical'
					className='h-max tab-list hidden sm:flex'
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
					<Tab
						icon={<HomeIcon className='size-6' />}
						label='Início'
						className='tab'
					/>
					<Tab
						icon={<UsersIcon className='size-6' />}
						label='Dados Demográficos'
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
				</Tabs>

				<Tabs
					value={value}
					onChange={handleChange}
					sx={{
						'& .MuiTab-root': {
							'&.Mui-selected': {
								outline: 'none',
							},
						},
					}}
					className='tab-list sm:hidden'
				>
					<Tab
						icon={<HomeIcon className='size-6' />}
						className='tab'
					/>
					<Tab
						icon={<UsersIcon className='size-6' />}
						className='tab'
					/>
					<Tab
						icon={<ChartBarIcon className='size-6' />}
						className='tab'
					/>
					<Tab
						icon={<ChartBarIcon className='size-6' />}
						className='tab'
					/>
				</Tabs>
			</header>

			<section className='main'>
				{value === 0 && <Home />}
				{value === 1 && <GeneralData />}
				{value === 2 && <DataByGender />}
				{value === 3 && <DataByRace />}
			</section>
		</>
	)
}

export default App
