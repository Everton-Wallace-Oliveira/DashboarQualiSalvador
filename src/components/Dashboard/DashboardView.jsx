import React from 'react'
import PropTypes from 'prop-types'

const DashboardView = ({tab}) => {
  return (
    <div className='bg-primary-50 rounded-xl pb-8 shadow h-[200vh]'>
      {tab}
    </div>
  )
}

DashboardView.propTypes = {
  tab: PropTypes.string,
}

export default DashboardView