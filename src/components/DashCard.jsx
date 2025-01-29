/** @format */

import { Card, CardContent, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const DashCard = ({ icon, title, main, detail, other }) => {
    return (
        <Card
            elevation={4}
			className='infocard flex flex-auto min-w-min lg:min-h-28 px-2 items-center justify-evenly bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg text-center'
		>
			{icon}
			<CardContent className='flex flex-col justify-items-center'>
				<Typography
					component='h3'
					className='card-text'
				>
					{title}
				</Typography>
				<Typography
					component='h4'
					className='card-main-text'
				>
					{main}
				</Typography>
				<Typography className='card-text'>{detail}</Typography>
				<Typography className='card-text text-2xl font-[800]'>
					{other}
				</Typography>
			</CardContent>
		</Card>
	)
}

DashCard.propTypes = {
	icon: PropTypes.any,
	title: PropTypes.string,
	main: PropTypes.any,
	detail: PropTypes.any,
	other: PropTypes.any,
}

export default DashCard
