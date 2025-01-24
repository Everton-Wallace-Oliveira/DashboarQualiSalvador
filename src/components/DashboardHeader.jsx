/** @format */

import PropTypes from 'prop-types'

export default function PageHeader({ title }) {
  return (
		<header className='w-full bg-gradient-to-br from-orange-400 to-orange-600 text-white p-4 rounded-2xl shadow-md'>
			<h1 className='text-2xl font-bold'>{title}</h1>
    </header>
	)
}

PageHeader.propTypes = {
    data: PropTypes.any,
    title: PropTypes.string,
    height: PropTypes.number,
}

