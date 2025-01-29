/** @format */

import { ChartBarIcon, HomeIcon, ChartPieIcon, TableCellsIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function BottomNavigationBar() {
const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
		console.log(event)
	}

	return (
		<div className='glass btm-nav m-4 rounded-xl md:hidden'>
			<button className='text-accent' value={value} onClick={handleChange}>
        <HomeIcon className='size-8' />
			</button>
			<button className='text-accent active'>
				<ChartPieIcon className='size-8' />
			</button>
			<button className='text-accent active'>
				<ChartBarIcon className='size-8' />
			</button>
			<button className='text-accent'>
				<ChartBarIcon className='size-8'/>
			</button>
			<button className='text-accent'>
				<TableCellsIcon className='size-8'/>
			</button>
		</div>
	)
}
