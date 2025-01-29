/** @format */

import PropTypes from 'prop-types'

const IconSections = ({ icon, title, text }) => {
	return (
		<div className='text-center'>
			<div className='flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700'>
				{icon}
			</div>
			<div className='mt-3'>
				<h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
					{title}
				</h3>
				<p className='mt-1 text-gray-600 dark:text-neutral-400'>{text}</p>
			</div>
		</div>
	)
}

IconSections.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  text: PropTypes.any,
}

export default IconSections
