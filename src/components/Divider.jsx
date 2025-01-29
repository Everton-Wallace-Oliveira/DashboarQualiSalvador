import React from 'react'
import PropTypes from 'prop-types'

const Divider = ({children}) => {
  return (
    <div className='divider'>{children}</div>
  )
}

Divider.propTypes = {
  children:PropTypes.node,
}

export default Divider