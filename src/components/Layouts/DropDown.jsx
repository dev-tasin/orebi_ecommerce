import React from 'react'

const DropDown = ({className, dropRef, children}) => {
  return (
    <div className={className} ref={dropRef}>{children}</div>
  )
}

export default DropDown