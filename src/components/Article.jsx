/** @format */

import PropTypes from 'prop-types'
import { ShareIcon } from '@heroicons/react/24/outline'

const Article = ({
	title01,
	title02,
	author,
	date,
	content01,
	content02,
	display01,
	image01,
	image02,
	image03,
	badge01,
	badge02,
	badge03,
}) => {
	return (
				<div className='lg:col-span-2'>
					<div className='py-8 lg:pe-8'>
						<div className='space-y-5 lg:space-y-8'>
							<h2>{title01}</h2>

							<div className='flex items-center gap-x-5'>
								<a
									className='inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
									href='#'
								>
									{author}
								</a>
								<p className='text-xs sm:text-sm text-gray-800 dark:text-neutral-200'>
									{date}
								</p>
							</div>

							<p className='text-lg text-gray-800 dark:text-neutral-200'>
								{content01}
							</p>

							{/* mosaico */}
							<div className='text-center'>
								<div className='grid lg:grid-cols-2 gap-3'>
									<div className='grid grid-cols-2 lg:grid-cols-1 gap-3'>
										<figure className='relative w-full h-60'>
											<img
												className='size-full absolute top-0 start-0 object-cover rounded-xl'
												src={image01}
												alt='Blog Image'
											/>
										</figure>
										<figure className='relative w-full h-60'>
											<img
												className='size-full absolute top-0 start-0 object-cover rounded-xl'
												src={image02}
												alt='Blog Image'
											/>
										</figure>
									</div>
									<figure className='relative w-full h-72 sm:h-96 lg:h-full'>
										<img
											className='size-full absolute top-0 start-0 object-cover rounded-xl'
											src={image03}
											alt='Blog Image'
										/>
									</figure>
								</div>

								<span className='mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500'>
									Working process
								</span>
							</div>

							<blockquote className='text-center p-4 sm:px-7'>
								<p className='text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200'>
									{display01}
								</p>
							</blockquote>

							<div className='space-y-3'>
								<h3 className='text-2xl font-semibold dark:text-white'>
									{title02}
								</h3>

								<p className='text-lg text-gray-800 dark:text-neutral-200'>
									{content02}
								</p>

								{/* article footer */}
								<div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0'>
									{/* <!-- Badges/Tags --> */}
									<div>
										<a
											className='m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
											href='#'
										>
											{badge01}{' '}
										</a>
										<a
											className='m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
											href='#'
										>
											{badge02}
										</a>
										<a
											className='m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
											href='#'
										>
											{badge03}
										</a>
									</div>
									{/* <!-- End Badges/Tags --> */}

									<div className='flex justify-end items-center gap-x-1.5'>
										{/* <!-- Button --> */}
										<div className='hs-dropdown relative inline-flex'>
											<button
												id='hs-blog-article-share-dropdown'
												type='button'
												className='hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200'
												aria-haspopup='menu'
												aria-expanded='false'
												aria-label='Dropdown'
											>
												<ShareIcon /> Compartilhar
											</button>
										</div>
										{/* <!-- Button --> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
		
	)
}

Article.propTypes = {
	author: PropTypes.string,
	date: PropTypes.any,
	title01: PropTypes.string,
	title02: PropTypes.string,
	content01: PropTypes.string,
	content02: PropTypes.string,
	badge01: PropTypes.string,
	badge02: PropTypes.string,
	badge03: PropTypes.string,
	display01: PropTypes.string,
	image01: PropTypes.any,
	image02: PropTypes.any,
	image03: PropTypes.any,
}
Article.defaultProps = {
	author: '',
	date: null,
	title01: '',
	title02: '',
	content01: '',
	content02: '',
	badge01: '',
	badge02: '',
	badge03: '',
	display01: '',
	image01: null,
	image02: null,
	image03: null,
}

export default Article
