/** @format */

import { TvIcon } from '@heroicons/react/16/solid'
import PropTypes from 'prop-types'

const AppStats = ({ icon, title, value, unit }) => {
	return (
		<div className="flex flex-col bg-gradient-to-b from-primary to-primary-300 overflow-hidden border shadow-lg rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
          <div className="p-4 md:p-5 flex justify-between gap-x-3">
            <div className="shrink-0 flex justify-center items-center size-[46px] bg-primary-400 text-white rounded-full dark:bg-blue-900 dark:text-blue-200 *:size-6">
            {icon}
            </div>
            <div>
          <p className=" inline-flex justify-between items-center text-sm text-gray-600  dark:border-neutral-800 dark:text-neutral-400" href="#">
{title}            
          </p>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                  {value}
                </h3>
                <span className="flex items-center gap-x-1 text-green-600">
                  <TvIcon />
                  <span className="inline-block text-lg">
                    1.7%
                  </span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
{unit} dddd              </p>
            </div>
          </div>
    
        </div>
	)
}

AppStats.propTypes = {
	icon: PropTypes.any,
	title: PropTypes.string,
  value: PropTypes.any,
  unit: PropTypes.string
}

export default AppStats
