/** @format */

import { useEffect, useState } from 'react'
import { ResponsivePie } from '@nivo/pie'
import topFiveArray from './utils/topFiveArray'
import fetchData from '../../api'
import PropTypes from 'prop-types'

const NivoPieChart = ({ categoria }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData().then((responseData) => {
			const topFive = topFiveArray(responseData, categoria) // Conta os valores
			setData(topFive)
		})
	}, [categoria])

	return (
		<div style={{ width: '100%', height: '100%' }}>
			{data.length > 0 ? (
				<ResponsivePie
					data={data}
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					innerRadius={0.5}
					padAngle={0.7}
					cornerRadius={3}
					colors={{ scheme: 'orange_red' }}
					borderWidth={1}
					borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
					radialLabelsSkipAngle={10}
					radialLabelsTextColor='#333333'
					radialLabelsLinkColor={{ from: 'color' }}
					sliceLabelsSkipAngle={10}
					sliceLabelsTextColor='#ffffff'
					legends={[
						{
							anchor: 'bottom',
							direction: 'row',
							justify: false,
							translateY: 50,
							itemsSpacing: 10,
							itemWidth: 100,
							itemHeight: 20,
							itemTextColor: '#333333',
							itemDirection: 'left-to-right',
							symbolSize: 18,
							symbolShape: 'circle',
						},
					]}
				/>
			) : (
				<p>Carregando...</p>
			)}
		</div>
	)
}

NivoPieChart.propTypes = {
	categoria: PropTypes.string.isRequired || PropTypes.array.isRequired,
}

export default NivoPieChart