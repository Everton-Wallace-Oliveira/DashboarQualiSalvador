/** @format */

import { useEffect, useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { fetchData } from './api/fetchData'
import PropTypes from 'prop-types'

const NivoBarChart = ({ categoria }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData().then((responseData) => {
			setData(responseData)
		})
	}, [categoria])

	return (
		<div style={{ width: '100%', height: '100%' }}>
			{data.length > 0 ? (
				<ResponsiveBar
					data={data}
					keys={[categoria]}
					indexBy='id'
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					padding={0.3}
					colors={{ scheme: 'orange_red' }}
					borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
					axisBottom={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
					axisLeft={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
				/>
			) : (
				<p>Carregando...</p>
			)}
		</div>
	)
}

NivoBarChart.propTypes = {
	categoria: PropTypes.string.isRequired || PropTypes.array.isRequired,
}

export default NivoBarChart
