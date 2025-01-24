/** @format */

import React from 'react'
import { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import Home from '../pages/Home'
import GeneralData from '../pages/GeneralData'
import DataByGender from '../pages/DataByGender'
import DataByRace from '../pages/DataByRace'
import { HomeIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/16/solid'

export const Sidebar = () => {
  const [value, setValue] = useState(0)
  
  const handleChange = (event, newValue) => {
		setValue(newValue)
		console.log(event)
  }

	return (
		<div>
			<div className='max-sm:hidden'>
				<Tabs
					value={value}
					onChange={handleChange}
					orientation='vertical'
					variant='scrollable'
					className='flex'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 6,
						paddingY: 0,
						'& .MuiTabs-indicator': {
							backgroundColor: 'transparent',
							border: 'none',
							outline: 'none', // Cor do indicador da aba ativa
						},
						'& .MuiTab-root': {
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
							paddingY: 0,
							paddingX: 3,
							gap: 1,
							border: 'none',
							fontSize: '1rem',
							textTransform: 'none',
							height: 'fit-content',
							minHeight: '50px',
							width: '100%',
							fontWeight: 'bold',
							color: 'white',
							'&.Mui-selected': {
								backgroundColor: '#34d399',
								color: '#065f46',
								borderRadius: 10,
								border: 'none',
								outline: 'none',
							},
							'&:hover': {
								backgroundColor: '#10b981', // Cor do fundo da aba ao passar o mouse
								borderRadius: 10, // Borda arredondada da aba ao passar o mouse
							},
						},
					}}
				>
					<Tab
						icon={<HomeIcon className='size-5' />}
						label='Dashboards'
						className='tabs'
					/>
					<Tab
						icon={<UsersIcon className='size-5' />}
						label='Transações'
						className='tabs'
					/>
					<Tab
						icon={<ChartBarIcon className='size-5' />}
						label='Contratos'
						className='tabs'
					/>
					<Tab
						icon={<UsersIcon className='size-5' />}
						label='Funcionários'
						className='tabs'
					/>
					<Tab
						icon={<GlobeAsiaAustraliaIcon className='size-5' />}
						label='Viagens'
						className='tabs'
					/>
					<Tab
						icon={<CreditCardIcon className='size-5' />}
						label='Cartões'
						className='tabs'
					/>
				</Tabs>
			</div>

			<div className='md:hidden'>
				<Tabs
					value={value}
					onChange={handleChange}
					orientation='horizontal'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						paddingY: 0,
						'& .MuiTabs-indicator': {
							backgroundColor: 'transparent',
							border: 'none',
							outline: 'none', // Cor do indicador da aba ativa
						},
						'& .MuiTab-root': {
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
							paddingY: 0,
							paddingX: 3,
							gap: 0,
							border: 'none',
							fontSize: '1rem',
							textTransform: 'none',
							height: 'fit-content',
							width: 'fit-content',
							minWidth: '50px',
							fontWeight: 'bold',
							color: 'grey',
							'&.Mui-selected': {
								backgroundColor: 'transparent',
								color: '#34d399',
								borderRadius: 10,
								border: 'none',
								outline: 'none',
							},
							'&:hover': {
								margin: '0px',
								alignItems: 'center',
								justifyContent: 'center',
								minHeight: '35px',
								minWidth: '30px',
								backgroundColor: '#34d399', // Cor do fundo da aba ao passar o mouse
								borderRadius: 15, // Borda arredondada da aba ao passar o mouse
							},
						},
					}}
				>
					<Tab
						icon={<HomeIcon className='size-5' />}
						className='tabs'
					/>
					<Tab
						icon={<CurrencyDollarIcon className='size-5' />}
						className='tabs'
					/>
					<Tab
						icon={<BookOpenIcon className='size-5' />}
						className='tabs'
					/>
					<Tab
						icon={<UsersIcon className='size-5' />}
						className='tabs'
					/>
					<Tab
						icon={<GlobeAsiaAustraliaIcon className='size-5' />}
						className='tabs'
					/>
					<Tab
						icon={<CreditCardIcon className='size-5' />}
						className='tabs'
					/>
				</Tabs>
			</div>

			<section className='main'>
				{value === 0 && <Home />}
				{value === 1 && <GeneralData />}
				{value === 2 && <DataByGender />}
				{value === 3 && <DataByRace />}
			</section>
		</div>
	)
}

export default Sidebar
