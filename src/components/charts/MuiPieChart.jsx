/** @format */

import { PieChart } from '@mui/x-charts/PieChart'
import PropTypes from 'prop-types'

const MuiPieChart = ({ data }) => {
	;<PieChart
		series={[
			{
				data: { data },
				innerRadius: 50,
				outerRadius: 100,
				paddingAngle: 2,
				cornerRadius: 8,
				startAngle: -45,
				endAngle: 315,
				cx: 150,
				cy: 150,
			},
		]}
	/>
}

PieChart.propTypes = {
	data: PropTypes.any,
}

export default MuiPieChart
