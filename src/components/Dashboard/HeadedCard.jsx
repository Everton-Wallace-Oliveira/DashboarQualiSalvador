/** @format */

import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const HeadedCard = ({ className, icon, header, title, content, link, children }) => {
	return (
    <div className={clsx('grid bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70', className)}>
			<div className='flex flex-row gap-4 bg-primary border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700'>
				{icon}
				<h3 className='text-base font-sans text-primary-600 dark:text-primary-500'>
					{header}
				</h3>
			</div>
			<div className='p-4 md:p-5'>
				<h3 className='text-lg font-bold text-gray-800 dark:text-white'>
					{title}{' '}
				</h3>
				<p className='mt-2 text-gray-500 dark:text-neutral-400'>{content} </p>

				{children}

				{/* link */}
				<a
					className='mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600'
					href='#'
				>
					{link}
					<ChevronRightIcon />
					{/* link */}
				</a>
			</div>
		</div>
	)
}

HeadedCard.propTypes = {
	icon: PropTypes.any,
	className: PropTypes.any,
	header: PropTypes.string,
	title: PropTypes.any,
	content: PropTypes.string,
	link: PropTypes.any,
	children: PropTypes.node,
}

export default HeadedCard
